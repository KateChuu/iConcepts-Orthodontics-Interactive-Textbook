import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Chapter 2: Class II Malocclusion"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter1/video2"
            nextHref="/chapters/chapter2/section1"
            chapterHref="/chapters/chapter2"
        >
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                Interactive 2.2
            </h3>
            
            <video 
                className="w-full border border-gray-400 flex items-center object-cover justify-center text-sm text-gray-500 italic"
                controls
            >
                <source
                    src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119482/ClassII2Cat_ddc1dh.mov"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            
            </video>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Class II/2
            </p>
        </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Class II/1 (Poor oral Hygiene)
                </h3>
                <div className="flex justify-center my-4">
                    <img
                        src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114814/IMG_1790-179_alhphp.jpg"
                        alt="Treatment Time 10 months"
                        className="w-1/2 mx-auto"
                    />
                </div>
            </div>
        </SectionPage>
    );
}
