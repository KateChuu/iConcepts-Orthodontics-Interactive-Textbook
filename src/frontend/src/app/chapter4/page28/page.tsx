import Image from "next/image";
import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page28() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Main Content Section */}
      <div className="flex flex-1 w-full gap-4">
        {/* Left Container */}
        <div className="flex-1 flex flex-col pr-4 gap-2">
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            The author finds CTB the most effective functional appliance and
            recommends it for majority of Class II cases.The success is related
            to the ideal time of commencement that is in sync with the CVMI
            stages 3-4 (Baccetti 2010).
          </p>

          <div className="flex justify-center items-center">
            <Image
              src="/chapter4/page28/CVMi-3-4.jpg"
              alt="CVMi 3-4 Critical for Success"
              width={400}
              height={400}
            />
          </div>

          <p className="font-sans text-sm md:text-base leading-relaxed mt-2 mb-2 text-gray-600 text-center">
            Cervical Vertebrae Maturation Index (CVMI) proposed by Baccetti et
            al. 14 and the region of the vertebrae as seen in the initial
            lateral teleradiograph
          </p>

          {/* Indication Section */}
          <h3 className="font-sans text-base md:text-lg font-bold text-gray-600">
            INDICATIONS OF FUNCTIONAL APPLIANCES
          </h3>

          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            Growing patients only in order to utilize growth potential. In
            patients who are motivated to correct the malocclusion. Classic Case
            where functional appliances are used:
          </p>

          <ul className="list-disc pl-5 mb-2 text-sm md:text-base leading-relaxed">
            <ul className="list-disc pl-5 mb-2">
              <li>Uncrowded arches</li>
              <li>Well aligned Class II / 1</li>
              <li>Mild to moderate skeletal II base</li>
              <li>Normal or low Maxillary-Mandibular Plane angle</li>
              <li>
                Class II / 2 cases which are first converted to Class II / 1
              </li>
            </ul>
          </ul>

          {/* Contra-Indication Section */}
          <h3 className="font-sans text-base md:text-lg font-bold text-gray-600">
            CONTRA-INDICATIONS FOR FUNCTIONAL APPLIANCES
          </h3>

          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            Non-growing patients. Try to avoid in:
          </p>

          <ul className="list-disc pl-5 mb-2 text-sm md:text-base leading-relaxed">
            <ul className="list-disc pl-5 mb-2">
              <li>
                High angle cases with backward mandibular growth rotations
              </li>
              <li>Anterior Openbite cases</li>
              <li>Cases with proclined lower incisors</li>
            </ul>
          </ul>

          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify italic">
            Successful functional appliance treatment can produce beautiful
            profiles and smiles.
          </p>

          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify italic">
            Following links lead to interactive learning experience:
          </p>

          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify italic">
            <a
              href="https://prezi.com/pxkw_tbmyodl/functional-orthopaedic-appliances/?utm_campaign=share&utm_medium=copy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              Prezi Functional Orthopedic Appliances (FOA)
            </a>
            <br />
            <a
              href="https://prezi.com/view/gk10GBMEdxbROB7hY33Y/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              Functional Orthopaedic Appliances
            </a>
            <br />
            <a
              href="https://prezi.com/bfc-j5jqgfva/orofacial-muscles-applied/?utm_campaign=share&utm_medium=copy&rc=ex0share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              OroFacial Muscles Applied Orthodontics
            </a>
          </p>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex flex-col pl-4 gap-2 items-center">
          <iframe
            src="https://unimelb.h5p.com/content/1291914114391997729/embed"
            aria-label="Removable Orthodontic"
            width="480"
            height="700"
            allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
          ></iframe>

          <p className="font-sans text-sm md:text-base leading-relaxed mt-2 mb-2 text-gray-600">
            Bidjan, D., Sallmann, R., Eliades, T., & Papageorgiou, S. N. (2020).
            Orthopedic Treatment for Class II Malocclusion with Functional
            Appliances and Its Effect on Upper Airways: A Systematic Review with
            Meta-Analysis.
            <em> Journal of clinical medicine</em>, 9(12), 3806.
            <a
              href="https://doi.org/10.3390/jcm9123806"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              https://doi.org/10.3390/jcm9123806
            </a>
          </p>

          <div className="flex justify-center items-center">
            <Image
              src="/chapter4/page28/J-Clin.png"
              alt="Contour-enhanced forest plot for the effect of functional appliances on oropharynx volume."
              width={500}
              height={500}
            />
          </div>

          <p className="font-sans text-sm md:text-base leading-relaxed mt-2 mb-2 text-gray-600 text-center">
            Contour-enhanced forest plot for the effect of functional appliances
            on oropharynx volume
          </p>
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter4/page27" />
      <NavigationButton direction="right" target="/chapter4/page29" />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={28} />
    </div>
  );
}
