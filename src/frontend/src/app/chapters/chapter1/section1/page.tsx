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
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <strong>Orthodontics</strong> is a highly specialized field of Dentistry, aiming towards esthetic and functional enhancement of the dentition. Considered first specialty of dentistry introduced a century ago. However, rapid advancements have taken place in the last two decades making it a major leading discipline of Dental Surgery.
                </p>    
            </div>

            <div className="mb-8"> 
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Definition
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <strong>Orthodontics (Dentofacial Orthopedics)</strong> can be defined as:
                </p>
                <blockquote className="italic mb-4 pl-6 border-l-4 border-zinc-400 bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-100 leading-relaxed">
                    “The area of dentistry concerned with the supervision, guidance and correction of growing and mature dentofacial structures, including those conditions that require movement of teeth or correction of malrelationships and malformations of related structures by adjustment of relationship between and among teeth and facial bones, by the application of forces and/or the stimulation and re-direction of the functional forces within the craniofacial complex”. (Proffit 1993)
                </blockquote>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    A simpler version for defining Orthodontics is as follows:
                </p>
                <blockquote className="italic mb-4 pl-6 border-l-4 border-zinc-400 bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-100 leading-relaxed">
                    “Orthodontics is that branch of Dental Sciences which is concerned with genetic variations, development and growth of facial forms and the manner in which these factors affect the occlusion of the teeth and their function.”
                </blockquote>              
            </div>
            
            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Orthodontic techniques are concerned with treatment of irregularities of the teeth. The study of Orthodontics includes entire craniofacial complex and addresses:
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li><strong>Growth</strong></li>
                    <li><strong>Development</strong></li>
                    <li><strong>Function</strong></li>
                </ul> 
            </div>
        </SectionPage>
    );
}
