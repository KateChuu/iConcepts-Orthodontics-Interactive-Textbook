import SectionPage from '@/components/sectionPage';
import InteractiveButtons from '@/components/interactiveButtons';
import VideoPlayer from '@/components/videoPlayer';

export default function Section5Page() {
    return (
        <SectionPage
            title="Section 5: Self Test"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter3/section4"
            nextHref="/chapters/chapter4/intro"
            chapterHref="/chapters/chapter3"
        >
            <div className="mb-8">
                <VideoPlayer
                    cloudName="difs4tswt"
                    publicId="IteroPosteriorCrossbite_xwioaj"
                    sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1745119540/IteroPosteriorCrossbite_xwioaj.mov"
                    videoId="Itero_Posterior_Crossbite"
                    caption="Intra Oral scanning with heat maps for high occlusal loading. Observe the unilateral cross bite"
                    interactiveButtons={
                        <>
                            <InteractiveButtons
                                videoId="Itero_Posterior_Crossbite"
                                timestamp={0}
                                duration={5}
                                x="75%"
                                y="70%"
                                text="Posterior Crossbite Leftside"
                            />
                            <InteractiveButtons
                                videoId="Itero_Posterior_Crossbite"
                                timestamp={8}
                                duration={5}
                                x="73%"
                                y="75%"
                                text="Unilateral Posterior Generalised Crossbite Left side"
                            />
                            <InteractiveButtons
                                videoId="Itero_Posterior_Crossbite"
                                timestamp={20}
                                duration={5}
                                x="45%"
                                y="30%"
                                text="Occlusogram with heat maps shows over loading of posterior dentition"
                            />
                        </>
                    }
                />
            </div>
        </SectionPage>
    );
}
