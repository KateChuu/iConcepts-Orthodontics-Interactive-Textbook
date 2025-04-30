'use client';

import { useRef } from 'react';
import SectionPage from '@/components/sectionPage';
import InteractiveButtons from '@/components/interactiveButtons';

export default function Video2Page() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleFullscreen = () => {
        if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
        }
    };

    return (
        <SectionPage
            title="Video 2: Anterior Open Bite Simulation"
            subtitle=""
            prevHref="/chapters/chapter1/video1"              
            nextHref="/chapters/chapter2/intro"  
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
                    id="Anterior_Open_Bite_Simulation"
                    controls
                    className="w-full h-full object-contain bg-black"
                >
                    <source
                        src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119467/AnteriorOpenBite_tvmya8.mov"
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

                <p className="text-sm italic text-gray-500 text-center">
                    Anterior Open Bite Simulation video Align Tech patient<br />
                    Dr Shazia Naser ud Din 2022
                </p>
            </div>
        </SectionPage>
    );
}