import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

const getTextElement = (text) => screen.getByText(new RegExp(text, "i"));

describe("Footer Component", () => {
  it("renders the footer text correctly", () => {
    render(<Footer />);

    expect(
      getTextElement("iConcepts in Orthodontics 2026")
    ).toBeInTheDocument();

    expect(getTextElement("Dr Shazia Naser-ud-Din")).toBeInTheDocument();

    expect(
      getTextElement("PhD, MSc,MOrth \\(RCSEd\\),FICCDE,DPHDent,DCPSP-HPE, BDS")
    ).toBeInTheDocument();
  });
});
