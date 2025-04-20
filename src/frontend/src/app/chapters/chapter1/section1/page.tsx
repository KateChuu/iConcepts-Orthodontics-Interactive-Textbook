import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 1: Definition of Orthodontics"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter1/intro"
            nextHref="/chapters/chapter1/section2"
            chapterHref="/chapters/chapter1"
        >
            <p className="mb-8 text-justify leading-relaxed">
                <strong>Orthodontics</strong> is a highly specialized field of Dentistry, aiming towards esthetic and functional enhancement of the dentition. Considered first specialty of dentistry introduced a century ago. However, rapid advancements have taken place in the last two decades making it a major leading discipline of Dental Surgery.
            </p>

            <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mt-10 mb-6">
                DEFINITION
            </h3>


            <p className="mb-4 text-justify leading-relaxed">
                <strong>Orthodontics (Dentofacial Orthopedics)</strong> can be defined as:
            </p>

            <blockquote className="italic mb-8 pl-6 border-l-4 border-zinc-400 bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-100 leading-relaxed">
                “The area of dentistry concerned with the supervision, guidance and correction of growing and mature dentofacial structures, including those conditions that require movement of teeth or correction of malrelationships and malformations of related structures by adjustment of relationship between and among teeth and facial bones, by the application of forces and/or the stimulation and re-direction of the functional forces within the craniofacial complex”. (Proffit 1993)
            </blockquote>

            <p className="mt-6 mb-4 text-justify leading-relaxed">
                A simpler version for defining Orthodontics is as follows:
            </p>

            <blockquote className="italic mb-8 pl-6 border-l-4 border-zinc-400 bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-100 leading-relaxed">
                “Orthodontics is that branch of Dental Sciences which is concerned with genetic variations, development and growth of facial forms and the manner in which these factors affect the occlusion of the teeth and their function.”
            </blockquote>

            <div>
                <p className="mt-6 mb-1 text-justify leading-relaxed">
                    Orthodontic techniques are concerned with treatment of irregularities of the teeth. The study of Orthodontics includes entire craniofacial complex and addresses:
                </p>
                <ul className="list-disc list-inside pl-6 mb-6 text-zinc-800 dark:text-zinc-100 leading-relaxed">
                    <li>Growth</li>
                    <li>Development</li>
                    <li>Function</li>
                </ul>
            </div>

        </SectionPage>
    );
}
