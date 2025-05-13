import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';

export default function Video1Page() {
    return (
        <SectionPage
            title="Video 3: Part 3 Growth and Development of Maxillary and Mandibular"
            subtitle=""
            prevHref="/chapters/chapter6/video2"
            nextHref="/chapters/chapter7/intro"
            chapterHref="/chapters/chapter6"
        >

            {/* Video Player */}
            <VideoPlayer
                cloudName="difs4tswt"
                publicId="Part_3_Growth_and_De-s1-full_grof3m"
                sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1746031182/Part_3_Growth_and_De-s1-full_grof3m.mp4"
                videoId="Ch6_part3"
                caption="Dr Shazia Naser ud Din 2022"
            />

            <div className="mb-8 mt-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">
                        Growth predictions have been explored over the decades for best time for ideal treatment in sync with pubertal  growth spurt.
                    </span>
                </p>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    In orthodontics higher success with treatment is related to compliance. 
                    In this fun final series the different aspects of growth prediction are assessed from historical to the best practices with contemporary CVS or CVMI (view the video to learn about the abbreviations) substantiated with evidence based papers. 
                </p>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Make  notes of the clinical relevance to each and how clinicians can apply ideal treatment strategy for higher success based on simple non-invasive growth assessments. 
                </p>


                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    What have been your key learning points in these 3 video series? 
                </p>


                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Summarise in dot points.
                </p>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    All the best 😀
                </p>


            </div>


        </SectionPage>
    );
}
