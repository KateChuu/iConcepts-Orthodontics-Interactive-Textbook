"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page26() {
  const [currentIndexGallery1, setCurrentIndexGallery1] = useState(0);

  const gallery1Images = [
    {
      src: "/chapter4/page26/1-BassApp-Front.png",
      caption: "Bass Appliance Front view in occlusion",
    },
    {
      src: "/chapter4/page26/2-BassApp-LS.png",
      caption: "Bass Appliance with bite plane left side in occlusion",
    },
    {
      src: "/chapter4/page26/3-BassApp-RS.png",
      caption:
        "Bass Appliance double Adams Clasp  Right side view in occlusion",
    },
    {
      src: "/chapter4/page26/4-BassApp-UA.png",
      caption:
        "Upper Occlusal view of Bass Appliance with Flying EOT ( Extra Oral Traction) and the Prongs vertical ( see close to the tongue)",
    },
    {
      src: "/chapter4/page26/5-JH-BassApp-L.png",
      caption: "Lower Bass Appliance",
    },
    {
      src: "/chapter4/page26/6-JH-End-Profile.png",
      caption:
        "Extra Oral End of treatment ( 6.5 months )  Beautiful balanced profile",
    },
    {
      src: "/chapter4/page26/7-JH-Pretx.png",
      caption: "Start of treatment Profile Classic Class II Skeletal pattern",
    },
    {
      src: "/chapter4/page26/8-JH-Profile-Pretx-smiling.png",
      caption: "Pre Treatment Profile smiling note the increased over jet",
    },
    {
      src: "/chapter4/page26/9-LateralCeph-JH.png",
      caption:
        "Pre treatment Lateral Ceph with proclined incisors note CVMi ideal",
    },
    {
      src: "/chapter4/page26/10-OPG-JH.png",
      caption: "OPG from the same patient potential buccal displacement of 23",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Main Content Section */}
      <div className="flex flex-1 w-full gap-4">
        {/* Left Container */}
        <div className="flex-1 flex flex-col pr-4 gap-2">
          <ul className="list-disc pl-5 mb-2 text-sm md:text-base leading-relaxed">
            <ul className="list-disc pl-5 mb-2">
              <li>Buccal or lingual shields and lip pads</li>
              <li>Miscellaneous</li>
              <ul className="list-disc pl-5 mb-2">
                <li>Expansion screws</li>
                <li>Springs</li>
                <li>Clasps</li>
                <li>Torquing spurs</li>
                <li>Head gear attachments</li>
              </ul>
            </ul>
          </ul>

          <h3 className="font-sans text-base md:text-lg font-bold mb-2 text-center">
            Gallery 4.1{" "}
            <span className="text-gray-500 font-normal">
              Bass Appliance now known as Dynamax System
            </span>
          </h3>

          {/* Image gallery */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-xl h-auto mb-4">
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

          {/* Wear Period Section */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
            WEAR PERIOD to be affective needs to be more than 20+hr per day
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            It is preferable to wear functional appliances full time except
            eating, brushing teeth or during sports.
          </p>

          {/* Clark Twin Block Section */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
            CLARK TWIN BLOCK
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            The most user friendly and comfortable functional appliance was
            devised by Clark in 1982. It has become the most popular functional
            appliance in the U.K. The Clark Twin Block (CTB) is excellent for
            the treatment of severe Class II / 1 with spectacular results. Class
            II / 2 can also be treated provided the malocclusion is free of
            crowding.
          </p>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex flex-col pl-4 gap-2">
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            A Class III version of CTB is also available, but is not very
            promising due to the reasons mentioned in biomechanics. It is
            satisfactorily used in mixed or permanent dentition. In a
            co-operative patient it shows marvellous results in 3-6 months of
            treatment. The major limitation of CTB is that it is not successful
            in deep bite cases as eruption of the posterior teeth are prevented.
            See Gallery 2.5 case.
          </p>

          {/* Appliance Design Section */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600">
            Appliance design
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            Unlike other conventional functional appliances, CTB, as the name
            implies comes in two independent parts - one for the maxillary arch
            and one for the mandibular. The two parts have inclined planes which
            meet and cause the mandible to be postured forward on closure for
            correction of Class II malocclusion.
          </p>

          {/* Upper Twin of CTB */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600">
            Upper Twin of CTB
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            It is similar to the conventional URA with molar capping with bite
            blocks. The bite block is limited to the posterior end of the arch
            with an inclined plane at 70 on the mesial end. This engages a
            similar slope in the lower twin. A midline screw is incorporated to
            produce upper arch expansion as antero-posterior jaw relationship is
            corrected. Special Delta clasps or conventional Adam&apos;s cribs
            can be used on 6 4 / 4 6 for enhanced retention. If 4s have not
            erupted Ds are clasped. Short coils or Flying EOTs are incorporated
            for attaching the face bow of the head gear. Finally, anterior
            retention is provided by a labial bow.
          </p>

          {/* Lower Twin of CTB */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600">
            Lower Twin of CTB
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            Again similar to the lower removable appliance. It takes retention
            from Adam&apos;s cribs on 6 4 / 4 6 and special ball ended clasps in
            between the lower central and lateral incisors. In order to prevent
            lower labial segment proclination, a labial bow, Southend clasp or
            acrylic incisal capping can be used. The bite blocks are restricted
            to premolar regions only in the lower appliance. The bite blocks are
            usually 7.0 mm thick.
          </p>

          {/* Working Bite */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600">
            Working Bite
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            Soft modeling wax is placed onto the Project® or wooden sticks with
            midline mark. The mandible is postured forward almost in an
            edge-to-edge occlusion. An opening of 5-7mm is usually sufficient.
            If overjet is massive it is best to protrude the mandible half way
            and later either construct another CTB or activate the existing
            appliance with cold cure acrylic on the inclined plane of the lower
            twin. At the time of writing digital 3D printing provide greater
            precision and ease.
          </p>
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter4/page25" />
      <NavigationButton direction="right" target="/chapter4/page27" />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={26} />
    </div>
  );
}
