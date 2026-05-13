import Prism from "prismjs";
import "./prism-trill";

type Token =
  | { type: "fence"; lang: string; code: string }
  | { type: "table"; rows: string[][] }
  | { type: "list"; items: string[] }
  | { type: "ordered-list"; items: string[]; start: number }
  | { type: "hr" }
  | { type: "blockquote"; text: string }
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string };

export function renderMarkdown(md: string): string {
  const lines = md.split("\n");
  const tokens: Token[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trimEnd();

    if (!trimmed.trim() && i < lines.length - 1) {
      i++;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const lang = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      tokens.push({ type: "fence", lang, code: codeLines.join("\n") });
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableRows: string[][] = [];
      while (i < lines.length && lines[i].trimStart().startsWith("|")) {
        const row = lines[i].trim();
        if (/---/.test(row)) {
          i++;
          continue;
        }
        const escaped = row.replace(/\\([|])/g, "\x00PIPE\x00");
        const cells = escaped
          .split("|")
          .reduce<string[]>((acc, c) => {
            const t = c.trim();
            if (t !== "") acc.push(t.replace(/\x00PIPE\x00/g, "|"));
            return acc;
          }, []);
        if (cells.length > 0) tableRows.push(cells);
        i++;
      }
      if (tableRows.length > 0) tokens.push({ type: "table", rows: tableRows });
      continue;
    }

    if (trimmed.startsWith("---")) {
      i++;
      tokens.push({ type: "hr" });
      continue;
    }

    if (trimmed.startsWith("> ")) {
      const quote = trimmed.slice(2).trim();
      i++;
      tokens.push({ type: "blockquote", text: quote });
      continue;
    }

    if (/^#{1,3} /.test(trimmed)) {
      const level = (trimmed.match(/^#+/) || [""])[0].length;
      const text = trimmed.replace(/^#+\s*/, "");
      i++;
      tokens.push({ type: "heading", level, text });
      continue;
    }

    if (/^\s*[-*] /.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*] /.test(lines[i])) {
        items.push(lines[i].trim().replace(/^[-*]\s*/, ""));
        i++;
      }
      tokens.push({ type: "list", items });
      continue;
    }

    if (/^\s*\d+\. /.test(trimmed)) {
      const items: string[] = [];
      const firstMatch = lines[i].trim().match(/^\d+/);
      const start = firstMatch ? parseInt(firstMatch[0], 10) : 1;
      while (i < lines.length && /^\s*\d+\. /.test(lines[i])) {
        items.push(lines[i].trim().replace(/^\d+\.\s*/, ""));
        i++;
      }
      tokens.push({ type: "ordered-list", items, start });
      continue;
    }

    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trimStart().startsWith("```") &&
      !lines[i].trimStart().startsWith("|") &&
      !lines[i].trimStart().startsWith("---") &&
      !lines[i].trimStart().startsWith("> ") &&
      !/^#{1,3} /.test(lines[i]) &&
      !/^[-*] /.test(lines[i].trimStart()) &&
      !/^\d+\. /.test(lines[i].trimStart())
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      tokens.push({ type: "paragraph", text: paraLines.join("\n") });
    } else {
      i++;
    }
  }

  return tokens.map(renderToken).join("\n");
}

function highlight(code: string, lang: string): string {
  if (lang && Prism.languages[lang]) {
    return Prism.highlight(code, Prism.languages[lang], lang);
  }
  return escapeHtml(code);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderInline(text: string): string {
  let result = escapeHtml(text);
  result = result.replace(/\{:info\s+([^:]+?):\}/g, '<span class="info-tip" data-tip="$1"></span>');
  result = result.replace(/`([^`]+)`/g, "<code>$1</code>");
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  result = result.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  result = result.replace(/\n/g, "<br>");
  return result;
}

function renderToken(token: Token): string {
  switch (token.type) {
    case "fence": {
      const lang = token.lang;
      const highlighted = highlight(token.code, lang);
      if (!lang) {
        return `<pre><code>${highlighted}</code></pre>`;
      }
      return `<pre class="language-${lang}"><code class="language-${lang}">${highlighted}</code></pre>`;
    }
    case "table": {
      const isHeader = token.rows.length > 0;
      const body = token.rows
        .map(
          (row, ri) =>
            `<tr>${row
              .map(
                (cell) =>
                  `<${ri === 0 && isHeader ? "th" : "td"}>${renderInline(cell)}</${ri === 0 && isHeader ? "th" : "td"}>`,
              )
              .join("")}</tr>`,
        )
        .join("");
      return `<table><tbody>${body}</tbody></table>`;
    }
    case "list":
      return `<ul>${token.items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>`;
    case "ordered-list":
      return `<ol${token.start > 1 ? ` start="${token.start}"` : ""}>${token.items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ol>`;
    case "hr":
      return "<hr>";
    case "blockquote":
      return `<blockquote>${renderInline(token.text)}</blockquote>`;
    case "heading": {
      const id = slugify(token.text);
      return `<h${token.level} id="${id}"><a href="#${id}" class="anchor">${renderInline(token.text)}</a></h${token.level}>`;
    }
    case "paragraph":
      return `<p>${renderInline(token.text)}</p>`;
  }
}
