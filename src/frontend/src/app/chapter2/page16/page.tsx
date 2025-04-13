"use client";

import { useRouter } from "next/navigation";
import Footer from "../../../components/Footer";
import PageNumber from "../../../components/PageNumber";
import NavigationButton from "../../../components/NavigationButton";

const Page16 = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full h-full overflow-auto">
        {/* Main Content Section */}
        <div className="flex w-full h-full">
                    {/* Left Container */}
                    <div className="w-1/2 flex flex-col pr-4 gap-2">
                        {/* Left Section Content */}
                        <h3 className="font-sans text-base md:text-lg font-bold text-gray-600">
                            CLASS II / 2 MALOCCLUSION
                        </h3>
                        <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                            Definition
                        </h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                            Mesio-buccal cusp of the upper first permanent molar is at least one cusp width mesial to the lower first permanent molar. It has two sub-classes or divisions. Division 2 – upper incisors are retroclined with overjet minimal, but may be increased in some cases. At times Class II / 2 appears esthetically pleasing, giving the individual a cute impish look.
                        </p>
                        <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                            Incidence
                        </h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                            Class II / 2 is found in 5% of the population (Todd and Dodd 1975). A study by Houston et al (1993) suggests 10-18% in the British Population.
                        </p>
                        <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                            Aetiology
                        </h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                            Three factors have been implicated in the Classic Class II / 2 malocclusions:
                        </p>
                        <ul className="list-disc pl-6 font-sans text-sm md:text-base leading-relaxed mb-2">
                            <li>“Strap-like” lower lip and high lip line retrocline the maxillary and mandibular incisors creating deep overbite and reduced overjet.</li>
                            <li>As lateral incisors are a bit higher than the central incisors, the lower lip may procline the lateral incisors.</li>
                            <li>Axial inclination of incisors is such that the lower incisor edge is unable to be maintained on the upper incisor crown. Usually a large inter-incisal angle is present creating a deep overbite and reduced overjet.</li>
                        </ul>
                        <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                            Clinical Features
                        </h3>
                        <p className="font-sans text-sm md:text-base font-bold mb-2">
                            Skeletal
                        </p>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                            Usually a Class II skeletal base is present, but can also appear on skeletal Class I or even skeletal Class III base. The cranial base angle can be obtuse leading to mandibular retrognathia. Longer cranial base can produce prognathic maxilla. The maxilla is usually short, broad, and placed relatively forward compared to the mandible. The lower face height and MMP angles are reduced, along with reduced gonial angle.
                        </p>
                        <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                            Soft Tissues
                        </h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                            The Classic feature is a high resting lower lip line due to decreased lower face height. Marked labio-mental fold may be present, along with increased masseteric muscle forces, due to short face height.
                        </p>
                    </div>

                    {/* Right Container */}
                    <div className="w-1/2 flex flex-col px-4 gap-2">
                        <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                            Dental
                        </h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                            Upper and lower incisors are retroclined with increased interincisal angle.
                            Overbite is usually deep and overjet is much reduced. Buccal segments are
                            usually Class II molar relationship. Scissors bite is common in the premolar
                            region. An important feature considered responsible for Class II / 2 maloc-
                            clusion is the crown-root angle, which may be decreased and the incisors
                            may be thin with poorly defined cingulum.
                        </p>
                        <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                            Facial Growth
                        </h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                            It can be variable, but usually favorable growth can be expected in ClassIIs.
                        </p>
                        <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                            Treatment Options
                        </h3>
                        <ul className="list-disc pl-6 font-sans text-sm md:text-base leading-relaxed mb-2">
                            <li>Clear Aligner Therapy</li>
                            <li>Functional appliances</li>
                            <li>Fixed appliances</li>
                            <li>Orthognathic Surgery</li>
                        </ul>
                        <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                            Treatment Aims
                        </h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                            In crowded cases, relieve crowding with appropriate extractions, followed by level and alignment. Overbite needs to be reduced so as to produce correct edge-centroid relationship, and reduce the inter-incisal angle. Along with correction of molar relationship to a Class I if it is within limits. The above factors help to ensure stable treatment end results.
                        </p>
                        <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                            CLEAR ALIGNER THERAPY
                        </h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                            This is especially indicated in young children or during mixed dentition. If the
                            ANB difference is more and the patient is still growing it is best to convert
                            Class II / 2 into Class II / 1 followed by a stage of appropriate functional ap-
                            pliance treatment. At times a third stage with Fixed appliances may also be
                            needed for excellent end results. An anterior bite plane on traditional
                            URA(Upper Removable Appliance) helps to reduce the overbite effectively.
                            At the time of writing majority of removable appliances have been super-
                            seded by CAT.
                        </p>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <NavigationButton direction="left" target="/chapter2/page15" />
                <NavigationButton direction="right" target="/chapter2/page17" />

                {/* Footer */}
                <Footer />

                {/* Page Number */}
                <PageNumber page={16} />
            </div>
    );
};

export default Page16;