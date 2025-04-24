import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Chapter 3: Class III Malocclusion"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter2/section5"
            nextHref="/chapters/chapter3/section1"
            chapterHref="/chapters/chapter3"
        >
            {/* Image 1 */}
            <div className='my-4 flex justify-center'>
                First image here
            </div>

            {/* Image 2 */}
            <div className='my-4 flex justify-center'>
                Second image here
            </div>

           

        </SectionPage>
    );
}
