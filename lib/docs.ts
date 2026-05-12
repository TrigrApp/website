import { readFileSync, readdirSync } from "fs";
import { join } from "path";

export interface DocSection {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export interface DocNavItem {
  title: string;
  slug: string;
}

const docsDir = join(process.cwd(), "content", "docs");

function parseFrontmatter(content: string): {
  title: string;
  description: string;
  body: string;
} {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { title: "Untitled", description: "", body: content };
  }

  const frontmatter = match[1];
  const body = match[2].trim();

  const title = frontmatter.match(/title:\s*(.+)/)?.[1] || "Untitled";
  const description = frontmatter.match(/description:\s*(.+)/)?.[1] || "";

  return { title, description, body };
}

export function getAllDocs(): DocSection[] {
  const files = readdirSync(docsDir).filter((f) => f.endsWith(".md"));
  const order = [
    "getting-started",
    "triggers",
    "trill-scripting",
    "global-variables",
    "export-import",
    "packages",
    "customization",
  ];

  const docs = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = readFileSync(join(docsDir, file), "utf-8");
    const { title, description, body } = parseFrontmatter(raw);
    return { slug, title, description, content: body };
  });

  docs.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
  return docs;
}

export const docs: DocSection[] = getAllDocs();

export const docNav: DocNavItem[] = docs.map((d) => ({
  title: d.title,
  slug: d.slug,
}));
