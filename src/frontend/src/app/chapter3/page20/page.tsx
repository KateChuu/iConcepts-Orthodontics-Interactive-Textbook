"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page20() {
  const [currentIndexGallery, setCurrentIndexGallery] = useState(0);

  const galleryImages = [
    {
      src: "/chapter3/page20/IMG_8015-94.JPG",
      caption: "Class III Mechanics on MBT System with Class III elastics also correction of upper midline with undertie and powerchain",
    },
    {
      src: "/chapter3/page20/IMG_8016-96.JPG",
      caption: "Class III Elastic vector and undertie maxillary teeth",
    },
    {
      src: "/chapter3/page20/IMG_8017-98.JPG",
      caption: "Left side Class III elastic with maxillary teeth powerchain",
    },
    {
      src: "/chapter3/page20/IMG_8018-100.JPG",
      caption: "Maxillary occlusal view mirror image",
    },
    {
      src: "/chapter3/page20/IMG_8019-102.JPG",
      caption:
        "Class III Mechanics with MBT prescription Class III elastics Differential correction of upper midline with undertie and powerchain Mandibular mirror image",
    }
  ];

  return (
    <div className="h-auto p-12 flex flex-col ml-4 mr-4 overflow-auto">
      {/* Container for Text and Gallery */}
      <div className="flex w-full h-full gap-4">
        {/* Left Section with Text */}
        <div className="flex-1 flex flex-col gap-2 pr-4">
          <h1 className="font-sans text-2xl md:text-3xl font-bold mb-14 text-gray-800">CLASS III MALOCCLUSIONS</h1>

          <h3 className="font-sans text-base md:text-xl font-bold -mb-3 text-gray-600">
            Definition
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-4">
            Mesio-buccal cusp of first permanent molar is at least one cusp width distal to 
            the lower first permanent molar. Incisor relationship is such that lower incisors 
            edges lie anterior to the cingulum plateau, overjet is reduced or reversed.
          </p>

          <h3 className="font-sans text-base md:text-xl font-bold -mb-3 text-gray-600">
            Incidence
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-4">
            It is said to occur in 1% of American population, 3% in Japanese and 5% in 
            British population (Todd & Dodd 1975).
          </p>

          <h3 className="font-sans text-base md:text-xl font-bold -mb-3 text-gray-600">
            Etiology
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-4">
            It is primarily due to genetics with a dominant skeletal III pattern.
          </p>

          <h3 className="font-sans text-base md:text-xl font-bold mb-0 text-gray-600">
            Clinical Features
          </h3>

          <h3 className="font-sans text-base md:text-xl font-bold -mb-3 text-gray-600">
            Skeletal
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            Usually a Skeletal Class III base relationship is present. The cranial base angle is 
            acute, hence the forward positioning of the mandible. 73% of the cases have large 
            mandibles, the rest have small maxilla or a combination of both. At times the maxilla 
            is usually short, small and narrow relative to the mandible. The mandible tends to be 
            broad and thus the greater incidence of crossbites.
          </p>
        </div>

        {/* Middle Section with Gallery */}
        <div className="flex-1 flex flex-col gap-2 px-8 mt-6 -ml-8">
          <div className="relative w-full max-w-xl h-auto mb-4 mt-10 mx-auto">
            <h3 className="font-sans text-base md:text-lg font-bold mb-2 text-center text-gray-600">
              Gallery 3.1{" "}
              <span className="text-gray-500 font-normal">
                Class III Fixed Appliance Treatment 
              </span>
            </h3>
            <img
              src={galleryImages[currentIndexGallery].src}
              alt={galleryImages[currentIndexGallery].caption}
              className="w-full h-auto object-contain"
            />
            <p className="text-xs italic text-gray-600 text-center mt-2">
              {galleryImages[currentIndexGallery].caption}
            </p>
            {/* Arrows for navigation */}
            <button
              onClick={() =>
                setCurrentIndexGallery((prevIndex) =>
                  prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75"
            >
              &lt;
            </button>
            <button
              onClick={() =>
                setCurrentIndexGallery(
                  (prevIndex) => (prevIndex + 1) % galleryImages.length
                )
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Soft Tissues and Dental Sections (unaffected by gallery) */}
      <div className="flex w-full h-full mt-2">
        {/* Soft Tissues and Dental Content */}
        <div className="flex-1 flex flex-col gap-2 pr-4">
          <h3 className="font-sans text-base md:text-xl font-bold -mb-3 text-gray-600">
            Soft tissues
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-4">
            Soft tissues per se are not involved in the etiology of Class III malocclusion, but lips 
            do play a role in dento-alveolar decompensation. Lower lip is usually full and pendulous.
          </p>

          <h3 className="font-sans text-base md:text-xl font-bold -mb-3 text-gray-600">
            Dental
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-4">
            There is usually a Class III molar relationship (full unit) tendency towards a complete 
            reverse overjet (anterior crossbite) reduced overbite or AOB may also exist. Incisors 
            compensate for skeletal base disharmony by proclination of maxillary incisors and 
            retroclination of mandibular incisors. Maxilla may be crowded, while it is unlikely 
            to have crowding in the mandible. Whenever crossbites exist, it is important to 
            assess displacement / deviations. Most common in Class III is the anterior displacement 
            in order to obtain a posterior functional occlusion which is not possible with edge-to-edge 
            incisor contact. Another cause of displacement could be unsatisfactory transverse buccal 
            segment relationship.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction="left" target="/chapter3/page19" />
      <NavigationButton direction="right" target="/chapter3/page21" />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={20} />
    </div>
  );
}
