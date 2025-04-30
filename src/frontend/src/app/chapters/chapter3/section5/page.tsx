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
            title="Section 5: Self Test"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter3/section4"
            nextHref="/chapters/chapter4/intro"
            chapterHref="/chapters/chapter3"
        >
            <div className="mb-8">
           
                {/* Fullscreen wrapper */}
                <div
                    ref={containerRef}
                    className="relative w-full max-w-[960px] mx-auto"
                    style={{aspectRatio: '16/9'}}
                >
                    {/* Video here */}
                    <video 
                        ref={videoRef}
                        id="Itero_Posterior_Crossbite"
                        controls
                        className="w-full h-full object-contain bg-black"
                    >
                        <source
                            src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119540/IteroPosteriorCrossbite_xwioaj.mov"
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
                </div>
        
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Intra Oral scanning with heat maps for high occlusal loading<br />
                    Observe the unilateral cross bite
                </p>
            </div>

        </SectionPage>
    );
}