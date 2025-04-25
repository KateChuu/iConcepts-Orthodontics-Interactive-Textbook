'use client';

import { useRef } from 'react';
import SectionPage from '@/components/sectionPage';
import InteractiveButtons from '@/components/interactiveButtons';

export default function page() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleFullscreen = () => {
        if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
        }
    };

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
                
                {/* Fullscreen wrapper */}
                <div
                    ref={containerRef}
                    className="relative w-full max-w-[960px] mx-auto"
                    style={{aspectRatio: '16/9'}}
                >
                    {/* Video */}
                    <video 
                        ref={videoRef}
                        id="interactive_2_2"
                        controls
                        className="w-full h-full object-contain bg-black"
                    >
                        <source
                            src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119482/ClassII2Cat_ddc1dh.mov"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    
                    </video>
                    {/* Fullscreen Trigger */}
                    <button
                        onClick={handleFullscreen}
                        className="absolute top-2 right-2 bg-white bg-opacity-80 text-black text-xs px-2 py-1 rounded shadow-md z-50"
                    >
                        Fullscreen
                    </button>

                    {/* Button and hint box control here*/}
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
                </div>
                
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Class II/2
                </p>
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