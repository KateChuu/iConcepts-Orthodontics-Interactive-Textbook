// This file contains the JEST unit tests for the ChapterDisplay component.
// cd frontend, then run the following command:
// npm run test

import { render, screen } from "@testing-library/react";
import ChapterDisplay from "@/components/ChapterPage/chapterDisplay/chapterDisplay";

// Mock chapter item data
const mockChapterItem = {
  id: "chapter1",
  title: "Chapter 1",
  description: "An introduction to ...",
  image: "chapter_display_image.svg",
  longDescription: "This is a detailed description of Chapter 1.",
  chapterSection: [],
};

describe("ChapterDisplay component", () => {
  beforeEach(() => {
    render(<ChapterDisplay chapterItem={mockChapterItem} />);
  });

  const assertElementIsRendered = (text) => {
    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  };

  test("should render the chapter title, description, and image", () => {
    // check if the title and long description are rendered
    assertElementIsRendered(mockChapterItem.title);
    assertElementIsRendered(mockChapterItem.longDescription);

    // check if the image is rendered with correct alt text and src
    const imageElement = screen.getByAltText("Chapter Display Image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      expect.stringContaining(mockChapterItem.image)
    );

    // check if the publication year is rendered
    assertElementIsRendered("Published in 2024");
  });
});
