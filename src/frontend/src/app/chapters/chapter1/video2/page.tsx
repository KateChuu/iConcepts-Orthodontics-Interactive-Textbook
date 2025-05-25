import SectionPage from '@/components/sectionPage';
import InteractiveButtons from '@/components/interactiveButtons';
import VideoPlayer from '@/components/videoPlayer';

export default function Video2Page() {
    return (
        <SectionPage
            title="Video 2: Anterior Open Bite Simulation"
            subtitle=""
            prevHref="/chapters/chapter1/video1"
            nextHref="/chapters/chapter2/intro"
            chapterHref="/chapters/chapter1"
        >
            <div className="mb-8">
                <VideoPlayer
                    cloudName="difs4tswt"
                    publicId="AnteriorOpenBite_tvmya8"
                    sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1745119467/AnteriorOpenBite_tvmya8.mov"
                    videoId="Anterior_Open_Bite_Simulation"
                    caption="Anterior Open Bite Simulation video Align Tech patient · Dr Shazia Naser ud Din 2022"
                    interactiveButtons={
                        <>
                            <InteractiveButtons
                                videoId="Anterior_Open_Bite_Simulation"
                                timestamp={3}
                                duration={5}
                                x="55%"
                                y="20%"
                                text="Adult case with skeleton Anterior Open Bite (AOB)"
                            />
                            <InteractiveButtons
                                videoId="Anterior_Open_Bite_Simulation"
                                timestamp={30}
                                duration={5}
                                x="55%"
                                y="20%"
                                text="Compare the treatment plans for ideal reduction of AOB"
                            />
                            <InteractiveButtons
                                videoId="Anterior_Open_Bite_Simulation"
                                timestamp={67}
                                duration={5}
                                x="55%"
                                y="20%"
                                text="Aim for ideal OJ OB with correct inter-incusal angles"
                            />
                        </>
                    }
                />
            </div>
            
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Click on + to be surprised.
                </p>
            </div>
        </SectionPage>
    );
}
