import SectionPage from '@/components/sectionPage';
import React from 'react';

export default function page() {
    return (
        <SectionPage
            title="Section 5: Test Your Knowledge"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter4/section3"
            nextHref="/chapters/chapter5/intro"
            chapterHref="/chapters/chapter4"
        >
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                H5P Learning Experience
            </h3>
        </div>

  
        <div className="mb-8 flex justify-center w-full">
            <div className="relative w-full max-w-2xl" style={{ paddingTop: '75%' }}>
                <iframe
                    src="https://unimelb.h5p.com/content/1291914216397877129/embed"
                    title="CAD CAM Digital Work Flow"
                    allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border border-zinc-300 dark:border-zinc-700 rounded-md"
                ></iframe>
            </div>
        </div>

        <div className="mb-8 flex justify-center w-full">
            <div className="relative w-full max-w-2xl" style={{ paddingTop: '90%' }}>
                <iframe
                    src="https://unimelb.h5p.com/content/1291914168756258079/embed"
                    title="Tooth Wear"
                    allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border border-zinc-300 dark:border-zinc-700 rounded-md"
                ></iframe>
            </div>
        </div>

        <div className="mb-8 flex justify-center w-full">
            <div className="relative w-full max-w-2xl" style={{ paddingTop: '90%' }}>
                <iframe
                    src="https://unimelb.h5p.com/content/1292276390804310689/embed"
                    title="Case 4 - Frontal Anterior Occlusal - before and after"
                    allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border border-zinc-300 dark:border-zinc-700 rounded-md"
                ></iframe>
            </div>
        </div>

        <div className="mb-8 flex justify-center w-full">
            <div className="relative w-full max-w-2xl" style={{ paddingTop: '75%' }}>
                <iframe
                    src="https://unimelb.h5p.com/content/1291908039474101649/embed"
                    title="Ectopic / Impacted Dental Units"
                    allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border border-zinc-300 dark:border-zinc-700 rounded-md"
                ></iframe>
            </div>
        </div>

        <div className="mb-8">
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Relax in nature and have hobbies that enhance your creativity :)
            </p>
            <img 
                src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114943/nature_aoizq7.jpg"
                alt="Functional Appliance" 
                className="my-4 w-1/2 mx-auto" 
            />
        </div>
        </SectionPage>
    );
}

