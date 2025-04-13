import Image from "next/image";
import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page30() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Main Content Section */}
      <div className="flex flex-1 flex-col w-full gap-4">
        <h3 className="font-sans text-base md:text-lg font-bold mb-4 text-gray-600">
          Relax in nature and have hobbies that enhance your creativity :)
        </h3>

        <div className="flex justify-center mb-4 items-center">
          <Image
            src="/chapter4/page30/nature.jpg"
            alt="CVMi 3-4 Critical for Success"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter4/page29" />
      <NavigationButton direction="right" target="/chapter5/page31" />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={30} />
    </div>
  );
}
