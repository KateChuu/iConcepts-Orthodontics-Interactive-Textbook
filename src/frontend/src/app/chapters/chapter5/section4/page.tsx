import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';

export default function Section4PodcastPage() {
    return (
        <SectionPage
            title="Section 4: Podcast"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter5/section3"
            nextHref="/chapters/chapter5/section5"
            chapterHref="/chapters/chapter5"
        >
            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Movie 5.1
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Learning Transformers Podcast
                </p>

                <VideoPlayer
                    cloudName="difs4tswt"
                    publicId="IC_Podcast_jcydto"
                    sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1745118938/IC_Podcast_jcydto.mp4"
                    videoId="IC_Podcast"
                    caption="On the future of orthodontics, effective learning, and continuous development."
                />
            </div>

            <div className="my-4 flex justify-center">
                <img
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114944/paint_zot9yc.jpg"
                    className="w-1/2 mx-auto"
                    alt="Illustration"
                />
            </div>
        </SectionPage>
    );
}
