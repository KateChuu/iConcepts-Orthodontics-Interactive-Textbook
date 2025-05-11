import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Chapter 6: Growth and Development in Oral Facial Region with reference to Orthodontics"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter5/section5"
            nextHref="/chapters/chapter6/section1"
            chapterHref="/chapters/chapter6"
        >
            <div className="mb-8"> 
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase"> 
                    Introduction
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    We now move onto growth of the Face and Arches.
                    It is post-natal growth which Dr Shazia Naser-ud-Din will outline here.
                    Some of it will be familiar and some content will be new.
                    You already know that some facial bones develop from a cartilaginous template, others ossify directly from membrane and for others, there is contribution from both mechanisms.  
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    This lecture is a Pre-orthodontics lecture for beginners to bring them up to speed with Craniofacial  Growth and Development and clinical applications. 
                </p>
            </div>

            <div className="mb-8"> 
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase"> 
                    Learning Outcomes
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Upon completing this topic, you should be able to:  
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li> <strong>Learn how facial growth operates using mechanisms such as remodelling and displacement</strong></li>
                    <li> <strong>Learn that growth changes in the Maxilla and Mandible and Cranial Base, although discussed separately, they are inter-related</strong></li>
                    <li> <strong>Relation to clinical orthodontics and timing of treatment</strong></li>
                </ul>

            </div>
           

        </SectionPage>
    );
}
