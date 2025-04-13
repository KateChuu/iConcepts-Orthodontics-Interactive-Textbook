import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page21() {
  return (
    <div className="h-auto p-12 flex flex-col overflow-auto">
      {/* Container for Left, Middle, and Right Sections */}
      <div className="flex w-full h-full">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-2 pr-4">

          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            Facial Growth <br />
            This tends to be unfavorable in Class III cases due to backward growth 
            rotations and increased vertical growth. Also as mandibular growth may 
            continue quite late, the full blown Class III pattern may not manifest 
            until age 14-16 years.
          </p>
          
          <h3 className="font-sans text-base md:text-xl font-bold mt-4 -mb-3 text-gray-600">
            Treatment Options
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            Clear Aligner Therapy<br />
            Functional appliances<br />
            Fixed appliances<br />
            Orthognathic Surgery
          </p>

          <h3 className="font-sans text-base md:text-xl font-bold mt-4 -mb-3 text-gray-600">
            Treatment Aims
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            The aims for Class III malocclusions are relief of any crowding with level 
            and alignment of the arches. Correct the reverse overjet and produce positive 
            overbite. Finally to achieve correct buccal segment relationships.
          </p>

          <h3 className="font-sans text-base md:text-xl font-bold -mb-3 text-gray-600">
            CLEAR ALIGNER THERAPY
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            This has limited scope in the treatment of Class III cases. It is usually 
            employed in mixed dentition and when the skeletal pattern is very mild III 
            or one or two incisors are in localized crossbites with a positive overbite. 
            Usually such patients can achieve edge-to-edge in centric relation. Also the 
            case should not have dental compensations. 
          </p>

          <h3 className="font-sans text-base md:text-xl font-bold mt-4 -mb-3 text-gray-600">
            FUNCTIONAL APPLIANCES
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            Unfortunately, the success rate with functionals has not been as promising as 
            for Class III cases. The disappointing results are primarily because of two 
            reasons.Restraining mandibular growth is very difficultGrowth continues for a 
            longer period in the mandible.Hence, although they have been used in the 
            past extensively, have shown success with only limited cases
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex-1 flex flex-col gap-2 px-4">
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            with mild skeletal III bases.
          </p>

          <h3 className="font-sans text-base md:text-xl font-bold mt-4 -mb-3 text-gray-600">
            Protraction Head Gear / Face Mask
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            This too is a head gear, also known as reverse head gear as it takes support 
            from facial bones instead of the cranium. It has shown success in patients with 
            favorable skeletal features i.e.<br />Low SNA value where point A is to be brought 
            forward<br />Reduced lower face height, where rotating mandible downwards and 
            backwards is preferred, in order to  increase the face height<br />No dental 
            compensations are present<br />SNB is either normal or low<br />Peak growth has 
            not yet occurred
          </p>
         
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
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

          <h3 className="font-sans text-base md:text-xl font-bold mt-4 -mb-3 text-gray-600">
            FIXED APPLIANCES
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            When there is mild skeletal III base and camouflage is acceptable. Extractions 
            can be carried out if crowding is present. Typical extraction pattern is upper 
            second premolars and lower first premolars. Fixed appliances give good tooth 
            control with torque and final finishing and detailing. Recommended mostly in 
            adolescents and adult cases who are compliant and have great oral hygiene practices. 
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-2 pl-4">
          <h3 className="font-sans text-base md:text-xl font-bold mt-4 -mb-3 text-gray-600">
            ORTHOGNATHIC SURGERY
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
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

          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            Class III are perhaps the most challenging malocclusions to treat. 
          </p>

          <br />
          <p className="font-sans text-sm md:text-lg leading-relaxed mb-2">
            De Clerck, H., Cevidanes, L., & Baccetti, T. (2010). Dentofacial effects of bone-anchored 
            maxillary protraction: a controlled study of consecutively treated Class III patients. 
            American journal of orthodontics and dentofacial orthopedics : official publication of 
            the American Association of Orthodontists, its constituent societies, and the American 
            Board of Orthodontics, 138(5), 577–581. 
            <a 
                href="https://doi.org/10.1016/j.ajodo.2009.10.037" 
                className="text-red-500 underline"
                target="_blank" 
                rel="noopener noreferrer"
            >
                https://doi.org/10.1016/j.ajodo.2009.10.037
            </a>
          </p>
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter3/page20" />
      <NavigationButton direction="right" target="/chapter3/page22" />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={21} />
    </div>
  );
}