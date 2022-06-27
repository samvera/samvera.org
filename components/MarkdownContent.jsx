import React from "react";
import md from "markdown-it";

export default function MarkdownContent({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>;
}
