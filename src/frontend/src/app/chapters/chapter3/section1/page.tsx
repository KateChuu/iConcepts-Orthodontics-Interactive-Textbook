import SectionPage from '@/components/sectionPage';
import ImageGallery from '@/components/ImageGallery';

const galleryImages = [
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114847/IMG_8015-94_o7tbmn.jpg',
        caption: 'Class III Mechanics on MBT System with Class III elastics also correction of upper midline with undertie and powerchain'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114845/IMG_8016-96_t4ljhs.jpg',
        caption: 'Class III Elastic vector and undertie maxillary teeth'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114846/IMG_8017-98_gyfy7g.jpg',
        caption: 'Left side Class III elastic with maxillary teeth powerchain'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114846/IMG_8018-100_mrkchz.jpg',
        caption: 'Maxillary occlusal view mirror image'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114845/IMG_8019-102_u0dyl1.jpg',
        caption: 'Class III Mechanics with MBT prescription Class III elastics Differential correction of upper midline with undertie and powerchain Mandibular mirror image'
    },
];

export default function page() {
    return (
        <SectionPage
            title="Section 1: An Introduction to Class II Malocclusion"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter3/intro"
            nextHref="/chapters/chapter3/section2"
            chapterHref="/chapters/chapter3"
        >
            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    CLASS III MALOCCLUSIONS
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Mesio-buccal cusp of first permanent molar is at least one cusp width distal to the lower first permanent molar. Incisor relationship is such that lower incisors edges lie anterior to the cingulum plateau, overjet is reduced or reversed.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    INCIDENCE
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    It is said to occur in 1% of American population, 3% in Japanese and 5% in British population (Todd & Dodd 1975).
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    ETIOLOGY
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    It is primarily due to genetics with a dominant skeletal III pattern.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    CLINICAL FEATURES - SKELETAL
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Usually a Skeletal Class III base relationship is present. The cranial base angle is acute, hence the forward positioning of the mandible. 73% of the cases have large mandibles, the rest have small maxilla or a combination of both. At times the maxilla is usually short, small and narrow relative to the mandible. The mandible tends to be broad and thus the greater incidence of crossbites.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    CLINICAL FEATURES - SOFT TISSUES
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Soft tissues per se are not involved in the etiology of Class III malocclusion, but lips do play a role in dento-alveolar decompensation. Lower lip is usually full and pendulous.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    CLINICAL FEATURES - DENTAL
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    There is usually a Class III molar relationship (full unit) tendency towards a complete reverse overjet (anterior crossbite) reduced overbite or AOB may also exist. Incisors compensate for skeletal base disharmony by proclination of maxillary incisors and retroclination of mandibular incisors. Maxilla may be crowded, while it is unlikely to have crowding in the mandible. Whenever crossbites exist, it is important to assess displacement / deviations. Most common in Class III is the anterior displacement in order to obtain a posterior functional occlusion which is not possible with edge-to-edge incisor contact. Another cause of displacement could be unsatisfactory transverse buccal segment relationship.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    GALLERY 3.1
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Class III Fixed Appliance Treatment
                </p>

                {/* Image Gallery 3.1 */}
                
                <div className="flex justify-center my-4">
                    <ImageGallery images={galleryImages} />
                </div>
                
            </div>


        </SectionPage>
    );
}
