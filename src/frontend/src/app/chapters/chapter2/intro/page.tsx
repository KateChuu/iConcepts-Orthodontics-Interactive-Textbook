import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';
import InteractiveButtons from '@/components/interactiveButtons';

export default function Chapter2IntroPage() {
    return (
        <SectionPage
            title="Chapter 2: Class II Malocclusion"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter1/video2"
            nextHref="/chapters/chapter2/section1"
            chapterHref="/chapters/chapter2"
        >
            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Interactive 2.2
                </h3>

                <VideoPlayer
                    cloudName="difs4tswt"
                    publicId="ClassII2Cat_ddc1dh"
                    sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1745119482/ClassII2Cat_ddc1dh.mov"
                    videoId="interactive_2_2"
                    caption="Class II/2"
                    interactiveButtons={
                        <>
                            <InteractiveButtons
                                videoId="interactive_2_2"
                                timestamp={0}
                                duration={5}
                                x="15%"
                                y="20%"
                                text="Typical Class II/ 2 with lateral incisors proclined"
                            />
                            <InteractiveButtons
                                videoId="interactive_2_2"
                                timestamp={2}
                                duration={5}
                                x="13%"
                                y="63%"
                                text="Observe the Crossbite correction"
                            />
                            <InteractiveButtons
                                videoId="interactive_2_2"
                                timestamp={36}
                                duration={5}
                                x="75%"
                                y="50%"
                                text="Observe the OB correction from the lingual aspect only available in CADCAM"
                            />
                        </>
                    }
                />
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Class II/1 (Poor oral Hygiene)
                </h3>
                <div className="flex justify-center my-4">
                    <img
                        src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114814/IMG_1790-179_alhphp.jpg"
                        alt="Treatment Time 10 months"
                        className="w-1/2 mx-auto"
                    />
                </div>
            </div>
        </SectionPage>
    );
}
