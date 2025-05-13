import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';
import InteractiveButtons from '@/components/interactiveButtons';

export default function Video1Page() {
    return (
        <SectionPage
            title="Video 3: Fireside Discussion EPMiethke Dec 2024 2"
            subtitle=""
            prevHref="/chapters/chapter7/video2"
            nextHref="/chapters/chapter8/intro"
            chapterHref="/chapters/chapter7"
        >
            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Video 3 here
                </p>           
            </div>

            {/* Video Player */}
            {/*
            <VideoPlayer
                cloudName="difs4tswt"
                publicId=""
                sourceUrl=""
                videoId="Tip_Torque_Biomechanics"
                caption="Dr Shazia Naser ud Din 2022"
                interactiveButtons={
                    <>
                        <InteractiveButtons
                            videoId="Tip_Torque_Biomechanics"
                            timestamp={0}
                            duration={5}
                            x="50%"
                            y="35%"
                            text="Midline Diastema and AOB = Anterior Open Bite"
                        />
                    </>
                }
            />
            */}


        </SectionPage>
    );
}
