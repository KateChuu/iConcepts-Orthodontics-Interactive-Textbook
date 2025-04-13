"use client";
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page27() {
  const [currentIndexGallery1, setCurrentIndexGallery1] = useState(0);

  const gallery1Images = [
    {
      src: "/chapter4/page27/3-AC-initial.png",
      caption: "Initial Pre-treatment early protocol patient teased at school",
    },
    {
      src: "/chapter4/page27/2-AC-CTB-insert.png",
      caption: "Single activation Clark Twin Block - super compliant patient",
    },
    {
      src: "/chapter4/page27/1-2months.png",
      caption: "4 weeks follow up  major improvement in OJ and profile",
    },
    {
      src: "/chapter4/page27/4-AC-6weeks.png",
      caption:
        "8 weeks follow up near full correction - retention with same Clark Twin Block nocturnal wear",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <Link
        href="/reorder-quiz/quiz_page27"
        style={{
          position: "fixed",
          top: "20px", 
          right: "20px", 
          backgroundColor: "#1d4ed8",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
          textAlign: "center",
          fontWeight: "600",
          display: "inline-block",
          transition: "background-color 0.3s ease",
          zIndex: 1000, 
        }}
      >
        Take Quiz
      </Link>
      {/* Main Content Section */}
      <div className="flex flex-1 w-full gap-4">
        {/* Left Container */}
        <div className="flex-1 flex flex-col pr-4 gap-2">
          {/* Clinical management */}
          <h3 className="font-sans text-base md:text-lg font-bold text-gray-600">
            Clinical Management
          </h3>

          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            Both upper and lower twin parts of CTB are fitted at the same
            appointment. If the child finds it a mouthful at first, give a
            training period of 2 weeks where the patient is encouraged to wear
            the functional appliance at home, during quiet homework or while
            watching the television. One of the greatest esthetic advantages CTB
            has, it provides an immediate esthetic result by giving a pleasing
            profile, and the patient prefers to wear it right from the start.
            Eating with the appliance in situ helps to correct the jaw
            relationship faster, and every effort should be made to encourage
            the patient to eat with the appliance. CTB is the only appliance
            where masticatory forces can be utilized.
          </p>

          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            Regular activation of the expansion screw helps prevent crossbite
            from developing. A ¼ turn every month on a review visit by the
            Orthodontist is ideal. As soon as patient demonstrates the ability
            to posture the mandible forward from working position - reactivation
            is recommended for complete correction with colored cold cure
            acrylic to the inclined planes of the lower twin. The upper block
            and inclined plane is separated with Vaseline. This can be either
            done at the chair side or preferable to send it once again to the
            lab.
          </p>

          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            Well into the treatment, it is advisable to progressively reduce the
            blocks to prevent posterior openbites - so common with CTB. The
            occlusion settles well. If second stage of treatment with fixed
            appliances is required it is usually fitted at the end of the
            treatment with CTB. If head gear is needed it can be continued with
            fixed appliances. However, if CTB is the only modality of treatment,
            it is best to use the CTB as passive appliance at night time only,
            for 12 months as retention regime. This will avoid relapse of
            overjet which occurs in some cases.
          </p>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex flex-col pl-4 gap-2">
          <h3 className="font-sans text-base md:text-lg font-bold mb-2 text-center">
            Gallery 4.2{" "}
            <span className="text-gray-500 font-normal">
              Clark Twin Block in 9 year old Full Treatment
            </span>
          </h3>

          {/* Image gallery */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-2xl h-auto mb-4">
              <Image
                src={gallery1Images[currentIndexGallery1].src}
                alt={gallery1Images[currentIndexGallery1].caption}
                width={1000}
                height={1000}
              />
              <p className="text-xs italic text-gray-600 text-center mt-2">
                {gallery1Images[currentIndexGallery1].caption}
              </p>
              {/* Arrows for navigation */}
              <button
                onClick={() =>
                  setCurrentIndexGallery1((prevIndex) =>
                    prevIndex === 0 ? gallery1Images.length - 1 : prevIndex - 1
                  )
                }
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75"
                data-testid="leftClick" // For JEST testing purposes
              >
                &lt;
              </button>
              <button
                onClick={() =>
                  setCurrentIndexGallery1(
                    (prevIndex) => (prevIndex + 1) % gallery1Images.length
                  )
                }
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75"
                data-testid="rightClick" // For JEST testing purposes
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter4/page26" />
      <NavigationButton direction="right" target="/chapter4/page28" />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={27} />
    </div>
  );
}
