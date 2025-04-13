import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrthodonticsPage from "@/app/page";
import { useRouter } from "next/router";

// Mock the Next.js router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock the CardItem component
jest.mock("@/components/FrontPage/CardItem", () => {
  return ({ title, description, route, imageUrl }) => (
    <li data-testid="card-item">
      <a href={`/${route}`}>
        <div>{title}</div>
        <div>{description}</div>
        <img src={imageUrl} alt={title} />
      </a>
    </li>
  );
});

describe("OrthodonticsPage", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    render(<OrthodonticsPage />);
  });

  it("renders the main title", () => {
    const mainTitle = screen.getByText("iConcepts in Orthodontics");
    expect(mainTitle).toBeInTheDocument();
  });

  it("renders all the chapter images", () => {
    const chapterImages = screen.getAllByAltText(/Image \d+/);
    expect(chapterImages.length).toBe(6); // There are 6 images
  });

  it("renders CardItem components with titles matching 'Chapter \\d'", () => {
    const chapterTitles = screen.getAllByText(/Chapter \d/);
    expect(chapterTitles.length).toBeGreaterThan(0); // Ensure there are chapter titles rendered

    chapterTitles.forEach((titleElement) => {
      const cardItem = titleElement.closest("a");
      expect(cardItem).toHaveAttribute(
        "href",
        expect.stringContaining("/chapter")
      );
    });
  });

  it("renders the interactive components section", () => {
    const interactiveTitles = screen.getAllByText(
      /Video 1|Video 2|Video 3|H5P 1|H5P 2/
    );
    expect(interactiveTitles.length).toBe(5); // There are 5 interactive components
  });

  it("renders the footer with correct text", () => {
    const footerText = screen.getByText(/iConcepts in Orthodontics 2026/);
    expect(footerText).toBeInTheDocument();
  });

  it("check link element", () => {
    const linkElement = screen.getByText("Privacy & Copyright");
    expect(linkElement).toHaveAttribute("href", "/terms");
  });
});
