import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RichTextContent = ({ content }) => {
  if (!content) return null;
  return <>{documentToReactComponents(content)}</>;
};

export default RichTextContent;
