import { render, screen } from "@testing-library/react";
import PageNumber from "@/components/PageNumber";

describe("PageNumber component", () => {
  it("renders the correct page number", () => {
    const page = 10;
    render(<PageNumber page={page} />);
    expect(screen.getByText(page)).toBeInTheDocument();
  });
});
