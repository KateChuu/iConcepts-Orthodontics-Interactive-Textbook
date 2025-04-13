import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavigationButton from "@/components/NavigationButton";
import { useRouter } from "next/navigation";

// Mock the useRouter function from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("NavigationButton", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders left navigation button with '<'", () => {
    render(<NavigationButton direction="left" target="/previous-page" />);

    const leftButton = screen.getByText("<");
    expect(leftButton).toBeInTheDocument();

    fireEvent.click(leftButton);
    expect(mockPush).toHaveBeenCalledWith("/previous-page");
  });

  it("renders right navigation button with '>'", () => {
    render(<NavigationButton direction="right" target="/next-page" />);

    const rightButton = screen.getByText(">");
    expect(rightButton).toBeInTheDocument();

    fireEvent.click(rightButton);
    expect(mockPush).toHaveBeenCalledWith("/next-page");
  });
});
