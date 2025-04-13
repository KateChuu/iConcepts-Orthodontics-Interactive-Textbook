import { render, screen, fireEvent } from "@testing-library/react";
import Page26 from "@/app/chapter4/page26/page";
import { useRouter } from "next/navigation";

// Mock the useRouter function from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page26", () => {
  const mockPush = jest.fn();
  const PAGE_NUMBER = "26";

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<Page26 />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all components correctly", () => {
    expect(screen.getByText("Gallery 4.1")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /WEAR PERIOD to be affective needs to be more than 20/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /CLARK TWIN BLOCK/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Appliance design/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Upper Twin of CTB/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Lower Twin of CTB/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Working Bite/i,
      })
    ).toBeInTheDocument();

    const image = screen.getByAltText("Bass Appliance Front view in occlusion");
    expect(image).toBeInTheDocument();

    expect(screen.getByText(PAGE_NUMBER)).toBeInTheDocument();

    const footerText = screen.getByText("iConcepts in Orthodontics 2026");
    expect(footerText).toBeInTheDocument();
  });

  it("navigates images in gallery on button click", () => {
    // Verify the initial state (first image)
    expect(
      screen.getByAltText("Bass Appliance Front view in occlusion")
    ).toBeInTheDocument();

    // Click the next button (rightClick) to navigate to the second image
    const nextButton = screen.getByTestId("rightClick");
    fireEvent.click(nextButton);

    // Verify the second image is shown
    expect(
      screen.getByAltText(
        "Bass Appliance with bite plane left side in occlusion"
      )
    ).toBeInTheDocument();

    // Click the previous button (leftClick) to navigate back to the first image
    const prevButton = screen.getByTestId("leftClick");
    fireEvent.click(prevButton);

    // Verify the first image is shown again
    expect(
      screen.getByAltText("Bass Appliance Front view in occlusion")
    ).toBeInTheDocument();

    // Click the previous button (leftClick) again to navigate to the last image
    fireEvent.click(prevButton);

    // Verify the last image is shown
    expect(
      screen.getByAltText(
        "OPG from the same patient potential buccal displacement of 23"
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
