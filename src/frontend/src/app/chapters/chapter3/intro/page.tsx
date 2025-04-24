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
            {/* Fish Image */}
            <div className='my-4 flex justify-center'>
                <img 
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114785/how-finding-nemo-works-5-26_b6y2t8.jpg"
                    alt="Fish image" 
                    className="my-4 w-1/2 mx-auto" 
                />
            </div>

            {/* Dentist Image */}
            <div className='my-4 flex justify-center'>
                <img 
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114788/FindingNemo2003720pHDRiP-4-24_ftcr58.jpg"
                    alt="Dentist image" 
                    className="my-4 w-1/2 mx-auto" 
                />
            </div>


        </SectionPage>
    );
}
