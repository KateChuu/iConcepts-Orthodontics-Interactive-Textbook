import SectionPage from '@/components/sectionPage';
import ImageGallery from '@/components/ImageGallery'; 

const gallery1Images = [
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114780/BR_F_photo-62_caf1tz.jpg',
        caption: 'Front relaxed pose'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114781/BR_F_Smiling-64_pxylmw.jpg',
        caption: 'Front Smiling (Emotional Smile if possible) Smile analysis in this view'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114779/BR_Profile-66_rotvt7.jpg',
        caption: 'Full Profile Observe the Class I Skeletal profile'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114780/BR_3_Q_Profile_Smiling-68_krj0nb.jpg',
        caption: '3/4 Profile Smiling observe the retroclined upper incisor and Buccal Canine'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114780/BR_Occlusal_Front-70_i9snet.jpg',
        caption: 'Front in occlusion Intra Oral assess the OJ OB Centrelines and Crowding'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114781/BR_RtS-72_bsnkrr.jpg',
        caption: 'Rt side in occlusion observe the Class I Molar relationship (Oral Hygiene is poor White Spot Lesions on cervical margin of 16, 46)'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114780/BR_Left-74_thlrhe.jpg',
        caption: 'Left side observe Molar and premolar relationship'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114781/BR_UOccl-76_sejmto.jpg',
        caption: 'Upper Occlusal (Mirror view) Severe Crowding 13 is completely buccally displaced , narrow arch and retroclined upper incisors'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114783/BR_L_Occl-78_mgv5g0.jpg',
        caption: 'Lower arch severely crowded and distorted shape'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114779/BR_Casts-80_k46wlp.jpg',
        caption: 'Upper arch space analysis'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114782/OPG_BR_copy-82_wjoakt.jpg',
        caption: 'OPG for Pathology, Presence and position of crowns and roots'
    },
    {
        src: 'https://res.cloudinary.com/difs4tswt/image/upload/v1745114779/lateralCeph_BR_copy-84_mw8siy.jpg',
        caption: 'Lateral Ceph observe the Skeletal , Dental and Soft Tissues + CVMi'
    }
];


export default function Section6() {
    return (
        <SectionPage
            title="Section 6: Class I Malocclusion"
            subtitle="Published in 2024 · Views: 19892 · Average Reading Time: 15min"
            prevHref="/chapters/chapter1/section5"
            nextHref="/chapters/chapter1/video1"
            chapterHref="/chapters/chapter1"
        >
            
            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Definition
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    It is defined on the basis of the first permanent molar relationship i.e. mesio-buccal cusp of the upper first permanent molar lies in the mid-buccal groove 
                    of the lower first permanent molar (Angle’s Classification).
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    While the incisor classification is such that the lower incisal edge lies on or below the cingulum plateau of the palatal surface of the upper incisors.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Incidence
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    55–60% of the population is found to have Class I malocclusion (Todd & Dodd 1975).
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Clinical Features of Class I Malocclusion
                </h3>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li> <strong>Skeletal:</strong> Generally the Class I malocclusion will be found on a skeletal I base. However, mild Class II or Class III skeletal bases with dento-alveolar compensations are not rare to find. 
                    Overall the skeletal pattern is favourable.</li>
                    <li> <strong>Soft Tissues:</strong> The soft tissue profile is pleasing and lips, tongue and cheek pressures are well balanced.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Dental
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Malocclusion is usually caused by local dental factors alone. <strong>Crowding</strong> is the most common problem, 
                    which may be due to local factors or premature loss of deciduous units. <strong>Spacing</strong> can also occur, 
                    but is generally rare. Most common reasons being tooth-jaw size discrepancy, fleshy frenum, missing teeth, 
                    malformed teeth etc. <strong>Bimaxillary proclination</strong> is more a racial variant. 
                    Care should be taken to diagnose the exact cause. <strong>Vertical anomalies</strong> such as anterior openbites 
                    may also occur in Class I malocclusions, thus the Class I incisor relationship does not imply them. 
                    <strong>Transverse Anomalies</strong> commonly present with crossbites and scissors bite.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Facial Growth Pattern
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    The growth pattern for Class I subjects is usually favorable. Although, it must be borne in mind that vertical 
                    discrepancy such as an anterior openbite tends to get worse with further growth, 
                    as dento-alveolar compensation is already at its limits.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    TREATMENT OPTIONS
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Apart from functional appliances and Orthognathic surgery per se, the other 3 treatment modalities i.e.
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li> <strong>Clear Aligner Therapy </strong> </li>
                    <li> <strong>Fixed appliances </strong> </li>
                    <li> <strong>Removable appliances </strong> </li>
                </ul>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    are the most commonly applied treatment mechanics for Class I malocclusions. Various etiologic factors shall be discussed in detail.
                </p>
            </div>


            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Crowding
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    In a significant proportion of Class I cases, the only feature of malocclusion is crowding. 
                    Where dental crowding alone is responsible for malocclusion with no other local factor, such as crossbites etc., 
                    it may be possible to treat in limited number of cases without any appliance through timely extraction of teeth alone. 
                    Serial extraction was one such extraction protocol used extensively in the past, 
                    but has lost much application in present day Orthodontics as young patients are not subjected to repeated extractions routinely.
                </p>

                <h4 className="text-justify font-bold leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1 mt-2">
                    Extractions for Class I malocclusion
                </h4>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    In a crowded case, general guidelines for extractions are:<br />
                    If the space discrepancy is up to 4mm, it is usually resolved without extractions (except third molars).
                </p>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Discrepancy in the range of 5–9mm are best treated without extractions by:
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-2">
                    <li><strong>Arch expansion</strong></li>
                    <li><strong>Molar anchorage TAD (Temporary Anchorage Devices)</strong></li>
                    <li><strong>Enamel reduction IPR (InterProximal Reduction)</strong></li>
                </ul>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Patients with space discrepancy of 10mm or more almost always require premolar extractions with reinforced anchorage. 
                    Other extraction patterns are asymmetrical and single ectopic dental units. 
                    In certain crowded cases with premature loss of primary teeth, space maintainers may be required to ensure the space for permanent successor. 
                    However, such cases always require two-phase orthodontic treatment. 
                    Patients should be made aware of future full scope to make an informed decision.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Spacing
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    In Class I case with spacing, the decision has to be made whether to:
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li><strong>Open spaces and place prosthesis for missing dental units</strong> </li>
                    <li><strong>Close space with appliance therapy to reduce restorative cycle in future</strong> </li>
                </ul>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    If spacing is excessive, then it is best to close generalized spacing and concentrate on the space where a prosthesis such as a bridge, 
                    partial denture or acid etch bridge can be placed. 
                    The major problem is to maintain such prosthesis throughout life, especially in children who have a whole life ahead of them, 
                    affecting quality of life and the cost incurred with frequent replacements. 
                    To close spaces is perhaps the best option, but can only be done with spacing that is not too gross. 
                    However, aesthetics may be compromised e.g. when a missing lateral incisor space is closed with a more bulkier 
                    and yellow shaded canine tooth in the maxillary arch.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Bimaxillary Proclination
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Concomitant proclination of upper and lower labial dental units is usually racial i.e. common feature in Afro-Caribbean, Orientals, 
                    and Negroid population and is best left untreated. However, if treatment is required to improve facial aesthetics and reduce overjet 
                    or enhance lip competence, it is essential to assess each case on its own merits i.e. soft tissue like flaccid or everted lips or skeletal pattern. 
                    Usually, these cases are treated with extractions of premolars in crowded cases, 
                    but it is important to note that extractions should not be done only for incisor retraction, 
                    as long-term response is poor and risk of overjet returning and reopening the extraction space is always present. 
                    Best long-term stability is seen with joint Orthodontic and Orthognathic approach in severe skeletal cases.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    VERTICAL ANOMALIES
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    The most common vertical anomaly in Class I malocclusion is the Anterior Open Bite (AOB).
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    DEFINITION
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Condition where upper incisor crowns fail to overlap the incisal third of the lower incisor crowns when the mandible is brought into full occlusion (Mizrahi 1978).
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    ETIOLOGY
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    It is broadly divided into:
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li><strong>Genetic is due to inherent cant (tilt) of the maxillary plane or excessive slop, and increased vertical height due to mandibular plane.</strong></li>
                    <li><strong>Environmental due to habits such as digit sucking &amp; its more common.</strong></li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    ENVIRONMENTAL
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Environmental factors include prolonged habits, abnormal tongue function, trauma/pathology affecting condyle, neurological disturbances or due to iatrogenic cause such as extrusion of molars during treatment.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    CLASSIFICATION
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Anterior Open Bite (AOB) are classified as:
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li><strong>Skeletal</strong> </li>
                    <li><strong>Dental</strong> </li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    CLINICAL FEATURES OF SKELETAL AOB
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Extra orally the patient would present with long face, incompetent lips, steep Frankfort Mandibular Plane Angle (FMPA), marked ante-gonial notch and with reduced upper face height to lower face height ratio. Intra-orally there could be mild crowding and upright incisors. In very severe conditions it may only occlude on 7s. Mouth breathing is common.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    CLINICAL FEATURES OF DENTAL AOB
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Extra orally there will be no unusual or striking features. Intra-orally the dental arches will have features related to the habit e.g. thumb sucking may proclined upper incisors and depressed and retrocline mandibular incisors. Usually, AOB is asymmetrical, maxillary arch will be very narrow and a typical fish mouth appearance is present.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    TREATMENT OPTIONS
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Dental AOB treatment is within the scope of Orthodontic fixed appliances. However, the habit must come to an end with a habit-breaking appliance if necessary. The latest technique has been the use of magnets in bite blocks. In severe cases and skeletal AOB Orthodontic and Orthognathic approaches are required to provide a successful stable result. Images can be viewed in Gallery 1.2 scroll above.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    TRANSVERSE ANOMALIES
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    In Class I malocclusion crossbites or scissors bite may be present. Crossbites are usually managed with maxillary expansion and can be treated by:
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li><strong>URA with midline expansion screw</strong></li>
                    <li><strong>Quad Helix</strong></li>
                    <li><strong>RME (Rapid Maxillary Expansion)</strong></li>
                    <li><strong>TADs integrated expansion is efficient and predictable</strong></li>
                </ul>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    URA is especially indicated where occlusal interference are present as bite blocks/planes can be fabricated on them, unlike Quad Helix or RME, which are best used in conjunction with Fixed appliances. Scissors bites can be treated with expansion or contraction of archwires in fixed appliances. However, if bilateral or functionally stable, the crossbite should be left untreated (Harradine and Birnie 1998).
                </p>
            </div>


            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    TREATMENT PLANNING PREZI
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Interactive Prezi to view all elements related to Initial Exam and investigations for Orthodontic patient.
                </p>
                <img 
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114794/Screenshot_2024-09-14_at_4.16.24_PM-177_ilqlzq.png" 
                    alt="Prezi Thumbnail" 
                    className="my-4 w-1/2 mx-auto" 
                />
                <p className="text-base leading-relaxed text-center text-red-500">
                    <a
                        href="https://prezi.com/view/hPL2WfYULE86wMYXe7c9/"
                        target="_blank"
                        className="text-red-500"
                    >
                        Treatment Planning on Prezi
                    </a>
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Images
                </h3>
                <div className="flex justify-center my-4">
                    <img
                        src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114784/Orthodontics_with_OPG_1_qvkiy7.jpg"
                        alt="OPG for full mouth dental age assessment"
                        className="w-1/2 mx-auto"
                    />
                </div>
                <div>
                    <img 
                        src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114783/Orthodontics_with_OPG_2_rjc39p.jpg" 
                        alt="Lateral Ceph" 
                        className="w-1/2 mx-auto"
                    />
                </div>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Standard investigations for Orthodontics with OPG for full mouth dental age assessment and Lateral Ceph provides the important data related to skeletal dental and soft tissues.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Crowding
                </h3>
                <div className="flex justify-center my-4">
                    <ImageGallery images={gallery1Images} />
                </div>
            </div>


            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Movie 1.1
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Moment to Enjoy AI Majaz WaterFront Sharjah UAE
                </p>
                <video
                    className="w-full border border-gray-400 flex items-center object-cover justify-center text-sm text-gray-500 italic"
                    controls
                >
                    <source
                        src="https://res.cloudinary.com/difs4tswt/video/upload/v1745114806/AlMajazSharjah-60_hblm7d.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/*
            <video
                className="w-full h-[300px] mb-4 border border-gray-400"
                controls
            >
                <source
                    src="https://res.cloudinary.com/difs4tswt/video/upload/v1745114806/AlMajazSharjah-60_hblm7d.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            */}

        </SectionPage>

    );
}