import SectionPage from '@/components/sectionPage';
import ImageGallery from '@/components/ImageGallery';

const gallery1Images = [
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/IMG_5908-36_fbtbzy.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114796/IMG_5909-38_b6kls5.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114787/IMG_5911-40_gdljxg.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114792/IMG_5912-42_ph525z.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114793/IMG_5916-44_n6yof7.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114793/IMG_5918-46_exubvx.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114791/IMG_5919-48_aovemb.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/BG_QH-34_hcnejq.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114791/IMG_5926-52_rdn6v9.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114788/IMG_5927-54_c9rqol.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/IMG_5921-56_iaqfpu.jpg',
];

const gallery2Images = [
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114788/Modified_BlueGrass_HD-28_lszhnm.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114795/GrassRollerHD-30_eupxdh.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/BG_Expansion-32_zuh74w.jpg',
    'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/BG_QH-34_hcnejq.jpg',
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
            <div className="mb-8 text-justify leading-relaxed">
                Interceptive Orthodontics aims at preserving the integrity and preventing malocclusion from developing at a specific stage. This includes:
                <ul className="list-disc list-outside pl-5 mt-1 text-zinc-800 dark:text-zinc-100">
                    <li>Early correction of carious lesions, particularly proximal caries.</li>
                    <li>Early recognition and elimination of oral habits.</li>
                    <li>Using space maintainers in case of early loss of deciduous teeth.</li>
                </ul>
            </div>

            <div className="mb-4">
                <p className="text-lg font-bold text-zinc-800 dark:text-white mb-2">
                    Gallery 1.1
                </p>
                <ImageGallery images={gallery1Images} />
                <p className="italic text-sm text-gray-500 text-center mt-2">
                    10 Year Old presenting with Normal Skeletal and Normal Dental development
                </p>
            </div>

            <div className="mb-8">
                <p className="text-lg font-bold text-zinc-800 dark:text-white mb-2">
                    Gallery 1.2
                </p>
                <ImageGallery images={gallery2Images} />
                <p className="italic text-sm text-gray-500 text-center mt-2">
                    Interceptive Orthodontics
                </p>
            </div>

            <p className="mb-12 text-justify leading-relaxed">
                Another example of Interceptive Orthodontics is <strong>Serial Extractions</strong> introduced by Kjellgren in 1948. However, it is not used in its traditional protocol due to excessive extraction episodes – but <strong>Guided Eruption</strong> with extractions of C’s followed by D’s may be considered in special circumstances to prevent excessive crowding in permanent dentition.
            </p>

            <div className="mb-12">
                <p className="text-lg font-bold text-zinc-800 dark:text-white mb-2">
                    Aims of Orthodontic Treatment
                </p>
                <ol className="list-decimal list-outside pl-5 text-zinc-800 dark:text-zinc-100 leading-relaxed space-y-1">
                    <li>Achieve a functional and aesthetic occlusion by altering permanently the position of teeth.</li>
                    <li>Intercept abnormal development of occlusion.</li>
                    <li>Establish functional efficiency and structural balance.</li>
                    <li>Eliminate traumatic bites.</li>
                    <li>Align irregular teeth prior to bridge work or partial dentures (<strong>Adjunctive Treatment</strong>).</li>
                    <li>Align prominent teeth which are more prone to trauma.</li>
                </ol>
            </div>

            <div className="mb-12">
                <p className="text-lg font-bold text-zinc-800 dark:text-white mb-2">
                    Need for Orthodontic Treatment
                </p>
                <ol className="list-decimal list-outside pl-5 text-zinc-800 dark:text-zinc-100 leading-relaxed space-y-1">
                    <li>Improve aesthetics.</li>
                    <li>Restoration of function.</li>
                    <li>Reduce susceptibility of dental caries and periodontal involvement due to malocclusion.</li>
                    <li>Aid in elimination of harmful habits.</li>
                    <li>Adjunctive treatment prior to prosthetic intervention.</li>
                    <li>Orthognathic cases as pre- and post-operative Orthodontics.</li>
                    <li>Special needs in congenital deformities such as cleft lip and palate patients.</li>
                    <li>“Handicapping Malocclusions” to improve the quality of life and social acceptability.</li>
                </ol>
            </div>
        </SectionPage>
    );
}
