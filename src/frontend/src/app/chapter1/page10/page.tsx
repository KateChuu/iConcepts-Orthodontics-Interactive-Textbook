/** @format */

"use client";

import { useRouter } from "next/navigation";
import Footer from "../../../components/Footer";
import PageNumber from "../../../components/PageNumber";
import keyMoments from "@/components/InteractiveVideo/keyMoments";
import InteractiveVideo from "@/components/InteractiveVideo";
import NavigationButton from "../../../components/NavigationButton";
import OrthodonticsInteractiveVideo, {
  InteractiveVideoNames,
} from "@/components/InteractiveVideo/OrthodonticsInteractiveVideo";

const Page10 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Main Content Section */}
      <div className="flex w-full h-full">
        {/* Left Container */}
        <div className="flex-1 flex flex-col gap-2 pr-4">
          {/* OPG and Lateral Ceph Section */}
          <div className="flex flex-col items-center">
            <img
              src="page10/Orthodontics with OPG 1.jpg"
              alt="OPG for full mouth dental age assessment"
              className="md:max-w-md"
            />
            <img
              src="page10/Orthodontics with OPG 2.jpg"
              alt="Lateral Ceph"
              className="md:max-w-md"
            />
            <p className="font-sans text-sm md:text-base leading-relaxed mt-8 mb-2 text-gray-600">
              Standard investigations for Orthodontics with OPG for full mouth
              dental age assessment and Lateral Ceph provides the important data
              related to skeletal dental and soft tissues.
            </p>
          </div>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex flex-col gap-2 pl-4">
          {/* Video Section */}
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="w-full  flex items-center justify-center">
              <InteractiveVideo
                src="/interactive-videos/TipTorqueBiomechanics.mov"
                keyMoments={keyMoments.TipTorqueBiomechanics}
                className="w-[800px]"
              />
            </div>
            <OrthodonticsInteractiveVideo
              name={InteractiveVideoNames.AnteriorOpenBite}
              className="w-[800px]"
            />
            <p className="font-sans text-sm md:text-base leading-relaxed mt-8 text-center text-gray-600">
              Anterior Open Bite Simulation video Align Tech patient
              <br />
              Dr Shazia Naser ud Din 2022
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction="left" target="/chapter1/page9" />
      <NavigationButton direction="right" target="/chapter1/page11" />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={10} />
    </div>
  );
};

export default Page10;
