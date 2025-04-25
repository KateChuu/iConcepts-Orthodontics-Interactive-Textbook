import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 4: Podcast" 
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter5/section3"
            nextHref="/chapters/chapter5/section5"
            chapterHref="/chapters/chapter5"
        >
            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Movie 5.1
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Learning Transformers Podcast
                </p>
                <video
                    className="w-full border border-gray-400 flex items-center object-cover justify-center text-sm text-gray-500 italic mb-4"
                    controls
                >
                    <source
                        src="https://res.cloudinary.com/difs4tswt/video/upload/v1745118938/IC_Podcast_jcydto.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    On the future of orthodontics, effective learning, and continous development.
                </p>
            </div>

            <div className='my-4 flex justify-center'>
                <img
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114944/paint_zot9yc.jpg"
                    className="w-1/2 mx-auto"
                />
            </div>



        </SectionPage>
    );
}
