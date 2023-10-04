import { useEffect, useState } from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";

const RichTextFromMarkdown = ({ content }) => {
  const [richText, setRichText] = useState(null);

  useEffect(() => {
    if (!content) return;

    async function fn() {
      const response = await richTextFromMarkdown(content);

      setRichText(response);
    }
    fn();
  }, [content]);

  return richText ? <>{documentToReactComponents(richText)}</> : null;
};

export default RichTextFromMarkdown;
