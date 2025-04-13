"use client";

import { useRouter } from "next/navigation";
import Footer from "../../../components/Footer";
import PageNumber from "../../../components/PageNumber";
import NavigationButton from "../../../components/NavigationButton";

const Page13 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
        {/* Main Content Section */}
        <div className="flex w-full h-full">
          {/* Left Container */}
          <div className="w-1/3 flex flex-col pr-4 gap-2">
            {/* Title */}
            <h2 className="font-sans text-xl md:text-2xl font-bold mb-2">
              CLASS II / 1 MALOCCLUSIONS
            </h2>

            {/* Definition Section */}
            <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
              Definition
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
              Mesio-buccal cusp of the first permanent molar is at least one cusp width mesial to the lower first permanent molar. ½ Unit and ¼ unit Class II are also used for more accurate documentation. Incisor classification is such that the lower incisor edge lies posterior to the cingulum plateau. It has two sub-classes or divisions. Division 1 – Overjet is increased, and upper incisors are usually proclined.
            </p>

            {/* Incidence Section */}
            <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
              Incidence
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
              The classical Class II / 1 occurs in 20% of the population, while its intermediate forms appear in 10% (Todd & Dodd 1975; Williams and Stephens 1992).
            </p>

            {/* Etiology Section */}
            <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
              Etiology
            </h3>
            <ul className="list-disc pl-6 font-sans text-sm md:text-base leading-relaxed mb-2">
              <li>Skeletal Class II base</li>
              <li>Habits like thumb sucking extending over several years</li>
              <li>Soft tissue involvement, e.g., lower lip trapping behind upper incisors and short upper lip</li>
            </ul>
          </div>

          {/* Middle Container */}
          <div className="w-1/3 flex flex-col gap-2 pl-4">
            {/* Clinical Features Section */}
            <h3 className="font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600">
              Clinical Features of Class II / 1 Malocclusion
            </h3>

            <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
              Skeletal
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
              76% of the cases have a skeletal II base. Some may have a skeletal I base with upper incisors excessively proclined due to a habit. The cranial base angle, i.e., N-S-Ba, may be obtuse, resulting in mandibular retrognathia. In other cases, the cranial base may be long, creating a prognathic maxilla, or a small mandible with a large maxilla. The face height is usually average or may be reduced.
            </p>

            <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
              Soft Tissues
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
              Usually, Class II/1 cases have a short upper lip and excessive overjet, as there is less constraint by the lip musculature. Lip pattern is important for maintaining the final Orthodontic treatment result, but with a short upper lip, the overjet reduction is less stable. The lower lip can also play a part in the malocclusion by becoming trapped behind upper incisors or lip-tongue seal, creating an increased overjet.
            </p>

            <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
              Dental
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
              The typical features of Class II / 1 are increased overjet, deep and often incomplete overbite. The incisor relationship is Class II with proclined or average inclination of upper incisors. Buccal segments will have a Class II molar relationship, most often being ½ unit Class II, though some could be ¼ unit. Crossbites may be present—buccal or lingual.
            </p>
          </div>

          {/* Right Container */}
          <div className="w-1/3 flex flex-col gap-2 pl-4 overflow-auto">
            {/* Right Top Content */}
            <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
              Sunday Bite
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
              In many Class II / 1 cases, the individual postures the mandible forward habitually, improving lip seal aesthetics, a temporary condition termed &quot;Sunday Bite.&quot; This well-established postural habit can mislead the practitioner to believe it is a mild Class II / 1. Diagnosing such a postured position is essential, evaluating the centric relation, and treating the malocclusion accordingly.
            </p>

            <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
              Facial Growth
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
              The facial growth pattern can be variable. Usually, favorable growth patterns can be expected, but if the mandible rotates posteriorly, it will not help the buccal segment correction.
            </p>

            <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
              Treatment Options
            </h3>
            <ul className="list-disc pl-6 font-sans text-sm md:text-base leading-relaxed mb-2">
              <li>Removable Appliances & CAT</li>
              <li>Functional Appliances</li>
              <li>Fixed Appliances</li>
              <li>Orthognathic Surgery</li>
            </ul>

            <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
              Treatment Aims
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
              As the majority of Class II / 1 cases have crowded upper arches, extractions to relieve crowding become essential. Following extraction, leveling and alignment of the arches with appropriate appliances are carried out, often involving upper first premolars and lower second premolars bilaterally.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <NavigationButton direction="left" target="/chapter2/page12" />
        <NavigationButton direction="right" target="/chapter2/page14" />

        {/* Footer */}
        <Footer />

        {/* Page Number */}
        <PageNumber page={13} />
      </div>
  );
};

export default Page13;