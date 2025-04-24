'use client';

import SectionPage from '@/components/sectionPage';

export default function Video2Page() {
    return (
        <SectionPage
            title="Video 2: Anterior Open Bite Simulation"
            subtitle=""
            prevHref="/chapters/chapter1/video1"              
            nextHref="/chapters/chapter2/intro"  
            chapterHref="/chapters/chapter1"       
        >
            <div className="mb-8">
                {/* Video here */}
                <video 
                    className="w-full border border-gray-400 flex items-center object-cover justify-center text-sm text-gray-500 italic mb-4"
                    controls
                >
                    <source
                        src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119467/AnteriorOpenBite_tvmya8.mov"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Anterior Open Bite Simulation video Align Tech patient<br />
                    Dr Shazia Naser ud Din 2022
                </p>
            </div>
        </SectionPage>
    );
}
