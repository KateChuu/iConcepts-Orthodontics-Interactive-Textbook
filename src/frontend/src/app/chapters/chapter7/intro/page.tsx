import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Chapter 7: Guest Lecture"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter6/video3"
            nextHref="/chapters/chapter7/section1"
            chapterHref="/chapters/chapter7"
        >
            <div className="mb-8"> 
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase"> 
                    PROF. EM. DR.DR. RAINER-REGINALD MIETHKE
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Charité – Campus Benjamin Franklin at Freie Universität Berlin, Germany<br />
                    <a href="http://miethke-ortho.com/" className="underline text-blue-600 dark:text-blue-400" target="_blank" rel="noopener noreferrer">
                        http://miethke-ortho.com/
                    </a>
                </p>
            </div>

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    As guest lecturer series of 3 videos from Germany on ZOOM Prof Miethke prominent  Orthodontist provides his insights & journey of development over 5 decades in Orthodontics.
                </p>
            </div>

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Such a detailed and impressive lecture, fireside chat with Dr Shazia Naser ud Din will bring to light the phenomenal changes in Orthodontics profession in past 50 years. 
                </p>
            </div>
           

        </SectionPage>
    );
}
