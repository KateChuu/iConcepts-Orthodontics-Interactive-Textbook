import Image from "next/image";
import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page24() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Container for Left and Right Sections */}
      <div className="flex w-full h-full">
        {/* Left Section */}
        <div className="w-1/2 bg-gray-500 flex flex-col justify-start pt-8 px-4 overflow-y-auto relative">
          {/* Chapter Title */}
          <h2 className="font-sans text-white text-sm md:text-lg mb-2 border-b border-white w-full z-10">
            Chapter 4
          </h2>

          {/* Main Title */}
          <div className="flex w-full z-10">
            <div className="font-sans text-white text-center text-2xl md:text-4xl font-bold border-b border-white w-full relative">
              Functional <br />
              Orthopaedic <br />
              Appliances
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-4 relative flex flex-col justify-evenly">
          <Image
            src="/chapter4/page24/chapter4_frontpage_1.jpg"
            width={500}
            height={200}
            alt="Chapter4 Front Page Image 1"
          />

          <Image
            src="/chapter4/page24/chapter4_frontpage_2.jpg"
            width={500}
            height={200}
            alt="Chapter4 Front Page Image 2"
          />
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter3/page23" />
      <NavigationButton direction="right" target="/chapter4/page25" />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={24} />
    </div>
  );
}
