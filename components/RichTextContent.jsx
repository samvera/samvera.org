import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RichTextContent = ({ content }) => {
  return <>{documentToReactComponents(content)}</>;
};

export default RichTextContent;
