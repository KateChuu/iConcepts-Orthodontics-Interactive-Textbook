import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page31() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Container for Left and Right Sections */}
      <div className="flex w-full h-full">
        {/* Left Container */}
        <div className="bg-gray-500 w-1/3 flex flex-col items-center justify-between p-4 overflow-y-auto">
          <div className="relative p-4">
            {/* Small text in the top right */}
            <div className="absolute top-0 left-4 text-sm text-white-500">
              Chapter 5
            </div>

            {/* Horizontal rule */}
            <hr className="my-4" />

            {/* Large text for chapter name */}
            <h1 className="text-6xl font-bold text-center">
              LEAN Study Methodology for Effective Learning
            </h1>

            {/* Another horizontal rule */}
            <hr className="my-4" />
          </div>
        </div>

        {/* Right Container */}
        <div className="w-1/2 flex justify-center items-center overflow-hidden" />
      </div>

      <NavigationButton direction="left" target="/chapter4/page30" />
      <NavigationButton direction="right" target="/chapter5/page32" />

      <Footer />
      <PageNumber page={31} />
    </div>
  );
}
