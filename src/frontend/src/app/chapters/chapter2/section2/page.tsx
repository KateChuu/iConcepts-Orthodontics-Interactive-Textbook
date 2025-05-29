import SectionPage from '@/components/sectionPage';
import ImageGallery from '@/components/ImageGallery';
import VideoPlayer from '@/components/videoPlayer';

const gallery2Images = [
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114813/IMG_2720-183_hdmjlm.jpg',
        caption: 'Removable appliance traditionally have acrylic fun designs and wire work in mixed dentition.'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114814/IMG_1831-185_zo25lk.jpg',
        caption: 'Removable appliance traditionally have acrylic fun designs and wire work in mixed dentition.'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114812/IMG_2506-187_frfxpe.jpg',
        caption: 'Fixed appliances labial metal.'
    }
]

export default function page() {
    return (
        <SectionPage
            title="Section 2: Treatment of Class II / 1 Malocclusion"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter2/section1"
            nextHref="/chapters/chapter2/section3"
            chapterHref="/chapters/chapter2"
        >

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                REMOVABLE APPLIANCES
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Removable appliances were used in the past now mostly CAT are used for:
            </p>
                <ul className="list-disc list-outside pl-5 mt-1 text-zinc-800 dark:text-zinc-100">
                    <li>Mild skeletal II with small ANB difference</li>
                    <li>No dental compensations</li>
                    <li>Young child patient interceptive to correct excessive OJ</li>
                    <li>Favorable edge-centroid relationship</li>
                    <li>Maxillary incisors are proclined</li>
                    <li>Canines are mesially angulated</li>
            </ul>
        </div>

        <div className="mb-8">
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                The best results are achieved where no extractions are carried out in the lower arch. 
                However, if crowding is severe, spontaneous alignment and space closure is seen with cases 
                in which lower 5s are extracted prior to the eruption of 7s, used to retract the upper labial segment to reduce 
                overjet and anterior bite planes help reduce the deep and incomplete bites.
            </p>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                With CAT predictions of algorithms, space with shells can be maintained for eruption dental units.
                Moreover, distalization can be locked to prevent future possible impaction of third molars.
            </p>
        </div>
        
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                FUNCTIONAL APPLIANCES
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                These are recommended in patients with large ANB differences with moderate to severe Class II skeletal pattern.
                Growing patients. Excessive overjet and deep/incomplete overbites.
            </p>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                One of the major utilities of the Functional Appliances is the correction of the Skeletal II pattern in growing children.
                A number of designs are available to choose from, and certain functional appliances can also be tailored to the needs of 
                the patient, e.g., Hybrid Appliances.
            </p>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Functional Appliances are recommended in males 12-14 years and females 10-12 years of age.
                Clark Twin Block (CTB) is considered to be the best Functional Appliance available due to ease of wearing by the 
                patient and relatively simple design to fabricate in the dental labs.
                Other functional appliances that can be used in Class II/1 are:
            </p>
            <ul className="list-disc list-outside pl-5 mt-1 text-zinc-800 dark:text-zinc-100">
                    <li>Medium Opening Activator (MOA)</li>
                    <li>Fränkel II</li>
                    <li>Bionators – Hunt Style Bionator</li>
                    <li>Bass Appliance</li>
                    <li>Clark Twin Block</li>
                    <li>Mandibular Advancement Device</li>
            </ul>
        </div>
        
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                FIXED APPLIANCES
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Recommended in Stage II after functional appliance stage of treatment for bodily tooth movement in finishing and 
                detailing and for adolescents/adults where skeletal camouflage is possible.
            </p>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Both Straight Wire Appliance (SWA) and Tip-Edge have found success in treatment of Class II / 1 cases. 
                However, it is considered that Tip-Edge produces better results in severe Class II /1 cases due to the use of 
                intra oral elastics, having a functional component associated with it. Usually extractions form an important part of 
                the Fixed appliance treatment. Currently custom made fixed appliances are considered ideal. 
                Forsus is the innovatioin. Now see the video Dr. Anka.
            </p>
        </div>
        
        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                ORTHOGNATHIC SURGERY
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                This is considered in adult patients where growth has stopped with severe skeletal II pattern where ANB is greater than 9.
                It is a prolonged treatment combining pre- and post-operative Orthodontics. High self-motivation is essential for 
                the success of Orthognathic treatment.
            </p>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Thus treatment of Class II/1 can range from deciduous dentition where supervision and pattern of growth can be assessed,
                to mixed dentition where removable appliances or functional appliances can be used, or finally with extraction cases,
                Fixed Appliance technique for pleasing stable final results.
            </p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                Gallery 2.3
            </h3>
            
            <VideoPlayer
                cloudName="difs4tswt"
                publicId="Screen_Recording_2024-09-16_at_4.31.58_AM-207_mocrwx"
                sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1745114829/Screen_Recording_2024-09-16_at_4.31.58_AM-207_mocrwx.mov"
                videoId="class_ii_1_gallery_2_3"
                caption="CAT Clear Aligner Therapy with locked positions in grey in lower buccal segments prevents future impactions for 8's. This patient has congenitally missing 35 45."
                />

            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                CAT Clear Aligenr Therapy with locked positions in grey in lower buccal segments prevents future impactions for 8&apos;s. This patient has congenitally missing 35 45.
            </p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase"> 
                Gallery 2.4
            </h3>            
            <div className="flex justify-center my-4">
                <ImageGallery images={gallery2Images} />
            </div>
        </div>

        </SectionPage>
    );
}

