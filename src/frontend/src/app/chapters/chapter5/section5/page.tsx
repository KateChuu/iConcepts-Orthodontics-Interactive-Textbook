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
        </SectionPage>
    );
}
