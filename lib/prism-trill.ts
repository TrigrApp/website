import Prism from "prismjs";

const builtins =
  /\b(?:upper|lower|trim|trim_start|trim_end|len|length|repeat|replace|slice|split|contains|starts_with|ends_with|substr|reverse|pad_start|pad_end|concat|title|join|to_num|number|to_str|string|floor|ceil|ceiling|round|abs|min|max|clamp|rand|random|list|choice|first|last|map|filter|sort|join_list|now|today|date_add|date_format|if_then_else|__builtin_or|__builtin_and)\b/;

Prism.languages.trill = {
  comment: [
    { pattern: /\/\/.*/, greedy: true },
    { pattern: /\/\*[\s\S]*?\*\//, greedy: true },
  ],
  string: {
    pattern: /"([^"\\]|\\.)*"/,
    greedy: true,
    inside: {
      escape: { pattern: /\\(?:[ntr"\\])/, alias: "char" },
    },
  },
  char: {
    pattern: /'([^'\\]|\\.)'/,
    greedy: true,
    inside: {
      escape: { pattern: /\\(?:[ntr'\\])/, alias: "char" },
    },
  },
  keyword: /\b(?:if|else|then|for|in|let|return|fn|match|and|or|not)\b/,
  boolean: /\b(?:true|false)\b/,
  nil: /\bnil\b/,
  number: /\b-?\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  builtin: builtins,
  operator: /[+\-*/%<>=]=?|!=|=>|->|\.\.?/,
  punctuation: /[{}()\[\],;:|]/,
  variable: {
    pattern: /_arg_\d+|_args_len|__pipe_input|__item|args|[a-zA-Z_]\w*/,
    lookbehind: true,
  },
  "template-variable": {
    pattern: /\{\{[^}]+\}\}/,
    greedy: true,
  },
};

export default Prism;
