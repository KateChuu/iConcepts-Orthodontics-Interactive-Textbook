import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 1: How to Study Effectively" 
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter5/intro"
            nextHref="/chapters/chapter5/section2"
            chapterHref="/chapters/chapter5"
        >
            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    HOW TO STUDY EFFECTIVELY
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Studying for any exam can be a daunting experience if one is not organized. It can be made less stressful and tense by studying regularly over the year. It may sound too much hard work, but actually there is an analogy for it. Just like at a marathon run, the runners who start off slowly but surely have greater chance to win, because as the runner approaches the finish line he speeds up and eventually wins it. This approach to study can help tremendously. As the student covers the concepts from day to day both in the lectures and during private study, it helps to reduce the workload towards the exam period. Likewise, it is never advisable to stay up late hours or work beyond the physiological capacity of mind and body during the exam months. Like the analogy above – no marathon runner runs the entire marathon on the eve of the event – he would surly be exhausted on the actual day of the performance!
                </p>
            </div>

        </SectionPage>
    );
}
