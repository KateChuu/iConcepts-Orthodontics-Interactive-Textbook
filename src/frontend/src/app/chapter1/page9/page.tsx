/** @format */

'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../../components/Footer';
import PageNumber from '../../../components/PageNumber';
import NavigationButton from '../../../components/NavigationButton';

const Page9 = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      {/* Main Content Section */}
      <div className='flex w-full h-full'>
        {/* Left Container */}
        <div className='flex-1 flex flex-col gap-2 pr-4'>
          {/* Vertical Anomalies Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-1 text-gray-600'>
            Vertical Anomalies
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            The most common vertical anomaly in Class I malocclusion is the
            Anterior Open Bite (AOB).
          </p>

          {/* Definition Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-1 text-gray-600'>
            Definition
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            Condition where upper incisor crowns fail to overlap the incisal
            third of the lower incisor crowns when the mandible is brought into
            full occlusion (Mizrahi 1978).
          </p>

          {/* Etiology Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-1 text-gray-600'>
            Etiology
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            It is broadly divided into:
          </p>
          <ul className='list-disc pl-5 text-sm md:text-base leading-relaxed'>
            <li>
              Genetic is due to inherent cant (tilt) of the maxillary plane or
              excessive slop, and increased vertical height due to mandibular
              plane.
            </li>
            <li>
              Environmental due to habits such as digit sucking & its more
              common.
            </li>
          </ul>

          {/* Environmental Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-1 text-gray-600'>
            Environmental
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            Environmental factors include prolonged habits, abnormal tongue
            function, trauma/pathology affecting condyle, neurological
            disturbances or due to iatrogenic cause such as extrusion of molars
            during treatment.
          </p>

          {/* Classification Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-1 text-gray-600'>
            Classification
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            Anterior Open Bite (AOB) are classified as:
          </p>
          <ul className='list-disc pl-5 text-sm md:text-base leading-relaxed'>
            <li>Skeletal</li>
            <li>Dental</li>
          </ul>

          {/* Clinical Features of Skeletal AOB Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-1 text-gray-600'>
            Clinical features of Skeletal AOB
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            Extra orally the patient would present with long face, incompetent
            lips, steep Frankfort Mandibular Plane Angle (FMPA), marked
            ante-gonial notch and with reduced upper face height to lower face
            height ratio. Intra-orally there could be mild crowding and upright
            incisors. In very severe conditions it may only occlude on 7s. Mouth
            breathing is common.
          </p>

          {/* Clinical Features of Dental AOB Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-1 text-gray-600'>
            Clinical features of Dental AOB
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            Extra orally there will be no unusual or striking features.
            Intra-orally the dental arches will have features related to the
            habit e.g. thumb sucking may proclined upper incisors and depressed
            and retrocline mandibular incisors. Usually, AOB is asymmetrical,
            maxillary arch will be very narrow and a typical fish mouth
            appearance is present.
          </p>
        </div>

        {/* Right Container */}
        <div className='flex-1 flex flex-col gap-2 pr-4'>
          {/* Treatment Options Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-1 text-gray-600'>
            Treatment Options
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            Dental AOB treatment is within the scope of Orthodontic fixed
            appliances. However, the habit must come to an end with a
            habit-breaking appliance if necessary. The latest technique has been
            the use of magnets in bite blocks. In severe cases and skeletal AOB
            Orthodontic and Orthognathic approaches are required to provide a
            successful stable result. Images can be viewed in Gallery 1.2 scroll
            above.
          </p>

          {/* Transverse Anomalies Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-1 text-gray-600'>
            Transverse Anomalies
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            In Class I malocclusion crossbites or scissors bite may be present.
            Crossbites are usually managed with maxillary expansion and can be
            treated by:
          </p>
          <ul className='list-disc pl-5 mb-2 text-sm md:text-base leading-relaxed'>
            <li>URA with midline expansion screw</li>
            <li>Quad Helix</li>
            <li>RME (Rapid Maxillary Expansion)</li>
            <li>TADs integrated expansion is efficient and predictable</li>
          </ul>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            URA is especially indicated where occlusal interference are present
            as bite blocks/planes can be fabricated on them, unlike Quad Helix
            or RME, which are best used in conjunction with Fixed appliances.
            Scissors bites can be treated with expansion or contraction of
            archwires in fixed appliances. However, if bilateral or functionally
            stable, the crossbite should be left untreated (Harradine and Birnie
            1998).
          </p>

          {/* Treatment Planning Prezi Section */}
          <div className='p-4 mt-4 flex-grow flex flex-col justify-center items-center'>
            <h3 className='font-sans text-base md:text-lg font-bold mb-2'>
              <a
                href='https://prezi.com/dc8rk8kod4dj/examination-treatment-planning/?utm_campaign=share&utm_medium=copy'
                target='_blank'
                className='text-black'
              >
                Treatment Planning Prezi
              </a>
            </h3>
            <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
              Interactive Prezi to view all elements related to Initial Exam and
              investigations for Orthodontic patient.
            </p>

            {/* Thumbnail */}
            <div className='w-full h-full flex items-center justify-center mb-4'>
              <img
                src='/chapter1/page9/Screenshot 2024-09-14 at 4.16.24 PM-177.png'
                alt='Prezi Thumbnail'
                className='object-contain w-1/2'
              />
            </div>

            {/* Red Text*/}
            <p className='font-sans text-base md:text-lg leading-relaxed text-red-500'>
              <a
                href='https://prezi.com/view/hPL2WfYULE86wMYXe7c9/'
                target='_blank'
                className='text-red-500'
              >
                Treatment Planning on Prezi
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction='left' target='/chapter1/page8' />
      <NavigationButton direction='right' target='/chapter1/page10' />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={9} />
    </div>
  );
};

export default Page9;
