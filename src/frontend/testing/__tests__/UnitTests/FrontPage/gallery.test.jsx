import React from "react";
import { render, screen } from "@testing-library/react";
import Gallery from "@/components/FrontPage/Gallery";

describe("Gallery Component", () => {
  test("renders all images", () => {
    render(<Gallery />);

    // List of image URLs
    const images = [
      "/front-page/gallery/thumbnail.jpg",
      "/front-page/gallery/CH1.jpg",
      "/front-page/gallery/CH2.jpg",
      "/front-page/gallery/CH3.jpg",
      "/front-page/gallery/CH4.jpg",
      "/front-page/gallery/CH5.jpg",
    ];

    // Check if all images are rendered
    images.forEach((imageUrl, index) => {
      const imgElement = screen.getByAltText(`Image ${index + 1}`);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute("src");
      expect(imgElement.getAttribute("src")).toContain(
        encodeURIComponent(imageUrl)
      );
    });
  });
});
