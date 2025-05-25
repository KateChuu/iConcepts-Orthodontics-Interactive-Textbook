import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';
import InteractiveButtons from '@/components/interactiveButtons';

export default function Video1Page() {
    return (
        <SectionPage
            title="Video 1: Tip Torque Biomechanics"
            subtitle=""
            prevHref="/chapters/chapter1/section6"
            nextHref="/chapters/chapter1/video2"
            chapterHref="/chapters/chapter1"
        >
            <div className="mb-8">
                <VideoPlayer
                    cloudName="difs4tswt"
                    publicId="TipTorqueBiomechanics_d5aiip"
                    sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1745119559/TipTorqueBiomechanics_d5aiip.mov"
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
                            {/* other buttons... */}
                        </>
                    }
                />
            </div>
            
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Click on + sign.
                </p>
            </div>

        </SectionPage>
    );
}
