import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';

export default function Video2Page() {
    return (
        <SectionPage
            title="Video 2: EProf R Meithke Dec 2024 (2)"
            subtitle=""
            prevHref="/chapters/chapter7/video1"
            nextHref="/chapters/chapter7/video3"
            chapterHref="/chapters/chapter7"
        >

            {/* Video Player */}
            <VideoPlayer
                cloudName="difs4tswt"
                publicId="freecompress-EProfR_Miethke_2_1_wdqgmo"
                sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1746916346/freecompress-EProfR_Miethke_2_1_wdqgmo.mp4"
                videoId="chapter7_part2"
                caption="Dr Shazia Naser ud Din 2024"
            />
        </SectionPage>
    );
}
