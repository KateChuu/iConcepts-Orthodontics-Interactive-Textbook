import { render, screen, fireEvent } from "@testing-library/react";
import Page32 from "@/app/chapter5/page32/page";
import { useRouter } from "next/navigation";

// Mock the useRouter function from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page32", () => {
  const mockPush = jest.fn();
  const PAGE_NUMBER = "32";

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<Page32 />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all components correctly", () => {
    // Check if all the h2 elements are present with the correct text
    expect(
      screen.getByRole("heading", { name: /HOW TO STUDY EFFECTIVELY/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /STUDY METHOD/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /MESSAGE TO THE STUDENTS/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /BE KIND TO YOURSELF/i })
    ).toBeInTheDocument();

    expect(screen.getByText(PAGE_NUMBER)).toBeInTheDocument();

    const footerText = screen.getByText("iConcepts in Orthodontics 2026");
    expect(footerText).toBeInTheDocument();
  });

  it("navigates to the previous page", () => {
    const leftButton = screen.getByTestId("previousPage");
    fireEvent.click(leftButton);
    expect(mockPush).toHaveBeenCalledWith(`/chapter5/page${PAGE_NUMBER - 1}`);
  });

  it("navigates to the next page", () => {
    const rightButton = screen.getByTestId("nextPage");
    fireEvent.click(rightButton);
    expect(mockPush).toHaveBeenCalledWith(
      `/chapter5/page${parseInt(PAGE_NUMBER) + 1}`
    );
  });
});
