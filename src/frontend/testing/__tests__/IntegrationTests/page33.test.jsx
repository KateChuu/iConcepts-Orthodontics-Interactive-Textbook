// This file is skipped in the testing process because the video component causes the test to fail.
// You can modify jest.config.ts to include this file in the testing process.

import { render, screen, fireEvent } from "@testing-library/react";
import Page33 from "@/app/chapter5/page33/page";
import { useRouter } from "next/navigation";

// Mock the useRouter function from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page33", () => {
  const mockPush = jest.fn();
  const PAGE_NUMBER = "33";

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<Page33 />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all components correctly", () => {
    expect(
      screen.getByRole("heading", { name: /Movie 5.1/i })
    ).toBeInTheDocument();

    const video = screen.getByRole("video", {
      name: /Anterior Open Bite_Dr Shazia.mov/i,
    });
    expect(video).toBeInTheDocument();

    const image = screen.getByAltText(
      /Contour-enhanced forest plot for the effect/i
    );
    expect(image).toBeInTheDocument();

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
    expect(mockPush).toHaveBeenCalledWith("/lecture");
  });
});
