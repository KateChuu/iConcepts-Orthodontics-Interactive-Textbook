import Image from "next/image";
import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import LectureVideo from "@/components/LectureVideo/LectureVideo";
import NavigationButton from "@/components/NavigationButton";

export default function Page33() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Main Content Section */}
      <div className="flex flex-1 w-full gap-4">
        {/* Left Container */}
        <div className="flex-1 flex flex-col pr-4 gap-2">
          <h3 className="font-sans text-base md:text-lg font-bold mb-2 text-center">
            Movie 5.1{" "}
            <span className="text-gray-500 font-normal">
              Learning Transformers Podcast
            </span>
          </h3>

          {/* Placeholder for video */}
          <div className="w-full flex items-center justify-center">
            <LectureVideo src="/videos/IC_Podcast.mp4" className="w-[500px]" />
          </div>

          <p className="font-sans text-sm md:text-base leading-relaxed mt-2 mb-2 text-gray-600 text-center italic">
            On the future of orthodontics, effective learning, <br />
            and continuous development
          </p>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex flex-col pl-4 gap-2">
          <div className="flex justify-center items-center">
            <Image
              src="/chapter5/page33/paint.jpg"
              alt="Contour-enhanced forest plot for the effect of functional appliances on oropharynx volume."
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter5/page32" />
      <NavigationButton direction="right" target="/chapter5/page34" />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={33} />
    </div>
  );
}
