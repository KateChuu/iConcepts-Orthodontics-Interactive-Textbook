/** @format */

'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../../components/Footer';
import PageNumber from '../../../components/PageNumber';
import NavigationButton from '../../../components/NavigationButton';
import keyMoments from '@/components/InteractiveVideo/keyMoments';
import InteractiveVideo from '@/components/InteractiveVideo';

const Page17 = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      {/* Main Content Section */}
      <div className='flex w-full h-full flex-col gap-1'>
        {/* Top Section */}
        <div className='flex w-full h-full'>
          {/* Video Placeholder */}
          <div className='w-2/3 flex justify-center items-center'>
            <div className='w-full h-64 flex items-center justify-center'>
              {/* Deep Traumatic Bite Video */}
              <div className='w-full  flex items-center justify-center'>
                <InteractiveVideo
                  src='/interactive-videos/DeepTraumaticBite.mov'
                  keyMoments={keyMoments.DeepTraumaticBite}
                  className='w-[600px]'
                />
              </div>
            </div>
          </div>
          {/* Caption */}
          <div className='w-1/3 flex flex-col justify-center pl-8'>
            <h3 className='font-sans text-lg md:text-xl font-bold mb-2'>
              Self Test
            </h3>
            <p className='font-sans text-sm md:text-base leading-relaxed'>
              Deep Traumatic bite correction <br />
              Adult case with Bruxism
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='flex w-full h-full'>
          {/* Video Placeholder */}
          <div className='w-2/3 flex justify-center items-center'>
            <div className='w-full h-64 flex items-center justify-center'>
              {/* Deep Traumatic Bite Video */}
              <div className='w-full  flex items-center justify-center'>
                <InteractiveVideo
                  src='/interactive-videos/ClassIIDiv1.mov'
                  keyMoments={keyMoments.ClassIIDiv}
                  className='w-[600px]'
                />
              </div>
            </div>
          </div>
          {/* Caption */}
          <div className='w-1/3 flex flex-col justify-center pl-8'>
            <p className='font-sans text-sm md:text-base leading-relaxed'>
              3D interactive CADCAM controls to navigate corrections with tip
              torque distalization and expansion examples
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction='left' target='/chapter2/page16' />
      <NavigationButton direction='right' target='/chapter2/page18' />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={17} />
    </div>
  );
};

export default Page17;
