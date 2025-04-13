import { render, screen, fireEvent } from "@testing-library/react";
import Page28 from "@/app/chapter4/page28/page";
import { useRouter } from "next/navigation";

// Mock the useRouter function from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page28", () => {
  const mockPush = jest.fn();
  const PAGE_NUMBER = "28";

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<Page28 />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all components correctly", () => {
    expect(
      screen.getByRole("heading", {
        name: /INDICATIONS OF FUNCTIONAL APPLIANCES/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /CONTRA-INDICATIONS FOR FUNCTIONAL APPLIANCES/i,
      })
    ).toBeInTheDocument();

    const image1 = screen.getByAltText(/CVMi 3-4 Critical for Success/i);
    expect(image1).toBeInTheDocument();
    const image2 = screen.getByAltText(
      /Contour-enhanced forest plot for the effect/i
    );
    expect(image2).toBeInTheDocument();

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
