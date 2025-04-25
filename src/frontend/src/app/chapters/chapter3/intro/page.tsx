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
            {/* Teeth Image */}
            <div className='my-4 flex justify-center'>
                <img 
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114847/droppedImage-small-91_xjimwl.png"
                    alt="Teeth image" 
                    className="my-4 w-1/2 mx-auto" 
                />
            </div>

            {/* Skeleton Image */}
            <div className='my-4 flex justify-center'>
                <img 
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114848/LateralCeph-92_r6tjrt.jpg"
                    alt="Skeleton image" 
                    className="my-4 w-1/2 mx-auto" 
                />
            </div>


        </SectionPage>
    );
}
