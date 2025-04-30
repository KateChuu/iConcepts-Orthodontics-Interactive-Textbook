'use client';

import {useEffect, useRef, useState} from 'react';
import SectionPage from '@/components/sectionPage';
import InteractiveButtons from '@/components/interactiveButtons';

export default function Video1Page() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleFullscreen = () => {
        if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
        }
    };

    return (
        <SectionPage
            title="Video 1: Tip Torque Biomechanics"
            subtitle=""
            prevHref="/chapters/chapter1/section6"              
            nextHref="/chapters/chapter1/video2"  
            chapterHref="/chapters/chapter1"       
        >
            {/* Fullscreen wrapper */}
            <div
                ref={containerRef}
                className="relative w-full max-w-[960px] mx-auto"
                style={{aspectRatio: '16/9'}}
            >
            
                {/* Video here */}
                <video 
                    ref={videoRef}
                    id="Tip_Torque_Biomechanics"
                    controls
                    className="w-full h-full object-contain bg-black"
                >
                    <source
                        src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119559/TipTorqueBiomechanics_d5aiip.mov"
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
                    videoId="Tip_Torque_Biomechanics"
                    timestamp={0}
                    duration={5}
                    x="50%"
                    y="35%"
                    text="Midline Diastema and AOB = Anterior Open Bite"
                />
                <InteractiveButtons
                    videoId="Tip_Torque_Biomechanics"
                    timestamp={19}
                    duration={5}
                    x="43%"
                    y="38%"
                    text="Individual tooth movements on CAD CAM"
                />
                <InteractiveButtons
                    videoId="Tip_Torque_Biomechanics"
                    timestamp={56}
                    duration={5}
                    x="35%"
                    y="49%"
                    text="Correction of Molar relationship"
                />
                <InteractiveButtons
                    videoId="Tip_Torque_Biomechanics"
                    timestamp={102}
                    duration={5}
                    x="57%"
                    y="45%"
                    text="Intrusion of 22 for ideal Smile Aesthetics"
                />
                <InteractiveButtons
                    videoId="Tip_Torque_Biomechanics"
                    timestamp={123}
                    duration={5}
                    x="62%"
                    y="45%"
                    text="Ideal OJ OB Class I MR achieved in CAD CAM"
                />
            </div>
        </SectionPage>
    );
}