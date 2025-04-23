import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 2: Study Methods" 
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter5/section1"
            nextHref="/chapters/chapter5/section3"
            chapterHref="/chapters/chapter5"
        >

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    STUDY METHOD
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    A study system devised by F.P Robinson (1961) has proved of value in college and university studies. It is called:
                </p>
                <p className="text-center font-bold text-zinc-700 dark:text-zinc-200 mb-1">
                    S Q 3 R
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1"><strong>S</strong>    Survey</p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1"><strong>Q</strong>    Question</p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1"><strong>R</strong>    Read</p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1"><strong>R</strong>    Recite</p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1"><strong>R</strong>    Review</p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1 mt-4">
                    Initially survey or skim through the entire MODULE. Question yourself to awaken you interest and curiosity into the subject e.g. what could anchorage mean? what does treatment modality mean? in the interactive version you can also start with quizzes and ignite your intrigue about the subject matter.
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Read the content with undivided attention (hence all the material is provided user friendly format). Highlight and add notes mark the points you were unable to recall. This will enable you to see next time if you remember or not the points you missed out earlier. Use green self learning space to add notes.
                </p>
            </div>


        </SectionPage>
    );
}
