import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';

export default function Section5FinalLecturePage() {
    return (
        <SectionPage
            title="Section 5: Final Lecture"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter5/section4"
            nextHref={undefined}
            chapterHref="/chapters/chapter5"
        >
            <div className="mb-8">
                <VideoPlayer
                    cloudName="difs4tswt"
                    publicId="lecture-video-compressed_oiht5b"
                    sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1745115007/lecture-video-compressed_oiht5b.mp4"
                    videoId="Final_Lecture"
                    caption="Final lecture video of the course."
                />
            </div>

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">This lightboard lecture with Prezi shows the steps in </span>
                </p>         
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li><span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Diagnosis to </span></li>
                    <li><span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Treatment planning </span></li>
                    <li><span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Logical deduction </span></li>
                    <li><span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Decision making for orthodontic cases </span></li>
                </ul>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">considerations to important issues like IOTN ( Index of Orthodontic Treatment Needs). </span>
                </p>    
            </div>

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">With over 25 years of experience Dr Shazia Naser-ud-Din summarizes the decision making process into simple step by step sequence.</span>
                </p>        
            </div>

            {/*Prezi image*/}
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-2">
                    <a
                        href="https://prezi.com/view/tZUgOi5bsVbcypTzSyYw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold"
                    >
                        https://prezi.com/view/tZUgOi5bsVbcypTzSyYw/
                    </a>
                </p>
            </div>


        </SectionPage>
    );
}
