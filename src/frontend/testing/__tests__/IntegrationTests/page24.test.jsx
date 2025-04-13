import { render, screen, fireEvent } from "@testing-library/react";
import Page24 from "@/app/chapter4/page24/page";
import { useRouter } from "next/navigation";

// Mock the useRouter function from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page24", () => {
  const mockPush = jest.fn();
  const PAGE_NUMBER = "24";

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<Page24 />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all components correctly", () => {
    const chapterTitle = screen.getByText("Chapter 4");
    expect(chapterTitle).toBeInTheDocument();

    const mainTitle = screen.getByText(/Functional/i);
    expect(mainTitle).toBeInTheDocument();

    const firstImage = screen.getByAltText("Chapter4 Front Page Image 1");
    const secondImage = screen.getByAltText("Chapter4 Front Page Image 2");

    expect(firstImage).toBeInTheDocument();
    expect(secondImage).toBeInTheDocument();

    expect(screen.getByText(PAGE_NUMBER)).toBeInTheDocument();

    const footerText = screen.getByText("iConcepts in Orthodontics 2026");
    expect(footerText).toBeInTheDocument();
  });

  it("navigates to the previous page", () => {
    const leftButton = screen.getByTestId("previousPage");
    fireEvent.click(leftButton);
    expect(mockPush).toHaveBeenCalledWith(`/chapter3/page${PAGE_NUMBER - 1}`);
  });

  it("navigates to the next page", () => {
    const rightButton = screen.getByTestId("nextPage");
    fireEvent.click(rightButton);
    expect(mockPush).toHaveBeenCalledWith(
      `/chapter4/page${parseInt(PAGE_NUMBER) + 1}`
    );
  });
});
