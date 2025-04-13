import { render, screen, fireEvent } from "@testing-library/react";
import Page25 from "@/app/chapter4/page25/page";
import { useRouter } from "next/navigation";

// Mock the useRouter function from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page25", () => {
  const mockPush = jest.fn();
  const PAGE_NUMBER = "25";

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<Page25 />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all components correctly", () => {
    // Check if all the heading elements are present with the correct text
    const headings = screen.getAllByRole("heading", {
      name: /FUNCTIONAL APPLIANCES/i,
    });
    expect(headings[0]).toBeInTheDocument(); // Check the first matching heading because there are multiple headings with the same text
    expect(
      screen.getByRole("heading", { name: /Definition/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /History/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /DIFFERENT TYPES OF FUNCTIONAL APPLIANCES/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /BIOMECHANICS/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /CLASSIFICATION/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /COMPONENTS/i })
    ).toBeInTheDocument();

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
      `/chapter4/page${parseInt(PAGE_NUMBER) + 1}`
    );
  });
});
