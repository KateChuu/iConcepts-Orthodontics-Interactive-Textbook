import SectionPage from '@/components/sectionPage';

export default function Section5() {
    return (
        <SectionPage
            title="Section 5: Prevalence of Malocclusion in Global Regions"
            subtitle="Published in 2024 · Views: 19892 · Average Reading Time: 15min"
            prevHref="/chapters/chapter1/section4"
            nextHref="/chapters/chapter1/section6"
            chapterHref="/chapters/chapter1"
        >

            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Prevalence of malocclusion in general human population is taken from U.S Public Health Service Survey conducted on a large scale in 1970. 
                    It is important to realize that distribution of malocclusion types varies among racial, national and ethnic groups and even more complex with miscegenation, 
                    hence be aware of the norms applied in the past. Caucasian data is presented in the table across.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    INCREASED PREVALENCE OF MALOCCLUSION
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    There are several reasons for increased prevalence of malocclusion. Firstly, and perhaps the most important being reduced function of masticatory apparatus. 
                    In the past hard and fibrous foods were ingested, but today children hardly get the opportunity to chew – most of them are given processed meals.
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Second reason quoted is the evolutionary trend. There has been steady reduction in the size of anterior and posterior teeth, along with their numbers. 
                    The third incisors, third premolars and fourth molars have disappeared. At present the human third molars, second premolars and second incisors often fail to develop. 
                    Like high blood pressure, heart diseases, diabetes – malocclusion is termed the “Disease of Civilization”. Moreover, OSA (Obstructive Sleep Apnea) and Bruxism 
                    have been also added into the disease of civilization.
                </p>
            </div>

            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Prevalence of malocclusion in general human population is taken from U.S Public Health Service Survey conducted on a large scale in 1970. 
                    It is important to realize that distribution of malocclusion types varies among racial, national and ethnic groups and even more complex with miscegenation, 
                    hence be aware of the norms applied in the past. Caucasian data is presented in the table across.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    DEMAND OF ORTHODONTIC TREATMENT
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Demand for Orthodontic treatment is indicated by the number of patients who actually make appointments and seek care. 
                    Orthodontics is no longer just confined to the child population and adolescents. Adults are now seeking Orthodontic treatment. 
                    In a survey conducted in 1989 in USA, just over 25% of new patients were age 18 or older. 
                    Orthodontics has become a prominent part of Dentistry in recent years and this trend is likely to continue in the socially aesthetic-conscious world we live in today. 
                    However, it is also important to provide complete information regarding risk and benefit ratios to patients demanding unrealistic ideal occlusions 
                    that have limitations in long term stability.
                </p>

                <table className="w-full border my-4 border-zinc-300 text-sm text-zinc-800 dark:text-zinc-100">
                    <tbody>
                        <tr>
                            <th className="border border-gray-300 p-2 text-left font-bold">NORMAL OCCLUSION</th>
                            <th className="border border-gray-300 p-2 text-left font-bold">30%</th>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">CLASS I MALOCCLUSION</td>
                            <td className="border border-gray-300 p-2">50–55%</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">CLASS II MALOCCLUSION</td>
                            <td className="border border-gray-300 p-2">15–20%</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">CLASS III MALOCCLUSION</td>
                            <td className="border border-gray-300 p-2">1%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SectionPage>

    );
}