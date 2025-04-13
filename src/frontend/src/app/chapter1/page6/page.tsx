/** @format */

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Footer from '../../../components/Footer';
import PageNumber from '../../../components/PageNumber';
import NavigationButton from '../../../components/NavigationButton';

const Page6 = () => {
  const router = useRouter();

  const [currentIndexGallery1, setCurrentIndexGallery1] = useState(0);
  const [currentIndexGallery2, setCurrentIndexGallery2] = useState(0);

  const gallery1Images = [
    {
      src: '/chapter1/page6/IMG_5908-36.JPG',
      caption: 'Extra Oral Frontal View Relaxed',
    },
    {
      src: '/chapter1/page6/IMG_5909-38.JPG',
      caption: 'Extra Oral Frontal View with Emotional Smile',
    },
    {
      src: '/chapter1/page6/IMG_5911-40.JPG',
      caption: '3/4 Profile smiling (assess the incisor inclination)',
    },
    {
      src: '/chapter1/page6/IMG_5912-42.JPG',
      caption: 'Extra Oral Full Profile (Assess skeletal Pattern)',
    },
    {
      src: '/chapter1/page6/IMG_5916-44.JPG',
      caption: '3/4 Profile smiling Left side',
    },
    {
      src: '/chapter1/page6/IMG_5918-46.JPG',
      caption: 'Extra Oral Full Profile Left side observer the OJ',
    },
    {
      src: '/chapter1/page6/IMG_5919-48.JPG',
      caption:
        'Intra Oral Occlusal front observe OJ OB Centre lines and Oral health status',
    },
    {
      src: '/chapter1/page6/IMG_5925-50.JPG',
      caption: 'Upper Occlusal view (Mirror image)',
    },
    {
      src: '/chapter1/page6/IMG_5926-52.JPG',
      caption: 'Lower occlusal view (Mirror Image)',
    },
    {
      src: '/chapter1/page6/IMG_5927-54.JPG',
      caption: 'Intra Oral Right side eruption of 45',
    },
    {
      src: '/chapter1/page6/IMG_5921-56.JPG',
      caption: 'Intra Oral Left side erupting 35',
    },
  ];

  const gallery2Images = [
    {
      src: '/chapter1/page6/Modified BlueGrass HD-28.jpg',
      caption:
        'Modified Grass Roller Habit Deterrent on Quad Helix to assist in habit breaking and transverse correction for efficient and effective Orthodontic Treatment',
    },
    {
      src: '/chapter1/page6/GrassRollerHD-30.jpg',
      caption:
        'Grass Roller Habit Deterrent in Adult patient age 46 years (Haskell & Mink 1991)',
    },
    {
      src: '/chapter1/page6/BG Expansion-32.jpg',
      caption:
        'Upper removable expansion Appliance with Double Adams Left DE and midline palatal screw. Patient needs to be compliant.',
    },
    {
      src: '/chapter1/page6/BG QH-34.jpg',
      caption:
        'Quad Helix (4 Helices) used for transverse correction maxillary arch (for non-compliant patients ideal fixed expander)',
    },
  ];

  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      {/* Main Content Section */}
      <div className='flex w-full h-full'>
        {/* Left Container */}
        <div className='flex-1 flex flex-col gap-2 pl-4'>
          {/* Title */}
          <h2 className='font-sans text-xl md:text-2xl font-bold mb-2'>
            INTERCEPTIVE ORTHODONTICS
          </h2>
          {/* Description */}
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            Interceptive Orthodontics aims at preserving the integrity and
            preventing malocclusion from developing at a specific stage. This
            includes:
          </p>
          {/* Bulleted List */}
          <ul className='list-disc pl-5 mb-4'>
            <li className='font-sans text-sm md:text-base'>
              Early correction of carious lesions, particularly proximal caries.
            </li>
            <li className='font-sans text-sm md:text-base'>
              Early recognition and elimination of oral habits.
            </li>
            <li className='font-sans text-sm md:text-base'>
              Using space maintainers in case of early loss of deciduous teeth.
            </li>
          </ul>
          {/* Swipeable Gallery 1.1 */}
          <div className='relative h-[300px]'>
            <h3 className='font-sans text-base md:text-lg font-bold mb-2'>
              Gallery 1.1{' '}
              <span className='text-gray-500 font-normal'>
                10 Year Old presenting with Normal Skeletal and Normal Dental
                development
              </span>
            </h3>
            <img
              src={gallery1Images[currentIndexGallery1].src}
              alt={gallery1Images[currentIndexGallery1].caption}
              className='w-full h-full object-contain'
            />
            <p className='text-xs italic text-gray-600 text-center mt-2'>
              {gallery1Images[currentIndexGallery1].caption}
            </p>
            {/* Arrows for navigation */}
            <button
              onClick={() =>
                setCurrentIndexGallery1((prevIndex) =>
                  prevIndex === 0 ? gallery1Images.length - 1 : prevIndex - 1
                )
              }
              className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75'
            >
              &lt;
            </button>
            <button
              onClick={() =>
                setCurrentIndexGallery1(
                  (prevIndex) => (prevIndex + 1) % gallery1Images.length
                )
              }
              className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75'
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Center Container */}
        <div className='flex-1 flex flex-col items-center gap-2'>
          {/* Swipeable Gallery 1.2 */}
          <div className='relative md:max-w-sm h-[300px]'>
            <h3 className='font-sans text-base md:text-lg font-bold mb-2'>
              Gallery 1.2{' '}
              <span className='text-gray-500 font-normal'>
                Interceptive Orthodontics
              </span>
            </h3>
            <img
              src={gallery2Images[currentIndexGallery2].src}
              alt={gallery2Images[currentIndexGallery2].caption}
              className='w-full h-full object-contain'
            />
            <p className='text-xs italic text-gray-600 text-center mt-2'>
              {gallery2Images[currentIndexGallery2].caption}
            </p>
            {/* Arrows for navigation */}
            <button
              onClick={() =>
                setCurrentIndexGallery2((prevIndex) =>
                  prevIndex === 0 ? gallery2Images.length - 1 : prevIndex - 1
                )
              }
              className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75'
            >
              &lt;
            </button>
            <button
              onClick={() =>
                setCurrentIndexGallery2(
                  (prevIndex) => (prevIndex + 1) % gallery2Images.length
                )
              }
              className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-20 hover:opacity-75'
            >
              &gt;
            </button>

            {/* Center Bottom Text */}
            <p className='font-sans text-sm md:text-base leading-relaxed mt-4'>
              Another example of Interceptive Orthodontics is{' '}
              <strong>Serial Extractions</strong> introduced by Kjellgren in
              1948. However, it is not used in its traditional protocol due to
              excessive extraction episodes - but{' '}
              <strong>Guided Eruption</strong> with extractions of C’s followed
              by D’s may be considered in special circumstances to prevent
              excessive crowding in permanent dentition. The cost benefit
              analysis needs to be discussed for informed decision making by the
              parent/ guardian of the child.
            </p>
          </div>
        </div>

        {/* Right Container */}
        <div className='flex-1 flex flex-col gap-2'>
          {/* Right Top Content */}
          <div>
            <h3 className='font-sans text-base md:text-lg font-bold mt-2 mb-2 text-gray-600'>
              AIMS OF ORTHODONTIC TREATMENT
            </h3>
            <ol className='list-decimal pl-5 mb-2'>
              <li className='font-sans text-sm md:text-base'>
                Achieve a functional and aesthetic occlusion by altering
                permanently the position of teeth.
              </li>
              <li className='font-sans text-sm md:text-base'>
                Intercept abnormal development of occlusion.
              </li>
              <li className='font-sans text-sm md:text-base'>
                Establish functional efficiency and structural balance.
              </li>
              <li className='font-sans text-sm md:text-base'>
                Eliminate traumatic bites.
              </li>
              <li className='font-sans text-sm md:text-base'>
                Align irregular teeth prior to bridge work or partial dentures
                i.e. <strong>Adjunctive Treatment</strong>.
              </li>
              <li className='font-sans text-sm md:text-base'>
                Align prominent teeth which are more prone to trauma.
              </li>
            </ol>
          </div>
          {/* Right Bottom Content */}
          <div>
            <h3 className='font-sans text-base md:text-lg font-bold mt-2 mb-2 text-gray-600'>
              NEED FOR ORTHODONTIC TREATMENT
            </h3>
            <ol className='list-decimal pl-5 mb-2'>
              <li className='font-sans text-sm md:text-base mb-1'>
                Improve aesthetics.
              </li>
              <li className='font-sans text-sm md:text-base mb-1'>
                Restoration of function.
              </li>
              <li className='font-sans text-sm md:text-base mb-1'>
                Reduce susceptibility of dental caries and periodontal
                involvement due to malocclusion.
              </li>
              <li className='font-sans text-sm md:text-base mb-1'>
                Aid in elimination of harmful habits.
              </li>
              <li className='font-sans text-sm md:text-base mb-1'>
                Adjunctive treatment prior to prosthetic intervention.
              </li>
              <li className='font-sans text-sm md:text-base mb-1'>
                Orthognathic cases as pre- and post- operative Orthodontics.
              </li>
              <li className='font-sans text-sm md:text-base mb-1'>
                Special needs in congenital deformities such as cleft lip and
                palate patients.
              </li>
              <li className='font-sans text-sm md:text-base mb-1'>
                “Handicapping Malocclusions” to improve the quality of life and
                social acceptability.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction='left' target='/chapter1/page5' />
      <NavigationButton direction='right' target='/chapter1/page7' />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={6} />
    </div>
  );
};

export default Page6;
