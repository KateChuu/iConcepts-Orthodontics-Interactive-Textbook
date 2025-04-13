import { render, screen, fireEvent } from "@testing-library/react";
import Page29 from "@/app/chapter4/page29/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page29", () => {
  const mockPush = jest.fn();
  const PAGE_NUMBER = "29";

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<Page29 />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all components correctly", () => {
    const title = screen.getByText("H5P Learning Experience");
    expect(title).toBeInTheDocument();

    // Check if the iframes are rendered
    const iframe1 = screen.getByLabelText("CAD CAM Digital Work Flow");
    const iframe2 = screen.getByLabelText("Tooth Wear");
    const iframe3 = screen.getByLabelText(
      "Case 4 - Frontal Anterior Occlusal - before and after"
    );
    const iframe4 = screen.getByLabelText("Ectopic / Impacted Dental Units");

    expect(iframe1).toBeInTheDocument();
    expect(iframe2).toBeInTheDocument();
    expect(iframe3).toBeInTheDocument();
    expect(iframe4).toBeInTheDocument();

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
