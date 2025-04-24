import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 5: Self Test"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter3/section4"
            nextHref="/chapters/chapter4/intro"
            chapterHref="/chapters/chapter3"
        >
            <div className="mb-8">
                {/* Video here */}
                <video 
                    className="w-full border border-gray-400 flex items-center object-cover justify-center text-sm text-gray-500 italic mb-4"
                    controls
                >
                    <source
                        // src="https://res.cloudinary.com/difs4tswt/video/upload/v1745119559/TipTorqueBiomechanics_d5aiip.mov"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Intra Oral scanning with heat maps for high occlusal loading<br />
                    Observe the unilateral cross bite
                </p>
            </div>

        </SectionPage>
    );
}
