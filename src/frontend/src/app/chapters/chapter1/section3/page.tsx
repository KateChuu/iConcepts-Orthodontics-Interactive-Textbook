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
            <div className="mb-8 text-justify leading-relaxed">
                Major responsibilities of Orthodontic practice include:
                <ul className="list-disc list-outside pl-5 mt-1 text-zinc-800 dark:text-zinc-100">
                    <li>Prevention / interception Orthodontics</li>
                    <li>Diagnosis with 3D scanning</li>
                    <li>Treatment planning</li>
                </ul>
            </div>


            <p className="mb-6 text-justify leading-relaxed">
                Of all forms of malocclusion of the teeth and associated alteration in their surrounding structures. The CAD CAM (Computer Assisted Design Computer Assisted Manufacture) has improved several aspects of customized brackets including precision of attachments with reduction of time for bonding hence Indirect Orthodontic Bonding jigs. Moreover, armamentarium such as:
            </p>

            <div className="overflow-x-auto mb-8">
                <table className="w-full border border-zinc-300 text-sm text-zinc-800 dark:text-zinc-100">
                    <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                            <th className="border border-zinc-300 p-2 text-left font-semibold">
                                TREATMENT TIMING
                            </th>
                            <th className="border border-zinc-300 p-2 text-left font-semibold">
                                TREATMENT MODALITIES
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-zinc-300 p-2">Interceptive</td>
                            <td className="border border-zinc-300 p-2">Space maintainers / Removable Appliances</td>
                        </tr>
                        <tr>
                            <td className="border border-zinc-300 p-2">Functional</td>
                            <td className="border border-zinc-300 p-2">Functional Appliances</td>
                        </tr>
                        <tr>
                            <td className="border border-zinc-300 p-2">Definitive</td>
                            <td className="border border-zinc-300 p-2">Removable Appliances / Fixed Appliances</td>
                        </tr>
                        <tr>
                            <td className="border border-zinc-300 p-2">Orthognathic</td>
                            <td className="border border-zinc-300 p-2">Fixed Appliances & Surgery</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ol className="mb-6 list-decimal list-outside pl-5 text-zinc-800 dark:text-zinc-100 leading-relaxed">
                <li>Clear Aligners Therapy (CAT)</li>
                <li>Temporary Anchorage Devices (TAD)</li>
                <li>Self ligation Fixed appliances</li>
                <li>Custom fabricated Fixed appliances</li>
                <li>LASERs</li>
            </ol>

            <p className="mb-12 text-justify leading-relaxed">
                Above have enhanced the quality of treatment delivery, along with efficiency and effectiveness and excellence.
            </p>

            <div className="mb-12">
                <p className="text-lg font-bold text-zinc-800 dark:text-white tracking-wide mb-1">
                    IDEAL OCCLUSION
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200">
                    Hypothetical concept based on the anatomy of the individual teeth and ideal jaw alignment.
                    It is rarely found in nature. However, it provides a standard by which other occlusions can be evaluated.
                </p>
            </div>

            <div className="mb-12">
                <p className="text-lg font-bold text-zinc-800 dark:text-white tracking-wide mb-1">
                    NORMAL OCCLUSION
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200">
                    An occlusion within the acceptable deviation of ideal. There are no clear limits to the range of normal occlusion.
                    In general, minor variations in the alignment of teeth – which are not of aesthetic or functional importance are considered within the norm.
                </p>
            </div>

        </SectionPage>
    );
}
