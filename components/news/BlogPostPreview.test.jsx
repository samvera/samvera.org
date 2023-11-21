import BlogPostPreview from "./BlogPostPreview";
import { mockBlogPostPreview } from "fixtures/cms-blog-post-preview";
import { render } from "@testing-library/react";

// Mock MarkdownContent component
jest.mock("components/MarkdownContent", () => {
  return function MockMarkdownContent({ content }) {
    return <div data-testid="mock-markdown-content">{content}</div>;
  };
});

describe("BlogPostPreview", () => {
  it("renders preview textual data", () => {
    const { debug, getByText, getByAltText } = render(
      <BlogPostPreview {...mockBlogPostPreview} />
    );

    // Test title appears
    expect(
      getByText(
        "Samvera Connect 2023 Conference Celebrates In-Person Gathering of Global Community"
      )
    ).toBeInTheDocument();

    // Publish Date
    expect(getByText("November 7, 2023")).toBeInTheDocument();

    // Blog post content
    expect(
      getByText(
        "Philadelphia, PA - Samvera Connect 2023, the much-anticipated conference of the Samvera Community, concluded on October 26th at the Philadelphia Marriott Old City, marking a triumphant return to in-person events after four years of virtual conferences. The conference brought together 78 attendees from five countries, fostering a sense of community solidarity and advancing the technical development and collaboration efforts of the Samvera community."
      )
    ).toBeInTheDocument();

    // Tag Cloud
    expect(getByText(/news/i)).toBeInTheDocument();
  });

  it("renders Blog Post Preview image", () => {
    const { debug, getByAltText } = render(
      <BlogPostPreview {...mockBlogPostPreview} />
    );
    debug();

    // Image renders
    expect(
      getByAltText("Philadelphia downtown - Photo by Micah Giszack on Unsplash")
    ).toBeInTheDocument();

    // get an element by tagName "img"
    const img = document.querySelector("img");

    // check it's alt attribute
    expect(img.alt).toBe(
      "Philadelphia downtown - Photo by Micah Giszack on Unsplash"
    );

    // check it's src attribute
    expect(img.src).toBe(
      "http://images.ctfassets.net/gmxjheo1ix1o/16iCFPpKQ2PraT2Sjx344E/95a32867bc401ab67098af8a5240256c/micah-giszack-1AH0PfLQfDA-unsplash.jpg"
    );
  });
});
//
