import SectionPage from '@/components/sectionPage';
import ImageGallery from '@/components/ImageGallery';

const gallery1Images = [
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/IMG_5908-36_fbtbzy.jpg',
        caption: 'Extra Oral Frontal View Relaxed'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114796/IMG_5909-38_b6kls5.jpg',
        caption: 'Extra Oral Frontal View with Emotional Smile'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114787/IMG_5911-40_gdljxg.jpg',
        caption: '3/4 Profile smiling (assess the incisor inclination)'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114792/IMG_5912-42_ph525z.jpg',
        caption: 'Extra Oral Full Profile (Assess skeletal Pattern)'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114793/IMG_5916-44_n6yof7.jpg',
        caption: '3/4 Profile smiling Left side'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114793/IMG_5918-46_exubvx.jpg',
        caption: 'Extra Oral Full Profile Left side observer the OJ'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114791/IMG_5919-48_aovemb.jpg',
        caption: 'Intra Oral Occlusal front observe OJ OB Centre lines and Oral health status'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/BG_QH-34_hcnejq.jpg',
        caption: 'Upper Occlusal view (Mirror image)'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114791/IMG_5926-52_rdn6v9.jpg',
        caption: 'Lower occlusal view (Mirror Image)'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114788/IMG_5927-54_c9rqol.jpg',
        caption: 'Intra Oral Right side eruption of 45'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/IMG_5921-56_iaqfpu.jpg',
        caption: 'Intra Oral Left side erupting 35'
    }
];
  

const gallery2Images = [
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114788/Modified_BlueGrass_HD-28_lszhnm.jpg',
        caption: 'Modified Grass Roller Habit Deterrent on Quad Helix to assist in habit breaking and transverse correction for efficient and effective Orthodontic Treatment'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114795/GrassRollerHD-30_eupxdh.jpg',
        caption: 'Grass Roller Habit Deterrent - Occlusal View'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/BG_Expansion-32_zuh74w.jpg',
        caption: 'Upper removable expansion Appliance with Double Adams Left DE and midline palatal screw. Patient needs to be compliant.'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114790/BG_QH-34_hcnejq.jpg',
        caption: 'Quad Helix (4 Helices) used for transverse correction maxillary arch (for non-compliant patients ideal fixed expander)'
    }
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
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Interceptive Orthodontics aims at preserving the integrity and preventing malocclusion from developing at a specific stage. This includes:
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li><strong>Early correction of carious lesions, particularly proximal caries.</strong></li>
                    <li><strong>Early recognition and elimination of oral habits.</strong></li>
                    <li><strong>Using space maintainers in case of early loss of deciduous teeth.</strong></li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase"> 
                    Gallery 1.1
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    10 Year Old presenting with Normal Skeletal and Normal Dental development
                </p>
                <div className="flex justify-center my-4">
                    <ImageGallery images={gallery1Images} />
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase"> 
                    Gallery 1.2
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Interceptive Orthodontics
                </p>
                <div className="flex justify-center my-4">
                    <ImageGallery images={gallery2Images} />
                </div>
            </div>

            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Another example of Interceptive Orthodontics is <strong>Serial Extractions</strong> introduced by Kjellgren in 1948. However, it is not used in its traditional protocol due to excessive extraction episodes – but <strong>Guided Eruption</strong> with extractions of C’s followed by D’s may be considered in special circumstances to prevent excessive crowding in permanent dentition.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase"> 
                    Aims of Orthodontic Treatment
                </h3>
                <ol className="list-decimal pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li className="marker:font-bold"> <strong>Achieve a functional and aesthetic occlusion by altering permanently the position of teeth.</strong></li>
                    <li className="marker:font-bold"> <strong>Intercept abnormal development of occlusion.</strong></li>
                    <li className="marker:font-bold"> <strong>Establish functional efficiency and structural balance.</strong></li>
                    <li className="marker:font-bold"> <strong>Eliminate traumatic bites.</strong></li>
                    <li className="marker:font-bold"> <strong>Align irregular teeth prior to bridge work or partial dentures (Adjunctive Treatment).</strong></li>
                    <li className="marker:font-bold"> <strong>Align prominent teeth which are more prone to trauma.</strong></li>
                </ol>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase"> 
                    Need for Orthodontic Treatment
                </h3>
                <ol className="list-decimal pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li className="marker:font-bold"> <strong>Improve aesthetics.</strong></li>
                    <li className="marker:font-bold"> <strong>Restoration of function.</strong></li>
                    <li className="marker:font-bold"> <strong>Reduce susceptibility of dental caries and periodontal involvement due to malocclusion.</strong></li>
                    <li className="marker:font-bold"> <strong>Aid in elimination of harmful habits.</strong></li>
                    <li className="marker:font-bold"> <strong>Adjunctive treatment prior to prosthetic intervention.</strong></li>
                    <li className="marker:font-bold"> <strong>Orthognathic cases as pre- and post-operative Orthodontics.</strong></li>
                    <li className="marker:font-bold"> <strong>Special needs in congenital deformities such as cleft lip and palate patients.</strong></li>
                    <li className="marker:font-bold"> <strong>“Handicapping Malocclusions” to improve the quality of life and social acceptability.</strong></li>
                </ol>
            </div>
        </SectionPage>
    );
}
