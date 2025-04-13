import { render, screen, fireEvent } from "@testing-library/react";
import Page27 from "@/app/chapter4/page27/page";
import { useRouter } from "next/navigation";

// Mock the useRouter function from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page27", () => {
  const mockPush = jest.fn();
  const PAGE_NUMBER = "27";

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<Page27 />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all components correctly", () => {
    expect(screen.getByText("Gallery 4.2")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Clinical Management/i })
    ).toBeInTheDocument();

    const image = screen.getByAltText(
      "Initial Pre-treatment early protocol patient teased at school"
    );
    expect(image).toBeInTheDocument();

    expect(screen.getByText(PAGE_NUMBER)).toBeInTheDocument();

    const footerText = screen.getByText("iConcepts in Orthodontics 2026");
    expect(footerText).toBeInTheDocument();
  });

  it("navigates images in gallery on button click", () => {
    // Verify the initial state (first image)
    expect(
      screen.getByAltText(
        "Initial Pre-treatment early protocol patient teased at school"
      )
    ).toBeInTheDocument();

    // Click the next button (rightClick) to navigate to the second image
    const nextButton = screen.getByTestId("rightClick");
    fireEvent.click(nextButton);

    // Verify the second image is shown
    expect(
      screen.getByAltText(
        "Single activation Clark Twin Block - super compliant patient"
      )
    ).toBeInTheDocument();

    // Click the previous button (leftClick) to navigate back to the first image
    const prevButton = screen.getByTestId("leftClick");
    fireEvent.click(prevButton);

    // Verify the first image is shown again
    expect(
      screen.getByAltText(
        "Initial Pre-treatment early protocol patient teased at school"
      )
    ).toBeInTheDocument();

    // Click the previous button (leftClick) again to navigate to the last image
    fireEvent.click(prevButton);

    // Verify the last image is shown
    expect(
      screen.getByAltText(
        "8 weeks follow up near full correction - retention with same Clark Twin Block nocturnal wear"
      )
    ).toBeInTheDocument();
  });

  it("navigates to the previous page", () => {
    const leftButton = screen.getByTestId("previousPage");
    fireEvent.click(leftButton);
    expect(mockPush).toHaveBeenCalledWith(`/chapter4/page${PAGE_NUMBER - 1}`);
  });

  it("navigates to the next page", () => {
    const rightButton = screen.getByTestId("nextPage");
    fireEvent.click(rightButton);
    expect(mockPush).toHaveBeenCalledWith(
      `/chapter4/page${parseInt(PAGE_NUMBER) + 1}`
    );
  });
});
