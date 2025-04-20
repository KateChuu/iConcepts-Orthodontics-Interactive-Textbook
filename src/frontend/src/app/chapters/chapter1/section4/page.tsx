import SectionPage from '@/components/sectionPage';
import ImageGallery from '@/components/ImageGallery';

const gallery1Images = [
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/IMG_5908-36_fbtbzy.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114796/IMG_5909-38_b6kls5.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114787/IMG_5911-40_gdljxg.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114792/IMG_5912-42_ph525z.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114793/IMG_5916-44_n6yof7.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114793/IMG_5918-46_exubvx.jpg',
];

export default function Section4() {
    return (
        <SectionPage
            title="Section 4: Occlusion Classification"
            subtitle="Published in 2024 · Views: 11200 · Average Reading Time: 22min"
            prevHref="/chapters/chapter1/section3"
            nextHref="/chapters/chapter1/section5"
            chapterHref="/chapters/chapter1"
        >
            <p>
                Interceptive Orthodontics aims at preserving the integrity and preventing malocclusion from developing at a specific stage. This includes:
            </p>
            <ul className="list-disc pl-5">
                <li>Early correction of carious lesions, particularly proximal caries.</li>
                <li>Early recognition and elimination of oral habits.</li>
                <li>Using space maintainers in case of early loss of deciduous teeth.</li>
            </ul>

            <h3 className="font-bold mt-4">Gallery 1.1 (백엔드 처리 예정 - 이미지 위치)</h3>
            <ImageGallery images={gallery1Images} />

            <p className="italic text-sm text-gray-500">
                10 Year Old presenting with Normal Skeletal and Normal Dental development
            </p>

            <h3 className="font-bold mt-4">Gallery 1.2 (백엔드 처리 예정 - 이미지 위치)</h3>
            {/* <ImageGallery images={gallery2Images} /> */}
            <p className="italic text-sm text-gray-500">Interceptive Orthodontics</p>

            <p className="mt-4">
                Another example of Interceptive Orthodontics is <strong>Serial Extractions</strong> introduced by Kjellgren in 1948. However, it is not used in its traditional protocol due to excessive extraction episodes - but <strong>Guided Eruption</strong> with extractions of C’s followed by D’s may be considered in special circumstances to prevent excessive crowding in permanent dentition.
            </p>

            <h3 className="font-bold mt-6 text-gray-600">Aims of Orthodontic Treatment</h3>
            <ol className="list-decimal pl-5">
                <li>Achieve a functional and aesthetic occlusion by altering permanently the position of teeth.</li>
                <li>Intercept abnormal development of occlusion.</li>
                <li>Establish functional efficiency and structural balance.</li>
                <li>Eliminate traumatic bites.</li>
                <li>Align irregular teeth prior to bridge work or partial dentures (<strong>Adjunctive Treatment</strong>).</li>
                <li>Align prominent teeth which are more prone to trauma.</li>
            </ol>

            <h3 className="font-bold mt-6 text-gray-600">Need for Orthodontic Treatment</h3>
            <ol className="list-decimal pl-5">
                <li>Improve aesthetics.</li>
                <li>Restoration of function.</li>
                <li>Reduce susceptibility of dental caries and periodontal involvement due to malocclusion.</li>
                <li>Aid in elimination of harmful habits.</li>
                <li>Adjunctive treatment prior to prosthetic intervention.</li>
                <li>Orthognathic cases as pre- and post- operative Orthodontics.</li>
                <li>Special needs in congenital deformities such as cleft lip and palate patients.</li>
                <li>“Handicapping Malocclusions” to improve the quality of life and social acceptability.</li>
            </ol>

            {/* 
                <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 mt-6">
                    <strong>Learner Notes:</strong>
                    <p>You can draw or take notes here using the provided tool.</p>
                    <DrawableLearnerNotes />
                </div>
            */}
        </SectionPage>
    );
}
