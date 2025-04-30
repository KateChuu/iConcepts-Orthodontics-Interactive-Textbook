import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 3: Appliances"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter3/section2"
            nextHref="/chapters/chapter3/section4"
            chapterHref="/chapters/chapter3"
        >

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                FUNCTIONAL APPLIANCES
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Unfortunately, the success rate with functionals has not been as promising as 
                for Class III cases. The disappointing results are primarily because of two 
                reasons.Restraining mandibular growth is very difficultGrowth continues for a 
                longer period in the mandible.Hence, although they have been used in the 
                past extensively, have shown success with only limited cases
            </p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                PROTRACTION HEAD GEAR / FACE MASK
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                with mild skeletal III bases.
            </p>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                This too is a head gear, also known as reverse head gear as it takes support 
                from facial bones instead of the cranium. It has shown success in patients with 
                favorable skeletal features i.e.<br />Low SNA value where point A is to be brought 
                forward<br />Reduced lower face height, where rotating mandible downwards and 
                backwards is preferred, in order to  increase the face height<br />No dental 
                compensations are present<br />SNB is either normal or low<br />Peak growth has 
                not yet occurred
            </p>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Usually the face mask is prescribed to patients very early at about the age of 
                8 years and where ANB would be less than -2. The face mask utilizes anchorage 
                from the forehead and chin. It assists in forward movement of the maxilla through 
                anterior cross elastics, while restrains mandibular growth through the chin cup. 
                Some face mask designs use anchorage from the zygomatic bone as well. The face 
                mask can also be used in conjunction with URA and fixed appliances. It is often 
                good protocol to use the face mask with Rapid Maxillary Expansion (RME), where 
                maxilla is too narrow and protraction would lead to crossbite. MiniPlates Face 
                Mask in the past decade show greater success.
            </p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                FIXED APPLIANCES
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                When there is mild skeletal III base and camouflage is acceptable. Extractions 
                can be carried out if crowding is present. Typical extraction pattern is upper 
                second premolars and lower first premolars. Fixed appliances give good tooth 
                control with torque and final finishing and detailing. Recommended mostly in 
                adolescents and adult cases who are compliant and have great oral hygiene practices. 
            </p>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                ORTHOGNATHIC SURGERY
            </h3>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                When the Skeletal III base is too severe for Orthodontic camouflage alone, it is 
                best to wait until active growth period is over, and then consider the case for 
                Orthognathic surgery for best esthetic and functional results. A prudent Orthodontist 
                would never consider extractions, particularly in mandible in growing Class III case, 
                just incase later surgery would be required; because Orthodontic decompensation of the 
                lower arch becomes very difficult if previous extractions have taken place. Moreover, 
                the extraction pattern for an Orthognathic case is just the reverse of Orthodontic 
                camouflage treatment.In order to have a stable end result, positive overbite and 
                overjet are essential. Edge-to-edge incisor relationship can fall back and cause 
                relapse of the condition. 
            </p>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                Class III are perhaps the most challenging malocclusions to treat. 
            </p>
        </div>

        <div className="mb-8">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                De Clerck, H., Cevidanes, L., & Baccetti, T. (2010). Dentofacial effects of bone-anchored 
                maxillary protraction: a controlled study of consecutively treated Class III patients. 
                American journal of orthodontics and dentofacial orthopedics : official publication of 
                the American Association of Orthodontists, its constituent societies, and the American 
                Board of Orthodontics, 138(5), 577–581.{" "}
                <a
                    href="https://doi.org/10.1016/j.ajodo.2009.10.037"
                    className="text-blue-600 underline hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://doi.org/10.1016/j.ajodo.2009.10.037
                </a>
            </p>
        </div>

        

        </SectionPage>
    );
}
