"use client";

import { useRouter } from "next/navigation";
import Footer from "../../../components/Footer";
import PageNumber from "../../../components/PageNumber";
import NavigationButton from "../../../components/NavigationButton";
import keyMoments from '@/components/InteractiveVideo/keyMoments';
import InteractiveVideo from '@/components/InteractiveVideo';

export default function Page12() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
        {/* Main Content Section */}
        <div className="flex w-full h-full">
        {/* Left Section - Video */}
        <div className="w-1/2 bg-gray-500 flex flex-col justify-start pt-8 px-4 relative">
          {/* Chapter Title */}
          <h2 className="font-sans text-white-a700 text-sm md:text-lg mb-2 border-b border-white w-full z-10">
            Chapter 2
          </h2>

          {/* Main Title */}
          <div className="flex w-full z-10">
            <div className="font-sans text-white-a700 text-center text-2xl md:text-4xl font-bold border-b border-white w-full relative">
              Class II
              <br />
              Malocclusion
            </div>
          </div>

          {/* Interactive 2.2 Section */}
          <div className="bg-gray-500 p-4 mt-4 mb-4 flex-grow flex flex-col justify-center items-center">
            <h3 className="font-sans text-base md:text-lg font-bold mb-2">
              Interactive 2.2 <span className="text-white-a700 font-normal"> Class II/2</span>
            </h3>
            {/* ClassII2Cat Video */}
            <div className='w-full  flex items-center justify-center'>
              <InteractiveVideo
                src='/interactive-videos/ClassII2Cat.mov'
                keyMoments={keyMoments.ClassII2Cat}
                className='w-[800px]'
              />
            </div>
          </div>
        </div>

        {/* Right Section - Gallery */}
        <div className="w-1/2 p-4 overflow-auto relative flex flex-col justify-start">
        <h3 className="font-sans text-base md:text-lg font-bold mb-2">
              Gallery 2.1 <span className="text-gray-500 font-normal"> Class II/1 (Poor oral Hygiene)</span>
            </h3>

          {/* Gallery Image */}
          <div className="flex justify-center">
            <img
              src="/chapter2/page12/IMG_1790-179.jpg"
              alt="Class II / 1"
              className="w-full max-w-xs md:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction="left" target="/chapter1/page11" />
      <NavigationButton direction="right" target="/chapter2/page13" />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={12} />
    </div>
  );
}
