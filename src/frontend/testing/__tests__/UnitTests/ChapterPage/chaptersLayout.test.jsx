import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChaptersLayout from "@/components/ChapterPage/chaptersLayout/chaptersLayout";
import { chapterInfo } from "@/textContent/chapterInfo";

// Mock next/image
jest.mock("next/image", () => (props) => <img {...props} />);

// Mock next/link
jest.mock("next/link", () => ({ children, href }) => (
  <a href={href}>{children}</a>
));

describe("ChaptersLayout component", () => {
  const chapterItem = chapterInfo[0]; // Example: "Chapter 1" item

  beforeEach(() => {
    render(<ChaptersLayout chapterItem={chapterItem} />);
  });

  const assertSectionRendered = (section) => {
    expect(screen.getByText(section.title)).toBeInTheDocument();
    expect(screen.getAllByText(section.description).length).toBeGreaterThan(0);
  };

  it("should render the section titles and descriptions", () => {
    chapterItem.chapterSection.forEach(assertSectionRendered);
  });

  it("should render images with correct src attribute", () => {
    chapterItem.chapterSection.forEach((section) => {
      const sectionElement = screen.getByText(section.title).closest("a");
      const image = within(sectionElement).getByAltText(
        "Section display image"
      );
      expect(image).toHaveAttribute("src", section.image);
    });
  });

  it("should generate correct links for each section", () => {
    chapterItem.chapterSection.forEach((section) => {
      const link = screen.getByText(section.title).closest("a");
      expect(link).toHaveAttribute(
        "href",
        `/${chapterItem.id}/${section.page}`
      );
    });
  });

  it("should display the section title heading", () => {
    const sectionTitleHeading = screen.getByText("Section Title");
    expect(sectionTitleHeading).toBeInTheDocument();
  });
});
