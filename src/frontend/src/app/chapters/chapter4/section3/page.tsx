import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 3: Clark Twin Block Example"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter4/section2"
            nextHref="/chapters/chapter4/section4"
            chapterHref="/chapters/chapter4"
        >
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                Clinical Management
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Both upper and lower twin parts of CTB are fitted at the same appointment. If the child finds it a mouthful at first, give a
                training period of 2 weeks where the patient is encouraged to wear the functional appliance at home, during quiet homework or while
                watching the television.
            </p>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                One of the greatest esthetic advantages CTB has, it provides an immediate esthetic result by giving a pleasing
                profile, and the patient prefers to wear it right from the start. Eating with the appliance in situ helps to correct the jaw
                relationship faster, and every effort should be made to encourage the patient to eat with the appliance. CTB is the only appliance where masticatory forces can be utilized.
            </p>
        </div>

        <div className="mb-8">
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Regular activation of the expansion screw helps prevent crossbite from developing. A ¼ turn every month on a review visit by the
                Orthodontist is ideal. As soon as patient demonstrates the ability to posture the mandible forward from working position - reactivation
                is recommended for complete correction with colored cold cure acrylic to the inclined planes of the lower twin. The upper block
                and inclined plane is separated with Vaseline. This can be either done at the chair side or preferable to send it once again to the lab.
            </p>
        </div>

        <div className="mb-8">
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">              
                Well into the treatment, it is advisable to progressively reduce the blocks to prevent posterior openbites - so common with CTB. The
                occlusion settles well. If second stage of treatment with fixed appliances is required it is usually fitted at the end of the
                treatment with CTB. If head gear is needed it can be continued with fixed appliances. However, if CTB is the only modality of treatment,
                it is best to use the CTB as passive appliance at night time only, for 12 months as retention regime. This will avoid relapse of overjet which occurs in some cases.
            </p>
        </div>

        <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Gallery 4.2
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Clark Twin Block in 9 year old Full Treatment
                </p>
                <div className="flex justify-center my-4">
                    <img
                        src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114943/3-AC-initial_mtydpu.png"
                        alt="Clark Twin Block in 9 year old Full Treatment"
                        className="w-1/2 mx-auto"
                    />
                </div>
                <p className="text-sm italic text-zinc-500 mt-2 text-center">
                    Initial Pre-treatment early protocol patient teased at school
                </p>
        </div>

        <div className="mb-8">
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">              
                The author finds CTB the most effective functional appliance and recommends it for majority of Class II cases.The success is related
                to the ideal time of commencement that is in sync with the CVMI stages 3-4 (Baccetti 2010).
            </p>
        </div>

        <div className="mb-8">
                <div className="flex justify-center my-4">
                    <img
                        src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114941/CVMi-3-4_silytw.jpg"
                        alt="Baccetti 2010"
                        className="w-1/2 mx-auto"
                    />
                </div>
                <p className="text-sm italic text-zinc-500 mt-2 text-center">
                    Cervical Vertebrae Maturation Index (CVMI) proposed by Baccetti et al. 1-4 and the region of the vertebrae as seen in the initial lateral teleradiograph
                </p>
        </div>

        </SectionPage>
    );
}

