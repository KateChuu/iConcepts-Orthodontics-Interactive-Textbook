/** @format */

'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../../components/Footer';
import PageNumber from '../../../components/PageNumber';
import NavigationButton from '../../../components/NavigationButton';

export default function Page3() {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      {/* Container for Left and Right Sections */}
      <div className='flex w-full h-full'>
        {/* Left Section */}
        <div className='bg-gray-500 w-1/2 flex flex-col justify-start p-4'>
          {/* Chapter Title */}
          <h2 className='font-sans text-white-a700 text-sm md:text-lg mb-2 border-b border-white w-full z-10'>
            Chapter 1
          </h2>

          {/* Main Title */}
          <div className='flex w-full z-10'>
            <div className='font-sans text-white-a700 text-center text-2xl md:text-4xl font-bold border-b border-white w-full relative'>
              Introduction <br />
              Orthodontics <br />
              NOW!
            </div>
          </div>

          {/* Fish Image */}
          <div className='mt-4 flex justify-center'>
            <img
              src='/chapter1/page3/how-finding-nemo-works-5-26.jpg'
              alt='Fish'
              className='w-full max-w-xs md:max-w-md h-auto object-contain'
            />
          </div>

          {/* Dentist Image */}
          <div className='mt-4 flex justify-center'>
            <img
              src='/chapter1/page3/FindingNemo2003720pHDRiP-4-24.jpg'
              alt='Orthodontics Girl'
              className='w-full max-w-xs md:max-w-md h-auto object-contain'
            />
          </div>
        </div>

        {/* Right Section */}
        <div className='w-1/2 p-4 overflow-auto relative flex flex-col justify-evenly'>
          <h2 className='font-sans text-center text-sm md:text-lg font-bold mb-2'>
            The Journey of Orthodontics
          </h2>

          <p className='font-sans text-justify text-xs md:text-sm leading-5 mb-2'>
            <strong>At</strong> Alumni luncheon for 8<sup>th</sup> IOC in Sep
            2015 in Dubai when iConcepts was initiated it was apparent my
            journey in Orthodontics has now spanned over several decades and
            there has been substantial changes in the treatment modalities
            available in contemporary Orthodontics. Technological advances have
            provided elements of CAD CAM, 3D imaging precision imaging, Clear
            Aligners Therapy with greater demand by patients and TADs with
            predictable anchorage to name just the major advances in the field
            of Orthodontics. No one could have predicated all this at the turn
            of the 21st century and yet they are mainstream today and patient
            driven who is aware of options available to get ideal treatment
            times to suit their busy lifestyles.
          </p>

          <p className='font-sans text-justify text-xs md:text-sm leading-5 mb-2 ml-4'>
            However, the area which has always fascinated me as a dedicated
            academician and with over 3 decades of experience in higher
            education in leading universities captivated my imagination is the
            dissemination of information with technology, design of delivery and
            long term retention of core knowledge. The world has become global
            more than ever before and on a click of www and now AI, we are
            connected to unbelievable speed of execution of information
            delivery.
          </p>
          <p className='font-sans text-justify text-xs md:text-sm leading-5 mb-2 ml-4'>
            Information explosion can overwhelm us, but what if we could use it
            to enhance our Higher Education system. So what would be ideal
            learning experience?{' '}
            <a
              href='https://prezi.com/_vzykxq2q7f1/?utm_campaign=share&utm_medium=copy&rc=ex0share'
              target='_blank'
              className='text-red-500 hover:underline'
            >
              LEAN
            </a>{' '}
            of course! The concept is relatively new in Higher Education, it has
            significance since mind can accept and retain information when
            provided in easy bits and concepts to provide solid foundation for
            future clinical practice.
          </p>
          <p className='font-sans text-justify text-xs md:text-sm leading-5 mb-2 ml-4'>
            <strong>Aim</strong> of this simple monograph like its previous
            versions is to keep the core concepts “simplified” along with key
            points in easy format for examination preparations and clinical
            dental chairside applications. The idea is that when you are
            finished reading a module you have hopefully retained 80-100% of the
            information provided without feeling overburdened with excessive
            text. LEAN is a concept that works on the principles of{' '}
            <em>efficiency, effectiveness and continuous improvement</em>. The
            endeavor here is the same with added interactivity to be clinic
            ready! Look forward to your comments on{' '}
            <a
              href='https://au.linkedin.com/in/dr-s-naser-ud-din-phd-morth-rcsed-msc-35962465'
              target='_blank'
              className='text-red-500 hover:underline'
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction='left' target='/chapter1/page2' />
      <NavigationButton direction='right' target='/chapter1/page4' />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={3} />
    </div>
  );
}
