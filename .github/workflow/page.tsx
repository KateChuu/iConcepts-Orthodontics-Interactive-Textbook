/** @format */

'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../../components/Footer';
import PageNumber from '../../../components/PageNumber';
import NavigationButton from '../../../components/NavigationButton';

export default function Page2() {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      {/* Container for Left and Right Sections */}
      <div className='flex w-full h-full'>
        {/* Left Container */}
        <div className='bg-gray-500 w-1/2 flex flex-col items-center justify-between p-4 overflow-y-auto'>
          {/* Title and Butterfly Image */}
          <div className='flex items-end p-4'>
            <h1 className='text-4xl md:text-6xl text-purple-300 mr-16'>
              Preface
            </h1>
            <img
              src='/chapter1/page2/butterfly-world-map-mark-ashkenazi-21.jpg'
              alt='Butterfly'
              className='w-16 h-16 md:w-24 md:h-24 object-contain'
            />
          </div>

          {/* Updated Text Content */}
          <div className='w-full text-justify text-lg md:text-xl font-sans text-blue-100 leading-8 px-4 md:px-8'>
            <p>
              Precisely decade later 2026 have the pleasure to write the preface
              to the 4th edition on a futuristic format of online interactive
              text in Orthodontics. A project of lecture notes in high demand of
              students led to a simple easy readable and time effective
              monograph for clearing complex concepts in the multidimensional
              and multifactorial speciality of Orthodontics.
            </p>
          </div>
          <div className='w-full text-justify text-lg md:text-xl font-sans text-blue-100 leading-8 px-4 md:px-8'>
            <p>
              In the past 20 years in particular there has been a huge paradigm
              shift in our use of technological advances for both investigation
              and delivery of appliances in ever evolving field of dentistry in
              general and Orthodontics in particular. Online interactive CADCAM
              is engaging, rewarding and assists learner to be CLINIC ready. Aim
              is to have up to date resources in real time with contemporary
              skills & conserve TIME the most valuable and non renewable
              resource for learner!
            </p>
          </div>
          <div className='w-full text-justify text-lg md:text-xl font-sans text-blue-100 leading-8 px-4 md:px-8'>
            <p>
              Hope you find this Exciting, Engaging and Empowering learning
              experience with Long Term Information Retention.
            </p>
          </div>
          <div className='w-full text-right text-lg md:text-xl font-sans text-blue-100 leading-8 px-4 md:px-8'>
            <p>Shazia</p>
          </div>
        </div>

        {/* Right Container */}
        <div className='w-1/2  h-full flex justify-center items-center'>
          <img
            src='/chapter1/page2/Dubai2013-22.jpg'
            alt='Dr. Shazia'
            className='w-full h-full object-contain'
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction='right' target='/chapter1/page3' />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={2} />
    </div>
  );
}
