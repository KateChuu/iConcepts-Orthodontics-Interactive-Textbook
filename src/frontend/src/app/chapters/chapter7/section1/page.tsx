import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 1: Readings"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter7/intro"
            nextHref="/chapters/chapter7/video1"
            chapterHref="/chapters/chapter7"
        >

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    The topics discussed through the videos and the discussion in video 3 will assist the learner to understand the complexity of Orthodontic treatment in various age groups, interdisciplinary collaborations for final idea results and learn the various terms/ terminologies and concepts related to orthodontic treatments. 
                    Furthermore, the process of learning from experts in the field and the Q&A that can assist novice in the speciality to ask questions and clarify without hesitation. 
                    Thus assisting life long learning. 
                </p>           
            </div>

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Fireside discussion in video number 3
                </p>         
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li><span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Serial extractions</span></li>
                    <li>Building trust with child patient</li>
                    <li><span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Gummy smile</span> with several decades follow up</li>
                    <li>Self treatment with Invisalign reflections on progress Canines</li>
                    <li>Lower incisor crowding in Golden Ages</li>
                    <li>Invisalign Key Opinion Leader in Germany</li>
                    <li><span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Patient journey</span> to understand over months and years of treatment</li>
                    <li>Avoid Premature contacts at end of Orthodontic treatment CO CR issues</li>
                    <li>Midline from views of Artist, Dentist, Orthodontist, lay people and examples in Hollywood stars smile analysis </li>
                    <li>27years later satisfied patient calls and thanks for amazing treatment Retention and relationships with patients</li>

                </ul>

            <div className="mb-8 mt-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Prof. Em. Dr.Dr. Rainer-Reginald Miethke</span> has been  role model in Orthodontics internationally and shares the evidence  related to various topics of great interest to the speciality of Orthodontics.  
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Prof. Em. Dr.Dr. Rainer-Reginald Miethke has been  role model in Orthodontics internationally and shares the evidence  related to various topics of great interest to the speciality of Orthodontics.   
                </p>           
            </div>

            </div>
            
        </SectionPage>
    );
}
