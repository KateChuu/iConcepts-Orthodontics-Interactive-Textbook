'use client';
import SectionPage from '@/components/sectionPage';

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
                {/* Video here */}
                <video 
                    className="w-full border border-gray-400 flex items-center object-cover justify-center text-sm text-gray-500 italic mb-4"
                    controls
                >
                    <source
                        src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119528/DeepTraumaticBite_vmza4w.mov"
                        type="video/mp4"
                    />

                    Your browser does not support the video tag.
                </video>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Deep Traumatic bite correction Adult case with Bruxism
                </p>
            </div>

            <div className="mb-8">
                <video 
                    className="w-full border border-gray-400 flex items-center object-cover justify-center text-sm text-gray-500 italic mb-4"
                    controls
                >
                    <source
                        src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119493/ClassIIDiv_wlrb9b.mov"
                        type="video/mp4"
                    />

                    Your browser does not support the video tag.
                </video>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    3D interactive CADCAM controls to navigate corrections with tip torque distalization and expansion examples
                </p>
            </div>
        </SectionPage>
    );
}
