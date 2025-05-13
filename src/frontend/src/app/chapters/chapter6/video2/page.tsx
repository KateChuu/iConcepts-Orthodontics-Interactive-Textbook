import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';

export default function Video1Page() {
    return (
        <SectionPage
            title="Video 2: Part 2 Growth and Development of Maxillary and Mandibular"
            subtitle=""
            prevHref="/chapters/chapter6/video1"
            nextHref="/chapters/chapter6/video3"
            chapterHref="/chapters/chapter6"
        >

            {/* Video Player */}
            <VideoPlayer
                cloudName="difs4tswt"
                publicId="Part2_Growth_and_Dev-s1-full_nnrudn"
                sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1746031090/Part2_Growth_and_Dev-s1-full_nnrudn.mp4"
                videoId="Ch6_part2"
                caption="Dr Shazia Naser ud Din 2022"
                
            />

            <div className="mb-8 mt-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    In part 2 follows up and links to previous learning. 
                </p>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Application from <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">complex concepts to clinical applications</span> makes it relevant to clinical readiness.  
                </p>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Functional Matrix Theory</span> is clarified with common clinical examples and Orthodontic applications along with growth and development of mandible a controversial topic.
                </p>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    How to apply this information into <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">clinical diagnosis</span> and <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">treatment modality selection.</span> 
                </p>
    
            </div>


        </SectionPage>
    );
}
