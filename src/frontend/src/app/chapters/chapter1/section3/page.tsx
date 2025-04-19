import SectionPage from '@/components/sectionPage';

export default function Section3() {
    return (
        <SectionPage
            title="Section 3: List Orthodontic Treatment Modalities"
            subtitle="Published in 2024 · Views: 13842 · Average Reading Time: 38min"
            prevHref="/chapters/chapter1/section2"
            nextHref="/chapters/chapter1/section4"
            chapterHref="/chapters/chapter1"
        >
            <p>
                Major responsibilities of Orthodontic practice include:
            </p>
            <ul className="list-disc pl-5">
                <li>Prevention / interception Orthodontics</li>
                <li>Diagnosis with 3D scanning</li>
                <li>Treatment planning</li>
            </ul>
            <p>
                Of all forms of malocclusion of the teeth and associated alteration
                in their surrounding structures. The CAD CAM (Computer Assisted
                Design Computer Assisted Manufacture) has improved several aspects
                of customized brackets including precision of attachments with
                reduction of time for bonding hence Indirect Orthodontic Bonding
                jigs. Moreover, armamentarium such as:
            </p>

            <table className="w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2 text-left text-pink-600 font-bold">
                            TREATMENT TIMING
                        </th>
                        <th className="border border-gray-300 p-2 text-left text-pink-600 font-bold">
                            TREATMENT MODALITIES
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">Interceptive</td>
                        <td className="border border-gray-300 p-2">
                            Space maintainers / Removable Appliances
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Functional</td>
                        <td className="border border-gray-300 p-2">
                            Functional Appliances
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Definitive</td>
                        <td className="border border-gray-300 p-2">
                            Removable Appliances / Fixed Appliances
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Orthognathic</td>
                        <td className="border border-gray-300 p-2">
                            Fixed Appliances & Surgery
                        </td>
                    </tr>
                </tbody>
            </table>

            <ol className="list-decimal pl-5">
                <li>Clear Aligners Therapy (CAT)</li>
                <li>Temporary Anchorage Devices (TAD)</li>
                <li>Self ligation Fixed appliances</li>
                <li>Custom fabricated Fixed appliances</li>
                <li>LASERs</li>
            </ol>

            <p>
                Above have enhanced the quality of treatment delivery, along with
                efficiency and effectiveness and excellence.
            </p>

            <h3 className="font-semibold text-zinc-600 text-lg mt-4">IDEAL OCCLUSION</h3>
            <p>
                Hypothetical concept based on the anatomy of the individual teeth
                and ideal jaw alignment. It is rarely found in nature. However, it
                provides a standard by which other occlusions can be evaluated.
            </p>

            <h3 className="font-semibold text-zinc-600 text-lg mt-4">NORMAL OCCLUSION</h3>
            <p>
                An occlusion within the acceptable deviation of ideal. There are
                no clear limits to the range of normal occlusion. In general,
                minor variations in the alignment of teeth – which are not of
                aesthetic or functional importance are considered within the norm.
            </p>

            {/*
                <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 mt-6">
                    <strong>Learner Notes:</strong>
                    <p>You can draw or take notes here using the provided tool.</p>

                </div>
            */}
        </SectionPage>
    );
}
