/**
 * Good reference for how to parse markdown w/ HTML
 * https://unifiedjs.com/learn/recipe/remark-html/
 * https://unifiedjs.com/explore/package/hast-util-sanitize/#defaultschema
 */

import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

import React from "react";
import deepmerge from "deepmerge";
import md from "markdown-it";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default function MarkdownContent({ content }) {
  const [processedContent, setProcessedContent] = React.useState();

  React.useEffect(() => {
    if (!content) return;

    /**
     * This is needed to parse <iframe /> HTML elements in markdown files
     */
    const newSchema = deepmerge(defaultSchema, {
      attributes: { iframe: ["src"] },
      tagNames: ["iframe"],
    });

    unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeSanitize, newSchema)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content)
      .then((file) => {
        setProcessedContent(String(file));
      })
      .catch((err) => {
        throw err;
      });
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: processedContent }}></div>;
}
