import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 4: Clinical Examples"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter3/section3"
            nextHref="/chapters/chapter3/section5"
            chapterHref="/chapters/chapter3"
        >
        
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                GALLERY 3.2
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Clinical Case: 12.4 year old female
            </p>
            {/* immage gallery 3.2 
            <div className="flex justify-center my-4">
                <ImageGallery images={gallery1Images} />
            </div>
            */}
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                GALLERY 3.3
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Fixed Appliance Treatment Case in 3.2
            </p>
            {/* immage gallery 3.3
            <div className="flex justify-center my-4">
                <ImageGallery images={gallery2Images} />
            </div>
            */}
        </div>


        </SectionPage>
    );
}
