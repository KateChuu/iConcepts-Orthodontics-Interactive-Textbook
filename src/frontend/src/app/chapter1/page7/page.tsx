/** @format */

'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../../components/Footer';
import PageNumber from '../../../components/PageNumber';
import NavigationButton from '../../../components/NavigationButton';

const Page7 = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      {/* Main Content Section */}
      <div className='flex w-full h-full'>
        {/* Left Container */}
        <div className='flex-1 flex flex-col pr-4 gap-2 '>
          {/* Title */}
          <h2 className='font-sans text-xl md:text-2xl font-bold mb-2'>
            PREVALENCE OF MALOCCLUSION
          </h2>
          {/* Description */}
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            Prevalence of malocclusion in general human population is taken from
            U.S Public Health Service Survey conducted on a large scale in 1970.
            It is important to realize that distribution of malocclusion types
            varies among racial, national and ethnic groups and even more
            complex with miscegenation hence be aware of the norms applied in
            the past. Caucasian data is presented in the table across.
          </p>

          {/* Additional Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600'>
            INCREASED PREVALENCE OF MALOCCLUSION
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            There are several reasons for increased prevalence of malocclusion.
            Firstly, and perhaps the most important being reduced function of
            masticatory apparatus. In the past hard and fibrous foods were
            ingested, but today children hardly get the opportunity to chew-
            most of them are given processed meals.
          </p>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            Second, reason quoted is the evolutionary trend. There has been
            steady reduction in the size of anterior and posterior teeth, along
            with their numbers. The third incisors, third premolars and fourth
            molars have disappeared. At present the human third molars, second
            premolars and second incisors often fail to develop. Like high blood
            pressure, heart diseases, diabetes- malocclusion is termed the
            “Disease of Civilization”. Moreover, OSA (Obstructive Sleep Apnea)
            and Bruxism have been also added into the disease of civilization.
          </p>

          {/* Demand of Orthodontic Treatment */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600'>
            DEMAND OF ORTHODONTIC TREATMENT
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            Demand for Orthodontic treatment is indicated by the number of
            patients who actually make appointments and seek care. Orthodontics
            is no longer just confined to the child population and adolescents.
            Adults are now seeking Orthodontic treatment. In a survey conducted
            in 1989 in USA just over 25% of new patients were age 18 or older.
            Orthodontics has become a prominent part of Dentistry in recent
            years and this trend is likely to continue in the socially aesthetic
            conscious world we live in today. However, it is also important to
            provide complete information regarding risk and benefit ratios to
            patients demanding unrealistic ideal occlusions that have
            limitations in long term stability.
          </p>
        </div>

        {/* Right Container */}
        <div className='flex-1 flex flex-col gap-2 pl-4 overflow-auto'>
          {/* Table Section */}
          <table className='w-full border-collapse border border-gray-300 mb-4'>
            <thead>
              <tr>
                <th className='border border-gray-300 p-2 text-left font-bold'>
                  NORMAL OCCLUSION
                </th>
                <th className='border border-gray-300 p-2 text-left font-bold'>
                  30%
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-gray-300 p-2'>
                  CLASS I MALOCCLUSION
                </td>
                <td className='border border-gray-300 p-2'>50-55%</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>
                  CLASS II MALOCCLUSION
                </td>
                <td className='border border-gray-300 p-2'>15-20%</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>
                  CLASS III MALOCCLUSION
                </td>
                <td className='border border-gray-300 p-2'>1%</td>
              </tr>
            </tbody>
          </table>

          {/* Right Top Content */}
          <div>
            <h2 className='font-sans text-xl md:text-2xl font-bold mb-1'>
              CLASS I MALOCCLUSION
            </h2>
            <h3 className='font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600'>
              Definition
            </h3>
            <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
              It is defined on the basis of the first permanent molar
              relationship i.e. mesio-buccal cusp of the upper first permanent
              molar lies in the mid-buccal groove of the lower first permanent
              molar (Angle’s Classification).
            </p>
            <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
              While the incisor classification is such that the lower incisal
              edge lies on or below the cingulum plateau of the palatal surface
              of the upper incisors.
            </p>
          </div>

          {/* Right Bottom Content */}
          <div>
            <h3 className='font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600'>
              Incidence
            </h3>
            <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
              55-60% of the population is found to have Class I malocclusion
              (Todd & Dodd 1975).
            </p>
            <h3 className='font-sans text-base md:text-lg font-bold mt-4 mb-2 text-gray-600'>
              Clinical Features of Class I Malocclusion
            </h3>
            <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
              <strong>Skeletal</strong>
              <br />
              Generally the Class I malocclusion will be found on a skeletal I
              base. However, mild Class II or Class III skeletal bases with
              dento-alveolar compensations are not rare to find. Overall the
              skeletal pattern is favourable.
            </p>
            <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
              <strong>Soft Tissues</strong>
              <br />
              The soft tissue profile is pleasing and lips, tongue and cheek
              pressures are well balanced.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction='left' target='/chapter1/page6' />
      <NavigationButton direction='right' target='/chapter1/page8' />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={7} />
    </div>
  );
};

export default Page7;
