'use client';

import SectionPage from '@/components/sectionPage';

export default function Video1Page() {
    return (
        <SectionPage
            title="Video 1: Tip Torque Biomechanics"
            subtitle=""
            prevHref="/chapters/chapter1/section5"              
            nextHref="/chapters/chapter1/video2"  
            chapterHref="/chapters/chapter1"       
        >
            {/* Video here */}
            <div className="w-full h-[200px] border border-dashed border-gray-400 flex items-center justify-center text-sm text-gray-500 italic">
                TipTorque Biomechanics - video here
            </div>
        </SectionPage>
    );
}
