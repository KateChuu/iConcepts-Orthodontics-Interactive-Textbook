import SectionPage from '@/components/sectionPage';

import React from 'react';


export default function page() {
    return (
        <SectionPage
            title="Section 5: Test Your Knowledge"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter4/section4"
            nextHref="/chapters/chapter5/intro"
            chapterHref="/chapters/chapter4"
        >
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                H5P Learning Experience
            </h3>
            <div className="w-full max-w-[683px] mb-[30px]">
                <iframe
                    src="https://unimelb.h5p.com/content/1291914216397877129/embed"
                    aria-label="CAD CAM Digital Work Flow"
                    width="683"
                    height="500" // This height is needed because when you click on the iframe, it will expand
                    allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
                    className="w-full"
                ></iframe>
            </div>
            <div className="w-full max-w-[683px] mb-[30px]">
                <iframe
                    src="https://unimelb.h5p.com/content/1291914168756258079/embed"
                    aria-label="Tooth Wear"
                    width="683"
                    height="620"
                    allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
                    className="w-full"
                ></iframe>
            </div>
            <div className="w-full max-w-[683px] mb-[30px]">
                <iframe
                    src="https://unimelb.h5p.com/content/1292276390804310689/embed"
                    aria-label="Case 4 - Frontal Anterior Occlusal - before and after"
                    width="683"
                    height="650"
                    allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
                    className="w-full"
                ></iframe>
            </div>
            <div className="w-full max-w-[683px] mb-[30px]">
                <iframe
                    src="https://unimelb.h5p.com/content/1291908039474101649/embed"
                    aria-label="Ectopic / Impacted Dental Units"
                    width="683"
                    height="540"
                    allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
                    className="w-full"
                ></iframe>
            </div>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Relax in nature and have hobbies that enhance your creativity :)
            </h3>
            <img 
                src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114943/nature_aoizq7.jpg"
                alt="Functional Appliance" 
                className="my-4 w-1/2 mx-auto" 
            />
        </div>
        </SectionPage>
    );
}
