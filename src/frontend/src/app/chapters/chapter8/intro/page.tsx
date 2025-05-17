import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Chapter 8: TMD (Temporo-Mandibular Disorders) and Occlusion "
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter7/video3"
            nextHref="/chapters/chapter8/section1"
            chapterHref="/chapters/chapter8"
        >
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                <a
                    href="https://prezi.com/view/Q6xef2XfcngYGkgqdpX0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold"
                >
                </a>
                
                <iframe 
                    src="https://prezi.com/p/embed/Q6xef2XfcngYGkgqdpX0/"
                    id="iframe_container"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    webkitallowfullscreen
                    mozallowfullscreen
                    className="w-full h-auto aspect-video"
                />
            </p>

            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    This interactive Prezi Presentation will provide a unique overview of learning experience to navigate on different foundation terms, concepts, published evidence and videos embedded. 
                    Just scroll on the screen to read and learn.
                </p>
            </div>


            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    SPECIFIC LEARNING OBJECTIVES
                </h3>
                <ol className="list-decimal pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li className="marker:font-bold">
                        History of Temporo-Mandibular Disorders (TMD) text &amp; Evidence Based Dental (EBD) literature
                    </li>
                    <li className="marker:font-bold">Diagnostic Evaluations</li>
                    <li className="marker:font-bold"><span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Helkimo Index</span></li>
                    <li className="marker:font-bold">Contemporary chair side investigations</li>
                    <li className="marker:font-bold">Current approaches</li>
                    <li className="marker:font-bold">Splints Survey ZT2B</li>
                    <li className="marker:font-bold">Bruxism latest MedTech innovations (watch this space &#128578;)</li>
                </ol>
            </div>

            {/* Prezi image */}
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Prezi image
                </p>
            </div>


        </SectionPage>
    );
}
