import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 2: Treatments"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter3/section1"
            nextHref="/chapters/chapter3/section3"
            chapterHref="/chapters/chapter3"
        >
        
            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    FACIAL GROWTH
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Facial Growth <br />
                    This tends to be unfavorable in Class III cases due to backward growth 
                    rotations and increased vertical growth. Also as mandibular growth may 
                    continue quite late, the full blown Class III pattern may not manifest 
                    until age 14-16 years.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    TREATMENT OPTIONS
                </h3>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li><strong>Clear Aligner Therapy</strong></li>
                    <li><strong>Functional appliances</strong></li>
                    <li><strong>Fixed appliances</strong></li>
                    <li><strong>Orthognathic Surgery</strong></li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    TREATMENT AIMS
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    The aims for Class III malocclusions are relief of any crowding with level 
                    and alignment of the arches. Correct the reverse overjet and produce positive 
                    overbite. Finally to achieve correct buccal segment relationships.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    CLEAR ALIGNER THERAPY
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    This has limited scope in the treatment of Class III cases. It is usually 
                    employed in mixed dentition and when the skeletal pattern is very mild III 
                    or one or two incisors are in localized crossbites with a positive overbite. 
                    Usually such patients can achieve edge-to-edge in centric relation. Also the 
                    case should not have dental compensations. 
                </p>
            </div>        

        </SectionPage>
    );
}
