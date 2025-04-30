import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Chapter 4: Functional Orthopaedic Appliances"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter3/section5"
            nextHref="/chapters/chapter4/section1"
            chapterHref="/chapters/chapter4"
        >

        <div className="mb-8">
            <div className="flex justify-center my-4">
                <img
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114944/chapter4_frontpage_1_joun81.jpg"
                    alt="Patient's Left & Right Side"
                    className="w-1/2 mx-auto"
                />
            </div>
        </div>

        <div className="mb-8">
            <div className="flex justify-center my-4">
                <img
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114941/chapter4_frontpage_2_c4woyl.jpg"
                    alt="Patient's Left & Right Side"
                    className="w-1/2 mx-auto"
                />
            </div>
        </div>
        </SectionPage>
    );
}
