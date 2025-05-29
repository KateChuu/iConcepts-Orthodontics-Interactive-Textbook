import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';

export default function Video1Page() {
    return (
        <SectionPage
            title="Video 1: EProf R Meithke Dec 2024 (1)"
            subtitle=""
            prevHref="/chapters/chapter7/section1"
            nextHref="/chapters/chapter7/video2"
            chapterHref="/chapters/chapter7"
        >

            {/* Video Player */}
            <VideoPlayer
                cloudName="difs4tswt"
                publicId="freecompress-EProf_R_Meithke_Dec_2024_1_dst8i3"
                sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1746916346/freecompress-EProf_R_Meithke_Dec_2024_1_dst8i3.mp4"
                videoId="chapter7_part1"
                caption="Dr Shazia Naser ud Din 2024"
            />


        </SectionPage>
    );
}
