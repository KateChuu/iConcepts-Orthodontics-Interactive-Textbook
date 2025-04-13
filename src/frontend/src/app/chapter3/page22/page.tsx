"use client";
import Link from "next/link";

import { useState } from "react";
import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";
import TypeableLearnerNotes from "@/components/TypeableLearnerNotes/TypeableLearnerNotes";

export default function Page22() {
  const [currentIndexGallery1, setCurrentIndexGallery1] = useState(0);
  const [currentIndexGallery2, setCurrentIndexGallery2] = useState(0);

  const gallery1Images = [
    {
      src: "/chapter3/page22/IMG_6078-104.JPG",
      caption:
        "Localized 41 labially displaced on a Skeletal Class III pattern",
    },
    {
      src: "/chapter3/page22/IMG_6079-106.JPG",
      caption: "Severe crowding locked out maxillary canine right side",
    },
    {
      src: "/chapter3/page22/IMG_6081-108.JPG",
      caption:
        "Left side maxillary canine space deficient, prolonged retention lower deciduous molars",
    },
    {
      src: "/chapter3/page22/IMG_6082-110.JPG",
      caption: "Occlusal view maxillary arch mirror image",
    },
    {
      src: "/chapter3/page22/IMG_6083-112.JPG",
      caption: "Severe crowding mandibular arch ",
    },
    {
      src: "/chapter3/page22/OPG_Pretreatment_MCaole-114.jpg",
      caption: "OPG observe Pathology, Position and Presence of Dental units",
    },
    {
      src: "/chapter3/page22/mary_Cole-116.jpg",
      caption: "Lateral Cephalometric observe the Skeletal Pattern and CVMi",
    },
  ];

  const gallery2Images = [
    {
      src: "/chapter3/page22/IMG_6403-118.JPG",
      caption: "Extraction of Lower incisor",
    },
    {
      src: "/chapter3/page22/IMG_6404-120.JPG",
      caption: "Compression coil for creating space 13 eruption",
    },
    {
      src: "/chapter3/page22/IMG_6405-122.JPG",
      caption: "Compression coil left side for 23 eruption",
    },
    {
      src: "/chapter3/page22/IMG_6406-124.JPG",
      caption: "TPA to prevent mesial movement of molars Anchorage Control",
    },
    {
      src: "/chapter3/page22/IMG_6407-126.JPG",
      caption:
        "Lingual arch anchorage control for erupting premolars however needs to be removed soon after alignment to allow use of Class III elastic",
    },
  ];

  return (
    <div className="h-screen flex flex-col p-12 overflow-auto">
      <Link
        href="/reorder-quiz/quiz_page22"
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
      {/* Container for Left and Right Sections */}
      <div className="flex w-full h-full">
        {/* Left Section */}
        <div className="w-1/2 p-2 flex flex-col justify-center items-center">
          <div className="relative w-full max-w-lg md:max-w-xl h-auto mb-4">
            <h3 className="font-sans text-base md:text-lg font-bold mb-2 text-center">
              Gallery 3.2{" "}
              <span className="text-gray-500 font-normal">
                Clinical Case: 12.4 year old female
              </span>
            </h3>
            <img
              src={gallery1Images[currentIndexGallery1].src}
              alt={gallery1Images[currentIndexGallery1].caption}
              className="w-full h-auto object-contain"
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
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-2 flex flex-col justify-center items-center">
          <div className="relative w-full max-w-lg md:max-w-xl h-auto mb-4">
            <h3 className="font-sans text-base md:text-lg font-bold mb-2 text-center">
              Gallery 3.3{" "}
              <span className="text-gray-500 font-normal">
                Fixed Appliance Treatment Case in 3.2
              </span>
            </h3>
            <img
              src={gallery2Images[currentIndexGallery2].src}
              alt={gallery2Images[currentIndexGallery2].caption}
              className="w-full h-auto object-contain"
            />
            <p className="text-xs italic text-gray-600 text-center mt-2">
              {gallery2Images[currentIndexGallery2].caption}
            </p>
            {/* Arrows for navigation */}
            <button
              onClick={() =>
                setCurrentIndexGallery2((prevIndex) =>
                  prevIndex === 0 ? gallery2Images.length - 1 : prevIndex - 1
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75"
            >
              &lt;
            </button>
            <button
              onClick={() =>
                setCurrentIndexGallery2(
                  (prevIndex) => (prevIndex + 1) % gallery2Images.length
                )
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Learner Notes Box */}
      <div className="bg-yellow-50 text-white p-4 text-center mt-8 min-h-[650px] max-w-5xl w-full mx-auto ">
        <p>Learner Notes</p>
        <TypeableLearnerNotes />
      </div>

      <NavigationButton direction="left" target="/chapter3/page21" />
      <NavigationButton direction="right" target="/chapter3/page23" />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={22} />
    </div>
  );
}
