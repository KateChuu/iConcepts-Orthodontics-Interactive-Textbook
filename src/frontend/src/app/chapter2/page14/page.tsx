"use client";

import { useRouter } from "next/navigation";
import Footer from "../../../components/Footer";
import PageNumber from "../../../components/PageNumber";
import NavigationButton from "../../../components/NavigationButton";

const Page14 = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full h-full overflow-auto">
        {/* Main Content Section */}
        <div className="flex w-full h-full">
                {/* Left Container */}
                <div className="w-1/2 flex flex-col pr-4 gap-2">
                    {/* Left Section Content */}
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        Overjet is excessive, which needs to be reduced within the normal range. Deep overbites are
                        corrected to edge centroid relationship i.e. lower incisor edge should lie an-
                        terior to the upper root centroid (Houston 1989). This ensures stable final
                        overbite reduction. Lastly the treatment should aim towards correcting the
                        buccal segment relationship. If a Class I molar relationship is too ambitious
                        to achieve, a functional full unit Class II is also acceptable. ½ and ¼ Unit
                        molar relationships are not functionally stable and should be avoided and/or corrected.
                    </p>
                    <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                        TREATMENT OF CLASS II / 1
                    </h3>
                    <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                        REMOVABLE APPLIANCES
                    </h3>
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        Removable appliances were used in the past now mostly CAT are used for:
                    </p>
                    <ul className="list-disc pl-6 font-sans text-sm md:text-base leading-relaxed mb-2">
                        <li>Mild skeletal II with small ANB difference</li>
                        <li>No dental compensations</li>
                        <li>Young child patient Interceptive to correct excessive OJ</li>
                        <li>Favorable edge-centroid relationship</li>
                        <li>Maxillary incisors are proclined</li>
                        <li>Canines are mesially angulated</li>
                    </ul>
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        The best results are achieved where no extractions are carried out in the lower arch. However, if crowding is severe, spontaneous alignment and space closure is seen with cases in which lower 5s are extracted prior to the eruption of 7s, used to retract the upper labial segment to reduce overjet and anterior bite planes help reduce the deep and incomplete bites.
                    </p>
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        With CAT predictions of algorithms space with shells can be maintained for
                        eruption dental units. Moreover, distalization can be locked to prevent future
                        possible impaction of third molars (Image gray for locking) next page Gallery
                        2.3 interactive video.
                    </p>
                    <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                        FUNCTIONAL APPLIANCES
                    </h3>
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        These are recommended in patients with Large ANB differences with moderate to severe Class II skeletal pattern.
                        <br />
                        Growing Patients. Excessive overjet and deep / incomplete overbites.
                    </p>
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        One of the major utilities of the Functional Appliances is the correction of the Skeletal II pattern in growing children. A number of designs are available to choose from, and certain functional appliances can also be tailored to the needs of the patient i.e. Hybrid Appliances.
                    </p>

                </div>

                {/* Right Container */}
                <div className="w-1/2 flex flex-col px-4 gap-2">
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        Functional Appliances are recommended in males 12-14 years and females 10-12 years of age. Clark Twin Block (CTB) is considered to be the best Functional Appliance available due to ease of wearing by the patient and relatively simple design to fabricate in the dental labs. Other functional appliance that can be used in Class II / 1 are:
                    </p>
                    <ul className="list-disc pl-6 font-sans text-sm md:text-base leading-relaxed mb-2">
                        <li>Medium Opening Activator (MOA)</li>
                        <li>Fränkel II</li>
                        <li>Bionators – Hunt Style Bionator</li>
                        <li>Bass Appliance</li>
                        <li>Clark Twin Block</li>
                        <li>Mandibular Advancement Device</li>
                    </ul>
                    <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                        FIXED APPLIANCES
                    </h3>
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        Recommended in Stage II after functional appliance stage of treatment for bodily tooth movement in finishing and detailing and for adolescents / adults where skeletal camouflage is possible.
                    </p>
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        Both Straight Wire Appliance (SWA) and Tip-Edge have found success in treatment of Class II / 1 cases. However, it is considered that Tip-Edge produces better results in severe Class II /1 cases due to the use of intra oral elastics, having a functional component associated with it. Usually extractions form an important part of the Fixed appliance treatment. Currently custom made fixed appliances are considered ideal.
                    </p>
                    <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
                        ORTHOGNATHIC SURGERY
                    </h3>
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        This is considered in Adult patients where growth has stopped With severe skeletal II pattern where ANB is greater than 9. It is a prolonged treatment combining pre- and post- operative Orthodontics. High self motivation is essential for the success of Orthognathic treatment.
                    </p>
                    <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
                        Thus treatment of Class II / 1 can range from deciduous dentition where supervision and pattern of growth can be assessed, to mixed dentition where Removable appliances or functional appliances can be used, or finally with extraction cases, Fixed Appliance technique for pleasing stable final results.
                    </p>
                </div>
            </div>

            {/* Navigation Buttons */}
            <NavigationButton direction="left" target="/chapter2/page13" />
            <NavigationButton direction="right" target="/chapter2/page15" />

            {/* Footer */}
            <Footer />

            {/* Page Number */}
            <PageNumber page={14} />
        </div>
    );
};

export default Page14;