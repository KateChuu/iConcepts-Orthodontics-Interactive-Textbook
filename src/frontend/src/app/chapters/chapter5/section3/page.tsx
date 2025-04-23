import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 3: Message to Students" 
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter5/section2"
            nextHref="/chapters/chapter5/section4"
            chapterHref="/chapters/chapter5"
        >

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    MESSAGE TO THE STUDENTS
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Make a weekly or monthly planner with alerts on smart devices. Divide the study load into small and achievable segments. Try to achieve these small goals, they help to accomplish the larger ones. Reward yourself when a task is completed successfully. Be honest to yourself and evaluate yourself regularly. Follow the biological clock inside you, if you are an early bird, it is best for you to utilize fresh early morning hours for quiet study. If you are used to burning the midnight oil, stick to that routine. Self test helps to evaluate your performance and can build up your writing speed for the finals.
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Another good tip for exam preparation is to get to clinical relevant questions:
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li>What are the different systems used to classify malocclusion? Discuss Angle’s and Andrew’s system is detail.</li>
                    <li>What is Cephalometric analysis? Describe in detail its purposes?</li>
                    <li>What tissue changes take place when teeth are moved under Orthodontic forces?</li>
                    <li>Describe the effects of early loss of primary teeth. Explain with examples. What precautions will you take to minimize these effects?</li>
                    <li>Define Orthodontics? Discuss the scope and limitations of Orthodontic treatment.</li>
                    <li>Discuss the role of habits in causing malocclusion. What steps would you take to help such cases?</li>
                    <li>What are Functional appliances? How do they work? Enumerate different types of Functional appliances. Give their indications and contra-indications.</li>
                    <li>What are Fixed appliances in Orthodontics. Write the characteristics of fixed and removable appliances, keeping in view the essential requirements of an Orthodontic appliance.</li>
                    <li>What is an Openbite? Discuss its etiology and treatment?</li>
                    <li>Give a detailed account of anchorage support. Give examples.</li>
                    <li>A patient 16 year presents excessive upper protrusion with lower anterior teeth touching the palate behind upper anteriors. How will you treat this case?</li>
                    <li>What do you understand by Serial extractions? Is it a sound mode of treatment?</li>
                    <li>Is patient dealing an important component of Orthodontic treatment? Write in detail.</li>
                    <li>Why has Clark Twin Block suddenly become so popular? Describe the design and patient management in detail.</li>
                </ul>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1 mt-4">
                    Write short notes on:
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1 font-bold">
                    <li>Cleft lip and palate patients</li>
                    <li>Expansion appliances</li>
                    <li>Bimaxillary protrusion</li>
                    <li>Flush terminal plane</li>
                </ul>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    As its aptly said: “begin with the end in mind” - Covey S in 7 Habits of Highly effective people. Keep focus on achieving your goals and qualifications.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    BE KIND TO YOURSELF
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Finally during examination months be kind to yourself. Study well, eat a good diet, sleep well, avoid drugs and other substances.
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <strong>Wish you Good Luck and all the Best in Life !</strong>
                </p>
            </div>


        </SectionPage>
    );
}
