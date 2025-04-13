import { render, screen, fireEvent } from "@testing-library/react";
import Page30 from "@/app/chapter4/page30/page";
import { useRouter } from "next/navigation";

// Mock the useRouter function from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page30", () => {
  const mockPush = jest.fn();
  const PAGE_NUMBER = "30";

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<Page30 />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all components correctly", () => {
    expect(
      screen.getByRole("heading", {
        name: /Relax in nature and have hobbies that enhance your creativity/i,
      })
    ).toBeInTheDocument();

    const image = screen.getByAltText(/CVMi 3-4 Critical for Success/i);
    expect(image).toBeInTheDocument();

    expect(screen.getByText(PAGE_NUMBER)).toBeInTheDocument();

    const footerText = screen.getByText("iConcepts in Orthodontics 2026");
    expect(footerText).toBeInTheDocument();
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
      `/chapter5/page${parseInt(PAGE_NUMBER) + 1}`
    );
  });
});
