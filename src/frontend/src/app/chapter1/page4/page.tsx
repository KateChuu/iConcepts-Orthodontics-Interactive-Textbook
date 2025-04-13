/** @format */

'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../../components/Footer';
import PageNumber from '../../../components/PageNumber';
import NavigationButton from '../../../components/NavigationButton';

export default function Page4() {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      {/* Top Section */}
      <div className='flex flex-col w-full'>
        {/* Section Title */}
        <h2 className='font-sans w-full text-sm md:text-lg text-pink-400 border-b border-gray-500 pb-1'>
          Section 1
        </h2>
        {/* Main Title */}
        <h1 className='font-sans text-base md:text-2xl font-bold text-pink-300 mb-4'>
          Introduction
        </h1>
      </div>

      {/* Content Container */}
      <div className='flex flex-1'>
        {/* Left Section */}
        <div className='flex-[2] flex flex-col justify-start pr-4 pt-2 border-t border-gray-800'>
          {/* Left Section takes 2/5 of the width */}
          <ul className='list-none p-0 m-0'>
            <li className='font-sans text-sm md:text-base mb-2 text-gray-800 font-bold'>
              1. Definition of Orthodontics
            </li>
            <li className='font-sans text-sm md:text-base mb-2 text-gray-800 font-bold'>
              2. Brief Historical Background
            </li>
            <li className='font-sans text-sm md:text-base mb-2 text-gray-800 font-bold'>
              3. List Orthodontic Treatment Modalities
            </li>
            <li className='font-sans text-sm md:text-base mb-2 text-gray-800 font-bold'>
              4. Occlusion Classification
            </li>
            <li className='font-sans text-sm md:text-base mb-2 text-gray-800 font-bold'>
              5. Prevalence of Malocclusion in Global regions
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='flex-[3] flex flex-col justify-start text-justify gap-2 pr-4'>
          {/* Right Top Content */}
          <div>
            <h2 className='font-sans text-xl md:text-2xl mb-2 font-bold'>
              Orthodontics
            </h2>
            <p className='font-sans text-sm md:text-base leading-5'>
              Orthodontics is a highly specialized field of Dentistry, aiming
              towards esthetic and functional enhancement of the dentition.
              Considered first specialty of dentistry introduced a century ago.
              However, rapid advancements have taken place in the last two
              decades making it a major leading discipline of Dental Surgery.
            </p>
          </div>

          {/* Right Bottom Content */}
          <div>
            <h3 className='font-sans text-base md:text-lg font-bold mt-2 mb-2 text-gray-600'>
              DEFINITION
            </h3>
            <p className='font-sans text-sm md:text-base leading-5'>
              <strong>Orthodontics (Dentofacial Orthopedics)</strong> can be
              defined as:
              <br />
              <br />
              “The area of dentistry concerned with the supervision, guidance
              and correction of growing and mature dentofacial structures,
              including those conditions that require movement of teeth or
              correction of malrelationships and malformations of related
              structures by adjustment of relationship between and among teeth
              and facial bones, by the application of forces and/or the
              stimulation and re-direction of the functional forces within the
              craniofacial complex”. (Proffit 1993)
            </p>
            <p className='font-sans text-sm md:text-base leading-5'>
              A simpler version for defining Orthodontics is as follows:
              <br />
              <br />
              <i>
                &quot;Orthodontics is that branch of Dental Sciences which is
                concerned with genetic variations, development and growth of
                facial forms and the manner in which these factors affect the
                occlusion of the teeth and their function.&quot;
              </i>
            </p>
            <p className='font-sans text-sm md:text-base leading-5 text-gray-800'>
              Orthodontic techniques are concerned with treatment of
              irregularities of the teeth. The study of Orthodontics includes
              entire craniofacial complex and addresses:
            </p>
            {/* Growth, Development, Function Icons */}
            <ul className='font-sans text-sm md:text-base leading-5 text-gray-800 list-none'>
              <li>★Growth</li>
              <li>★Development</li>
              <li>★Function</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction='left' target='/chapter1/page3' />
      <NavigationButton direction='right' target='/chapter1/page5' />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={4} />
    </div>
  );
}
