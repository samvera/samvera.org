import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const RichTextContent = ({ content }) => {
  return <>{documentToReactComponents(content)}</>;
};
