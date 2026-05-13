"use client";

interface MarkdownProps {
  html: string;
  className?: string;
}

export function Markdown({ html, className }: MarkdownProps) {
  /* eslint-disable-next-line react/no-danger */
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
