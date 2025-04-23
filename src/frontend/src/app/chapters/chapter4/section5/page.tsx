import SectionPage from '@/components/sectionPage';
import ImageGallery from '@/components/ImageGallery';


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
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                H5P Learning Experience
            </h3>
            <div className="flex justify-center my-4">
                <img
                    src="https://unimelb.h5p.com/content/1291914216397877129/embed"
                    alt="H5P"
                    className="w-1/2 mx-auto"
                />
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

