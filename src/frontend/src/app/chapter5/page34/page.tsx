/** @format */

"use client";

import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";
import LectureVideo from "@/components/LectureVideo/LectureVideo";

const Page34 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Full-width Container */}
      <div className="h-screen flex-1 flex flex-col">
        {/* Video Section */}
        <div className="flex flex-col items-center justify-center mb-4">
          {/* Placeholder for video */}
          <div className="w-full flex items-center justify-center">
            <LectureVideo
              src="/chapter5/page34/lecture-video-compressed.mp4"
              className="w-[1000px]"
            />
          </div>
          <p className="font-sans text-sm md:text-base leading-relaxed mt-8 text-center text-gray-600">
            Lecture Video
            <br />
            Dr Shazia Naser ud Din 2022
          </p>
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter5/page33" />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={34} />
    </div>
  );
};

export default Page34;
