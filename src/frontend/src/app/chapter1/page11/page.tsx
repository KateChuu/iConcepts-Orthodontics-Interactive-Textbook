/** @format */
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "../../../components/Footer";
import PageNumber from "../../../components/PageNumber";
import NavigationButton from "../../../components/NavigationButton";
import TypeableLearnerNotes from "@/components/TypeableLearnerNotes/TypeableLearnerNotes";

const Page11 = () => {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  // Gallery 1.3 Images
  const galleryImages = [
    {
      src: "/chapter1/page11/BR F photo-62.jpg",
      caption: "Front relaxed pose",
    },
    {
      src: "/chapter1/page11/BR F Smiling-64.jpg",
      caption:
        "Front Smiling (Emotional Smile if possible) Smile analysis in this view",
    },
    {
      src: "/chapter1/page11/BR Profile-66.jpg",
      caption: "Full Profile Observe the Class I Skeletal profile",
    },
    {
      src: "/chapter1/page11/BR 3 Q Profile Smiling-68.jpg",
      caption:
        "3/4 Profile Smiling observe the retroclined upper incisor and Buccal Canine",
    },
    {
      src: "/chapter1/page11/BR Occlusal Front-70.jpg",
      caption:
        "Front in occlusion Intra Oral assess the OJ OB Centrelines and Crowding",
    },
    {
      src: "/chapter1/page11/BR RtS-72.jpg",
      caption:
        "Rt side in occlusion observe the Class I Molar relationship (Oral Hygiene is poor White Spot Lesions on cervical margin of 16, 46)",
    },
    {
      src: "/chapter1/page11/BR Left-74.jpg",
      caption: "Left side observe Molar and premolar relationship",
    },
    {
      src: "/chapter1/page11/BR UOccl-76.jpg",
      caption:
        "Upper Occlusal (Mirror view) Severe Crowding 13 is completely buccally displaced , narrow arch and retroclined upper incisors",
    },
    {
      src: "/chapter1/page11/BR L Occl-78.jpg",
      caption: "Lower arch severely crowded and distorted shape",
    },
    {
      src: "/chapter1/page11/BR Casts-80.jpg",
      caption: "Upper arch space analysis",
    },
    {
      src: "/chapter1/page11/OPG_BR copy-82.jpg",
      caption: "OPG for Pathology, Presence and position of crowns and roots",
    },
    {
      src: "/chapter1/page11/lateralCeph_BR copy-84.jpg",
      caption:
        "Lateral Ceph observe the Skeletal , Dental and Soft Tissues + CVMi",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Main Content Section */}
      <div className="flex w-full h-full">
        {/* Left Container */}
        <div className="flex-1 flex flex-col gap-4 justify-center ">
          {/* Gallery 1.3 - Swipeable Image Section */}
          <div className="flex flex-col items-center">
            <div className="relative md:max-w-sm h-[600px]">
              <h3 className="font-sans text-base md:text-lg font-bold mb-2">
                Gallery 1.3{" "}
                <span className="text-gray-500 font-normal">
                  Class I Skeletal and Dental Crowding
                </span>
              </h3>
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].caption}
                className="w-full h-full object-contain"
              />
              <p className="text-xs italic text-gray-600 text-center mt-2">
                {galleryImages[currentIndex].caption}
              </p>
              {/* Arrows for navigation */}
              <button
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
                  )
                }
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75 "
              >
                &lt;
              </button>
              <button
                onClick={() =>
                  setCurrentIndex(
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

        {/* Right Container */}
        <div className="flex-1 flex flex-col gap-4 p-4">
          {/* Learner Notes Box */}
          <div className="bg-yellow-50 text-white mt-4 p-2 text-center basis-2/5">
            <p>Learner Notes</p>
            <TypeableLearnerNotes />
          </div>
          {/* Movie Section */}
          <div className="flex flex-col items-center">
            <h3 className="font-sans text-base md:text-lg font-bold mb-2">
              Movie 1.1{" "}
              <span className="text-gray-500 font-normal">
                Moment to Enjoy Al Majaz WaterFront Sharjah UAE
              </span>
            </h3>

            {/* Video */}
            <div className="w-2/3 h-full bg-gray-300 flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                controls
                src='/chapter1/page11/AlMajazSharjah-60.m4v'
                poster='/chapter1/page11/posterImage-61.png'
                controlsList='nodownload'
              ></video>
            </div>

            <p className="font-sans text-sm md:text-base leading-relaxed mt-8 text-center text-gray-600">
              Fountain Fun Water Front
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction="left" target="/chapter1/page10" />
      <NavigationButton direction="right" target="/chapter2/page12" />

      {/* Footer */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={11} />
    </div>
  );
};

export default Page11;
