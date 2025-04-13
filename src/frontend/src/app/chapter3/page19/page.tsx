import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page19() {
  return (
    <div className="h-screen flex flex-col p-12 overflow-auto">
      {/* Container for Left and Right Sections */}
      <div className="flex w-full h-full">
        {/* Left Section */}
        <div className="w-1/2 bg-gray-500 flex flex-col justify-start pt-8 px-4 overflow-y-auto relative">
          {/* Chapter Title */}
          <h2 className="font-sans text-white text-sm md:text-lg mb-2 border-b border-white w-full z-10">
            Chapter 3
          </h2>

          {/* Main Title */}
          <div className="flex w-full z-10">
            <div className="font-sans text-white text-left text-2xl md:text-4xl font-bold border-b border-white w-full relative">
              Class III <br />
              Malocclusion <br />
              <br />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-1 flex flex-col justify-start">
          {/* First Image */}
          <div className="z-5 flex justify-center mb-2 -ml-4">
            <img
              src="/chapter3/page19/droppedImage-small-91.png"
              alt="dropped Image"
              className="w-full max-w-xl h-auto object-contain"
            />
          </div>

          {/* Second Image */}
          <div className="z-5 flex justify-center -ml-4">
            <img
              src="/chapter3/page19/LateralCeph-92.jpg"
              alt="Lateral Ceph"
              className="w-full max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter2/page18" />
      <NavigationButton direction="right" target="/chapter3/page20" />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={19} />
    </div>
  );
}
