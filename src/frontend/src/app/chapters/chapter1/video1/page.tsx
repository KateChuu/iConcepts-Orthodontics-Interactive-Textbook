'use client';

import SectionPage from '@/components/sectionPage';

export default function Video1Page() {
    return (
        <SectionPage
            title="Video 1: Tip Torque Biomechanics"
            subtitle=""
            prevHref="/chapters/chapter1/section6"              
            nextHref="/chapters/chapter1/video2"  
            chapterHref="/chapters/chapter1"       
        >
            {/* Video here */}
            <video 
                className="w-full border border-gray-400 flex items-center object-cover justify-center text-sm text-gray-500 italic"
                controls
            >
                <source
                    src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119559/TipTorqueBiomechanics_d5aiip.mov"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </SectionPage>
    );
}
