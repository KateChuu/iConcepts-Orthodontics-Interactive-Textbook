import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 1: An Introduction to Class II Malocclusion"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref={undefined}
            nextHref="/chapters/chapter1/section2"
            chapterHref="/chapters/chapter1"
        >
            <p>
                <strong>Orthodontics</strong> is a highly specialized field of Dentistry, aiming
                towards esthetic and functional enhancement of the dentition. Considered first
                specialty of dentistry introduced a century ago. However, rapid advancements
                have taken place in the last two decades making it a major leading discipline
                of Dental Surgery.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700">DEFINITION</h3>
            <p>
                <strong>Orthodontics (Dentofacial Orthopedics)</strong> can be defined as:
                <br /><br />
                &quot;The area of dentistry concerned with the supervision, guidance and correction of growing and mature dentofacial structures, including those conditions that require movement of teeth or correction of malrelationships and malformations of related structures by adjustment of relationship between and among teeth and facial bones, by the application of forces and/or the stimulation and re-direction of the functional forces within the craniofacial complex&quot;. (Proffit 1993)
            </p>

            <p>
                A simpler version for defining Orthodontics is as follows:
                <br /><br />
                <em>
                    &quot;Orthodontics is that branch of Dental Sciences which is concerned with genetic variations, development and growth of facial forms and the manner in which these factors affect the occlusion of the teeth and their function.&quot;
                </em>
            </p>

            <p>
                Orthodontic techniques are concerned with treatment of irregularities of the teeth.
                The study of Orthodontics includes entire craniofacial complex and addresses:
            </p>

            <ul className="list-disc list-inside pl-4">
                <li>Growth</li>
                <li>Development</li>
                <li>Function</li>
            </ul>

        </SectionPage>
    );
}
