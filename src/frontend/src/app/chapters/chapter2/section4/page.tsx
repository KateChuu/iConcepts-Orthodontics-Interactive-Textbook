'use client';

import { useRef } from 'react';
import SectionPage from '@/components/sectionPage';
import InteractiveButtons from '@/components/interactiveButtons';


export default function SelfTestPage() {
    const videoRef1 = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);
    const containerRef1 = useRef<HTMLDivElement>(null);
    const containerRef2 = useRef<HTMLDivElement>(null);

    const handleFullscreen = (container: HTMLDivElement | null) => {
        if (container?.requestFullscreen) {
        container.requestFullscreen();
        }
    };

    return (
        <SectionPage
            title="Section4: Self Test"
            subtitle=""
            prevHref="/chapters/chapter2/section3"              
            nextHref="/chapters/chapter2/section5"  
            chapterHref="/chapters/chapter2"       
        >
            {/* Fullscreen wrapper */}
            <div
                ref={containerRef1}
                className="relative w-full max-w-[960px] mx-auto"
                style={{aspectRatio: '16/9'}}
            >
                {/* Video here */}
                <video
                    ref={videoRef1}
                    id="Deep_Traumatic_Bite"
                    controls
                    className="w-full h-full object-contain bg-black"
                >
                    <source
                        src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119528/DeepTraumaticBite_vmza4w.mov"
                        type="video/mp4"
                    />

                    Your browser does not support the video tag.
                </video>

                {/* Fullscreen Trigger */}
                <button
                    onClick={() => handleFullscreen(containerRef1.current)}
                    className="absolute top-2 right-2 bg-white bg-opacity-80 text-black text-xs px-2 py-1 rounded shadow-md z-50"
                >
                    Fullscreen
                </button>
                
                {/* Button and hint box control here*/}
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
            
                <p className="italic text-sm text-gray-500">
                    Deep Traumatic bite correction Adult case with Bruxism
                </p>
            </div>

            <div
                ref={containerRef2}
                className="relative w-full max-w-[960px] mx-auto"
                style={{aspectRatio: '16/9'}}
            >
                <video 
                    ref={videoRef2}
                    id="Class_II_Div"
                    controls
                    className="w-full h-full object-contain bg-black"
                >
                    <source
                        src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119493/ClassIIDiv_wlrb9b.mov"
                        type="video/mp4"
                    />

                    Your browser does not support the video tag.
                </video>
                {/* Fullscreen Trigger */}
                <button
                    onClick={() => handleFullscreen(containerRef2.current)}
                    className="absolute top-2 right-2 bg-white bg-opacity-80 text-black text-xs px-2 py-1 rounded shadow-md z-50"
                >
                    Fullscreen
                </button>
                
                {/* Button and hint box control here*/}
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
                <p className="italic text-sm text-gray-500">
                    3D interactive CADCAM controls to navigate corrections with tip torque distalization and expansion examples
                </p>
            </div>
        </SectionPage>
    );
}