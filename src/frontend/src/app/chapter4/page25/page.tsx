import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page25() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Main Content Section */}
      <div className="flex flex-1 w-full gap-4">
        {/* Left Container */}
        <div className="flex-1 flex flex-col pr-4 gap-2">
          <h2 className="font-sans text-xl md:text-2xl font-bold mb-2">
            FUNCTIONAL APPLIANCES
          </h2>

          {/* Definition Section */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
            Definition
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            Functional appliances work by utilizing functional forces of muscles
            of mastication and facial expression, to bring about favorable
            changes in skeletal and dental relationship mostly in
            antero-posterior dimension, along with vertical and transverse
            corrections as well. Majority are removable, but fixed functional
            appliances are also available.
          </p>

          {/* History Section */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 text-gray-600">
            History
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            The first inclined plane was used in the 19th century. Robin&apos;s
            Monobloc was developed in 1902 to prevent glossoptosis in neonates
            suffering from Pierre Robin Syndrome. This appliance was modified by
            Andresen in 1930s, and was used for the first time on his very own
            daughter. She had a mild skeletal II base. Andresen provided her
            with what was later termed as Andresen or Norwegian appliance. With
            night time use only when she went off to summer camp as instructed
            by her Dad, there was a marked improvement in the profile when she
            returned. Thus, this opened a new horizon of improving profiles and
            occlusions through re-education of orofacial musculature. A large
            number of functional appliances were developed thereafter, usually
            named after the originator.
          </p>

          {/* Types Section */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600">
            DIFFERENT TYPES OF FUNCTIONAL APPLIANCES
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            A large number of functional appliances are available to the
            Orthodontist today. The choice is largely a personal one depending
            upon the preference and familiarity of the specialist, as the mode
            of action of all is very similar apart from a few special
            circumstances. Other factors determining the choice of a functional
            appliance are laboratory facilities, economic constraints and degree
            of compliance of the patient. The following is a list of different
            functional appliances:
          </p>
          <ul className="list-disc pl-5 mb-2 text-sm md:text-base leading-relaxed">
            <ul className="list-disc pl-5 mb-2">
              <li>Clark Twin Block</li>
              <li>Andresen</li>
              <li>Bionator - Hunt Style Bionator</li>
              <li>Harvold</li>
              <li>Fränkel I , II , III</li>
              <li>Bimler</li>
              <li>Lip Bumper</li>
              <li>Minator</li>
              <li>Bass Appliance</li>
              <li>Medium Opening Activator (MOA)</li>
              <li>Herbst</li>
            </ul>
          </ul>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex flex-col pl-4 gap-2">
          <ul className="list-disc pl-5 mb-2 text-sm md:text-base leading-relaxed">
            <ul className="list-disc pl-5 mb-2">
              <li>Jasper Jumper</li>
              <li>Buccal or lingual shields and lip pads</li>
            </ul>
          </ul>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            The last two are fixed functional appliances.
          </p>

          {/* Biomechanics Section */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600">
            BIOMECHANICS
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            The functional appliances produce dentoalveolar and skeletal
            modification along with guiding eruption of the dentition and
            improving the soft tissue profile. It is known that the overjet
            reduction in Class II cases occurs primarily due to tipping of
            teeth. The molar relationship is corrected from Class II to Class I
            through guidance of eruption by specific acrylic trimming e.g. in
            Andresen appliance. Perhaps the most important contribution is the
            skeletal modification, which is increased growth rate of the
            retrognathic mandible. Marschner and Harris (1966) saw an increase
            of 1.5mm/year in the mandibular growth in 9-10 year old and 1mm/year
            increase in 10-12 year olds. The mandibular direction of growth can
            be altered principally in the vertical direction. Hence, it is
            particularly beneficial for short faces. Restraint has been found
            difficult and unsuccessful in Class III increased mandibular size
            cases. In maxilla on the other hand restraint is easier to produce,
            but to promote maxillary growth has been unsuccessful. Hence,
            functional appliances are ideal of Class II skeletal malocclusions,
            but not for Class III skeletal cases.
          </p>

          {/* Classification Section */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600">
            CLASSIFICATION
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            Functional appliance can be classified as:
          </p>
          <ul className="list-disc pl-5 mb-2 text-sm md:text-base leading-relaxed text-justify">
            <ul className="list-disc pl-5 mb-2">
              <li>
                Myotonic: where large mandibular opening of 8-10mm of working
                bite e.g. Harvold appliance.
              </li>
              <li>
                Myodynamic: medium mandibular opening of less than 5mm working
                bite e.g. Andresen appliance.
              </li>
              <li>
                Passive Tooth Borne: with no retentive component e.g. Andresen
                appliance, Bionators.
              </li>
              <li>
                Active Tooth Borne: with good retention e.g. Clark Twin Block.
              </li>
              <li>
                Tissue Borne: being in place entirely by tissue pressure e.g.
                Frankel.
              </li>
              <li>
                Hybrid Appliance: i.e. component approach as proposed by Vig &
                Vig (1986).
              </li>
            </ul>
          </ul>

          {/* Components Section */}
          <h3 className="font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600">
            COMPONENTS
          </h3>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2">
            The different components of functional appliances are:
          </p>
          <ul className="list-disc pl-5 mb-2 text-sm md:text-base leading-relaxed">
            <ul className="list-disc pl-5 mb-2">
              <li>Construction or Working Bite</li>
              <li>Bite planes or bite blocks</li>
              <li>Body of acrylic or wire</li>
            </ul>
          </ul>
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter4/page24" />
      <NavigationButton direction="right" target="/chapter4/page26" />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={25} />
    </div>
  );
}
