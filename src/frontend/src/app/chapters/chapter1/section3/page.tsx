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
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Major responsibilities of Orthodontic practice include:
                </p>    
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li><strong>Prevention / interception Orthodontics</strong></li>
                    <li><strong>Diagnosis with 3D scanning</strong></li>
                    <li><strong>Treatment planning</strong></li>
                </ul>
            </div>

            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Of all forms of malocclusion of the teeth and associated alteration in their surrounding structures. The CAD CAM (Computer Assisted Design Computer Assisted Manufacture) has improved several aspects of customized brackets including precision of attachments with reduction of time for bonding hence Indirect Orthodontic Bonding jigs. Moreover, armamentarium such as:
                </p>
                <table className="w-full border my-4 border-zinc-300 text-sm text-zinc-800 dark:text-zinc-100">
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
                <ol className="list-decimal pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li className="marker:font-bold"><strong>Clear Aligners Therapy (CAT)</strong></li>
                    <li className="marker:font-bold"><strong>Temporary Anchorage Devices (TAD)</strong></li>
                    <li className="marker:font-bold"><strong>Self ligation Fixed appliances</strong></li>
                    <li className="marker:font-bold"><strong>Custom fabricated Fixed appliances</strong></li>
                    <li className="marker:font-bold"><strong>LASERs</strong></li>
                </ol>
            </div>

            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Above have enhanced the quality of treatment delivery, along with efficiency, effectiveness and excellence.
                </p>
            </div>


            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    IDEAL OCCLUSION
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Hypothetical concept based on the anatomy of the individual teeth and ideal jaw alignment.
                    It is rarely found in nature. However, it provides a standard by which other occlusions can be evaluated.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    NORMAL OCCLUSION
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    An occlusion within the acceptable deviation of ideal. There are no clear limits to the range of normal occlusion.
                    In general, minor variations in the alignment of teeth – which are not of aesthetic or functional importance are considered within the norm.
                </p>
            </div>

        </SectionPage>
    );
}
