"use client";

import { useRouter } from "next/navigation";
import Footer from "../../../components/Footer";
import PageNumber from "../../../components/PageNumber";
import NavigationButton from "../../../components/NavigationButton";

const Page18 = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full h-full overflow-auto">
        {/* Main Content Section */}
        <div className="flex w-full h-full">
                    {/* Left Section - Text */}
                    <div className="flex-1 flex flex-col pr-4">
                        <h3 className="font-sans text-lg md:text-xl font-bold mb-4">FUNCTIONAL APPLIANCES</h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-4">
                            As Class II / 2 have very reduced lower face heights, functional appliances that help open angle are preferred. Clark Twin Block, Bass appliance, Fixed Functionals etc. can also be used. Modified functional appliances e.g. with cantilever springs behind the upper incisors to procline the maxillary incisors and correct the sagittal relationship simultaneously can also be used. Mandibular Advancement Devices are being integrated with CADCAM and CAT. The success with Functional Appliances is utilizing the golden period of growth and development which is best assessed with CVMI (Cervical Vertebral Maturation Index).
                        </p>

                        <h3 className="font-sans text-lg md:text-xl font-bold mb-4">FIXED APPLIANCES</h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-4">
                            Preferable modality in adolescents and adults where ANB difference is small, or where dental camouflage can be utilized. It is best to avoid extractions in Class II / 2 cases as:
                        </p>
                        <ul className="list-disc pl-6 font-sans text-sm md:text-base leading-relaxed mb-4">
                            <li>Hidden Space becomes available on proclining 1/1</li>
                            <li>Space closure is extremely difficult in low MMP cases</li>
                        </ul>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-4">
                            However, if extractions are needed for severe crowding, it is best to extract second premolars thus minimizing lingual dumping of the lower labial segment. Fixed appliances give excellent bodily movement, and provide good torque control needed so much for upper incisors in Class II / 2 cases. Torque is essential to achieve for long term stability.
                        </p>

                        <h3 className="font-sans text-lg md:text-xl font-bold mb-4">ORTHOGNATHIC SURGERY</h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-4">
                            It is advised to patients who are keen to correct Class II / 2, particularly when ANB difference is greater than 9 and the patient is an adult.
                        </p>

                        <h3 className="font-sans text-lg md:text-xl font-bold mb-4">Retention and Stability</h3>
                        <p className="font-sans text-sm md:text-base leading-relaxed mb-4">
                            Although this feature needs due consideration in all Orthodontic treatment cases, but more so for rotated maxillary laterals a typical feature of Class II / 2. Precision should be carried out routinely for such cases at the end of treatment, along with a period of fixed retention.
                        </p>
                    </div>

                    {/* Right Section - Images and Captions */}
                    <div className="flex-1 flex flex-col gap-8 items-center">
                        {/* Upper Image and Caption */}
                        <div className="flex flex-col">
                            <img
                                src="/chapter2/page18/pasted-image-209.jpeg"
                                alt="Functional Appliance"
                                className="w-full h-[300px] object-contain mb-2"
                            />
                            <h3 className="font-sans text-base md:text-lg font-bold mb-2">
                                Gallery 2.5 <span className="text-gray-500 font-normal"> Functional Appliance</span>
                            </h3>
                        </div>

                        {/* Lower Image and Caption */}
                        <div className="flex flex-col">
                            <img
                                src="/chapter2/page18/pasted-image-small-212.jpg"
                                alt="Treatment Time"
                                className="w-full h-[300px] object-contain mb-2"
                            />
                            <p className="font-sans text-lg md:text-xl text-black-500">
                                Treatment Time: 10 months - Patient at ideal CVMI
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <NavigationButton direction="left" target="/chapter2/page17" />
                <NavigationButton direction="right" target="/chapter3/page19" />

                {/* Footer */}
                <Footer />

                {/* Page Number */}
                <PageNumber page={18} />
            </div>
    );
};

export default Page18;