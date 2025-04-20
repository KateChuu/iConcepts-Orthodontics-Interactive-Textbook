'use client';

import SectionPage from '@/components/sectionPage';

export default function Video2Page() {
    return (
        <SectionPage
            title="Video 2: Anterior Open Bite Simulation"
            subtitle=""
            prevHref="/chapters/chapter1/video1"              
            nextHref="/chapters/chapter2/section1"  
            chapterHref="/chapters/chapter1"       
        >
            {/* Video here */}
            <video 
                className="w-full h-[200px] border border-dashed border-gray-400 flex items-center justify-center text-sm text-gray-500 italic"
                controls
            >
                <source
                    src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119467/AnteriorOpenBite_tvmya8.mov"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            <p className="text-sm italic text-gray-500 text-center">
                Anterior Open Bite Simulation video Align Tech patient<br />
                Dr Shazia Naser ud Din 2022
            </p>
        </SectionPage>
    );
}
