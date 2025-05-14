import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';

export default function Video3Page() {
    return (
        <SectionPage
            title="Video 3: Fireside Discussion EPMiethke Dec 2024 2"
            subtitle=""
            prevHref="/chapters/chapter7/video2"
            nextHref="/chapters/chapter8/intro"
            chapterHref="/chapters/chapter7"
        >

            {/* Video Player */}
            <VideoPlayer
                cloudName="difs4tswt"
                publicId="freecompress-Part_3_EProf_Miekthe_chat_about_journey_of_5_decades_1_ku5obm"
                sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1746916358/freecompress-Part_3_EProf_Miekthe_chat_about_journey_of_5_decades_1_ku5obm.mp4"
                videoId="chapter7_part3"
                caption="Dr Shazia Naser ud Din 2024"
            />
        </SectionPage>
    );
}
