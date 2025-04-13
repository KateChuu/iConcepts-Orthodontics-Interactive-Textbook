// This file contains JEST integration tests
// Integration tests are used to test the interaction between multiple components
// cd frontend, then run the following command:
// npm run test

import { render, screen } from "@testing-library/react";
import ChapterPage from "@/app/[chapter]/page";
import { chapterInfo } from "@/textContent/chapterInfo";

// Mock the useRouter from next/navigation
jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

describe("ChapterPage Integration", () => {
  const mockChapter = chapterInfo[0].id;

  const renderChapterPage = (params) => {
    render(<ChapterPage {...params} />);
  };

  it("renders the ChapterPage with valid chapter", () => {
    // Mock the params prop
    const params = { params: { chapter: mockChapter } };
    renderChapterPage(params);

    // Check if the back button and front page label are rendered
    expect(screen.getByAltText("Back Arrow")).toBeInTheDocument();
    expect(screen.getByText("Front Page")).toBeInTheDocument();

    // Check if the ChapterDisplay and ChaptersLayout components render content
    expect(screen.getByText(chapterInfo[0].title)).toBeInTheDocument();
    expect(
      screen.getByText(chapterInfo[0].longDescription)
    ).toBeInTheDocument();
    expect(
      screen.getByText(chapterInfo[0].chapterSection[0].title)
    ).toBeInTheDocument();
  });

  it("calls notFound when an invalid chapter is provided", () => {
    const invalidParams = { params: { chapter: "invalidChapter" } };

    // Render the component with invalid chapter
    renderChapterPage(invalidParams);

    // Check if notFound has been called
    const { notFound } = require("next/navigation");
    expect(notFound).toHaveBeenCalled();
  });
});
