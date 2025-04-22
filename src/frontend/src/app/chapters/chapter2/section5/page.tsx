import SectionPage from '@/components/sectionPage';
import ImageGallery from '@/components/ImageGallery';

const gallery1Images = [
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114811/pasted-image-209_uz7ifa.jpg',
        caption: 'Functional Appliance'
    }
]

const gallery2Images = [
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114813/pasted-image-small-212_mcncz4.png',
        caption: 'Fixed appliances labial metal.'
    }
]

export default function page() {
    return (
        <SectionPage
            title="Section 5: Appliances"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter2/section4"
            nextHref="/chapters/chapter3/section1"
            chapterHref="/chapters/chapter2"
        >
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                FUNCTIONAL APPLIANCES
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                As Class II / 2 have very reduced lower face heights, functional appliances that help open angle are preferred. 
                Clark Twin Block, Bass appliance, Fixed Functionals etc. can also be used. Modified functional appliances 
                e.g. with cantilever springs behind the upper incisors to procline the maxillary incisors and correct the sagittal 
                relationship simultaneously can also be used. Mandibular Advancement Devices are being integrated with CADCAM and 
                CAT. The success with Functional Appliances is utilizing the golden period of growth and development which is best 
                assessed with CVMI (Cervical Vertebral Maturation Index).
            </p>
        </div>
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                FIXED APPLIANCES
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Preferable modality in adolescents and adults where ANB difference is small, or where dental camouflage can be utilized. 
                It is best to avoid extractions in Class II / 2 cases as:
            </p>
            <ul className="list-disc list-outside pl-5 mt-1 text-zinc-800 dark:text-zinc-100">
                <li>Hidden Space becomes available on proclining 1/1</li>
                <li>Space closure is extremely difficult in low MMP cases</li>
            </ul>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                However, if extractions are needed for severe crowding, it is best to extract second premolars thus minimizing lingual 
                dumping of the lower labial segment. Fixed appliances give excellent bodily movement, and provide good torque control 
                needed so much for upper incisors in Class II / 2 cases. Torque is essential to achieve for long term stability.
            </p>
        </div>
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                ORTHOGNATHIC SURGERY
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                It is advised to patients who are keen to correct Class II / 2, particularly when ANB difference is greater than 9 
                and the patient is an adult.
            </p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                RETENTION AND STABILITY
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Although this feature needs due consideration in all Orthodontic treatment cases, but more so for rotated maxillary 
                laterals a typical feature of Class II / 2. Precision should be carried out routinely for such cases at the end of 
                treatment, along with a period of fixed retention.
            </p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                Gallery 2.5
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Functional Appliance
            </p>
            <img 
                src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114811/pasted-image-209_uz7ifa.jpg"
                alt="Functional Appliance" 
                className="my-4 w-1/2 mx-auto" 
            />
        </div>

        <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Treatment Time: 10 months - Patient at ideal CVMI
                </h3>
                <div className="flex justify-center my-4">
                    <img
                        src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114813/pasted-image-small-212_mcncz4.png"
                        alt="Treatment Time 10 months"
                        className="w-1/2 mx-auto"
                    />
                </div>
            </div>

            
        </SectionPage>
    );
}

