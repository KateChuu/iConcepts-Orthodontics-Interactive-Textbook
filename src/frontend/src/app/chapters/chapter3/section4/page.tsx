import SectionPage from '@/components/sectionPage';
import ImageGallery from '@/components/ImageGallery';

const gallery1Images = [
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114849/IMG_6078-104_lwtkyw.jpg',
        caption: 'Localized 41 labially displaced on a Skeletal Class III pattern'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114850/IMG_6079-106_rdav4z.jpg',
        caption: 'Severe crowding locked out maxillary canine right side'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114850/IMG_6081-108_jjb8so.jpg',
        caption: 'Left side maxillary canine space deficient, prolonged retention lower deciduous molars'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114853/IMG_6082-110_fdzrpq.jpg',
        caption: 'Occlusal view maxillary arch mirror image'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114854/IMG_6083-112_avczqn.jpg',
        caption: 'Severe crowding mandibular arch'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114851/OPG_Pretreatment_MCaole-114_dkuzrv.jpg',
        caption: 'OPG observe Pathology, Position and Presence of Dental units'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114854/mary_Cole-116_n8prnb.jpg',
        caption: 'Lateral Cephalometric observe the Skeletal Pattern and CVMi'
    },
];

const gallery2Images = [
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114852/IMG_6403-118_goltyn.jpg',
        caption: 'Extraction of Lower incisor'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114857/IMG_6404-120_pcqddr.jpg',
        caption: 'Compression coil for creating space 13 eruption'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114856/IMG_6405-122_obdhtp.jpg',
        caption: 'Compression coil left side for 23 eruption'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114855/IMG_6406-124_rlymzk.jpg',
        caption: 'TPA to prevent mesial movement of molars Anchorage Control'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114854/IMG_6407-126_evt5r9.jpg',
        caption: 'Lingual arch anchorage control for erupting premolars however needs to be removed soon after alignment to allow use of Class III elastic'
    },
];

export default function page() {
    return (
        <SectionPage
            title="Section 4: Clinical Examples"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter3/section3"
            nextHref="/chapters/chapter3/section5"
            chapterHref="/chapters/chapter3"
        >
        
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                GALLERY 3.2
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Clinical Case: 12.4 year old female
            </p>
            
            <div className="flex justify-center my-4">
                <ImageGallery images={gallery1Images} />
            </div>

        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                GALLERY 3.3
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Fixed Appliance Treatment Case in 3.2
            </p>

            <div className="flex justify-center my-4">
                <ImageGallery images={gallery2Images} />
            </div>

        </div>


        </SectionPage>
    );
}
