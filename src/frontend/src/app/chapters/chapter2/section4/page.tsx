import SectionPage from '@/components/sectionPage';
import InteractiveButtons from '@/components/interactiveButtons';
import VideoPlayer from '@/components/videoPlayer';

export default function SelfTestPage() {
    return (
        <SectionPage
            title="Section 4: Self Test"
            subtitle=""
            prevHref="/chapters/chapter2/section3"
            nextHref="/chapters/chapter2/section5"
            chapterHref="/chapters/chapter2"
        >

            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Click plus +
                </p>
            </div>

            <div className="mb-8">
                {/* Video 1: Deep Traumatic Bite */}
                <VideoPlayer
                    cloudName="difs4tswt"
                    publicId="DeepTraumaticBite_vmza4w"
                    sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1745119528/DeepTraumaticBite_vmza4w.mov"
                    videoId="Deep_Traumatic_Bite"
                    caption="Deep Traumatic bite correction Adult case with Bruxism"
                    interactiveButtons={
                        <>
                            <InteractiveButtons
                                videoId="Deep_Traumatic_Bite"
                                timestamp={1}
                                duration={5}
                                x="15%"
                                y="40%"
                                text="Excessive DEEP TRAUMATIC BITE"
                            />
                            <InteractiveButtons
                                videoId="Deep_Traumatic_Bite"
                                timestamp={7}
                                duration={5}
                                x="60%"
                                y="20%"
                                text="Excessive DEEP TRAUMATIC BITE with Attrition of anterior dentition"
                            />
                            <InteractiveButtons
                                videoId="Deep_Traumatic_Bite"
                                timestamp={21}
                                duration={5}
                                x="63%"
                                y="35%"
                                text="Lingual view of DEEP TRAUMATIC BITE"
                            />
                            <InteractiveButtons
                                videoId="Deep_Traumatic_Bite"
                                timestamp={48}
                                duration={5}
                                x="78%"
                                y="29%"
                                text="Observe the TORQUE added on upper and lower incisors with CADCAM tools"
                            />
                        </>
                    }
                />
            </div>


            <div className="mb-8">
                {/* Video 2: Class II Div */}
                <VideoPlayer
                    cloudName="difs4tswt"
                    publicId="ClassIIDiv_wlrb9b"
                    sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1745119493/ClassIIDiv_wlrb9b.mov"
                    videoId="Class_II_Div"
                    caption="3D interactive CADCAM controls to navigate corrections with tip torque distalization and expansion examples"
                    interactiveButtons={
                        <>
                            <InteractiveButtons
                                videoId="Class_II_Div"
                                timestamp={6}
                                duration={5}
                                x="40%"
                                y="60%"
                                text="Compare right and left side modifications with blue superimpositions and table below with details for changes"
                            />
                            <InteractiveButtons
                                videoId="Class_II_Div"
                                timestamp={11}
                                duration={5}
                                x="40%"
                                y="47%"
                                text="Observe the significant change in OJ and Maxillary expansion"
                            />
                            <InteractiveButtons
                                videoId="Class_II_Div"
                                timestamp={38}
                                duration={5}
                                x="35%"
                                y="31%"
                                text="Now observe mandibular arch and changes green squares are extra space - LEEWAY SPACE"
                            />
                        </>
                    }
                />
            </div>

            
        </SectionPage>
    );
}
