import { render, screen, fireEvent } from "@testing-library/react";
import CardItem from "@/components/FrontPage/CardItem";
import { useRouter } from "next/navigation";

// Mocking Next.js router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("CardItem Component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(<CardItem {...props} />);
  });

  const props = {
    title: "Test Title",
    description: "This is a test description",
    route: "test-route",
    imageUrl: "/test-image.jpg",
  };

  it("renders the CardItem component with the correct content", () => {
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("This is a test description")).toBeInTheDocument();

    // Check if image is rendered with correct alt text
    const image = screen.getByAltText("Test Title");
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("test-image.jpg");
  });

  test("navigates to the correct route when clicked", () => {
    const listItem = screen.getByRole("listitem");
    fireEvent.click(listItem);
    expect(mockPush).toHaveBeenCalledWith("/test-route");
  });

  test("displays the arrow icon correctly", () => {
    // By using screen.getByRole('img'), we can search for elements that have the role of an image (img), which includes the SVG.
    const arrowIcon = screen.getByRole("img");
    expect(arrowIcon).toBeInTheDocument();
  });
});
