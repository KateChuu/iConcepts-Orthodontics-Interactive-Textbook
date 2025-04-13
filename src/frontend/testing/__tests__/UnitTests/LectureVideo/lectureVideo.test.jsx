// This file is skipped in the testing process because the video component causes the test to fail.
// You can modify jest.config.ts to include this file in the testing process.

import React from "react";
import { render, screen } from "@testing-library/react";
import LectureVideo from "@/components/LectureVideo/LectureVideo";

describe("LectureVideo", () => {
  const mockSrc = "https://example.com/video.mp4";

  it("renders the Video component with the correct src", () => {
    render(<LectureVideo src={mockSrc} />);

    const videoElement = screen.getByTitle("Lecture Video");
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute("src", mockSrc);
  });
});
