import SectionPage from '@/components/sectionPage';
import ImageGallery from '@/components/ImageGallery';
import { extraOralIntraOralImages, interceptiveApplianceImages } from './section4Images.ts';

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
                    <ImageGallery images={extraOralIntraOralImages} />
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
                    <ImageGallery images={interceptiveApplianceImages} />
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
