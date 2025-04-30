import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 5: Final Lecture" 
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter5/section4"
            nextHref={undefined}
            chapterHref="/chapters/chapter5"
        >
            <div className="mb-8">
                <video
                    className="w-full border border-gray-400 flex items-center object-cover justify-center text-sm text-gray-500 italic"
                    controls
                >
                    <source
                        src="https://res.cloudinary.com/difs4tswt/video/upload/v1745115007/lecture-video-compressed_oiht5b.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                
            </div>

        </SectionPage>
    );
}
