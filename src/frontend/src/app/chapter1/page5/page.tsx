/** @format */
'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../../components/Footer';
import PageNumber from '../../../components/PageNumber';
import DrawableLearnerNotes from "@/components/DrawableLearnerNotes/DrawableLearnerNotes";
import NavigationButton from '../../../components/NavigationButton';

export default function Page5() {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      {/* Content Section */}
      <div className='flex w-full h-full'>
        {/* Left Section */}
        <div className='flex-1 flex flex-col gap-2'>
          <h3 className='font-sans text-base md:text-lg font-bold mb-2 text-gray-600'>
            BRIEF HISTORICAL BACKGROUND OF ORTHODONTICS
          </h3>

          <p className='font-sans text-justify text-sm md:text-base leading-relaxed'>
            The name of the specialty Orthodontics comes from three Greek words:
          </p>

          <ul className='list-disc pl-5'>
            <li className='font-sans text-sm md:text-base'>
              Ortho – right or correct
            </li>
            <li className='font-sans text-sm md:text-base'>Odontos – teeth</li>
            <li className='font-sans text-sm md:text-base'>-ics – science</li>
          </ul>

          <p className='font-sans text-justify text-sm md:text-base leading-relaxed'>
            In the second half of the 19th century, a lot of attention was being
            paid to the treatment of irregularity of teeth. In the early days,
            this sort of treatment was considered a part of prosthetic dentistry
            and was handled as a purely mechanical procedure. In 1880, Dr.
            Norman Kingsley (1829-1913), who is considered by many as the Father
            of Orthodontics, published his “Treatise on Oral Deformities as a
            Branch of Mechanical Surgery.” His major contribution was the
            occipital headgear. Nine years later, Simeon Guilford published
            Orthodontia – which became a standard text in dental colleges.
          </p>

          <p className='font-sans text-justify text-sm md:text-base leading-relaxed'>
            However, the emergence of Orthodontics as a true specialty is
            largely the result of the efforts of one man - Edward Hartley Angle
            (1855-1930). Angle published his first book,{' '}
            <em>Malocclusion of Teeth</em> in 1887. He developed the
            classification of malocclusion based on the relationship of first
            molars, which is still used today. He introduced the concept of the
            Fixed appliance technique for the first time and revolutionized
            Orthodontics. Angle also established the American Society of
            Orthodontics, with him being the first President. Angle is widely
            known as the Father of Modern Orthodontics.
          </p>

          <h2 className='font-sans text-xl md:text-2xl font-bold mt-2 mb-2'>
            ORTHODONTIC TREATMENT OPTIONS / MODALITIES
          </h2>

          <p className='font-sans text-justify text-sm md:text-base leading-relaxed'>
            Major responsibilities of Orthodontic practice include
          </p>
          <ul className='list-disc pl-5'>
            <li className='font-sans text-sm md:text-base'>
              Prevention / interception Orthodontics
            </li>
            <li className='font-sans text-sm md:text-base'>
              Diagnosis with 3D scanning
            </li>
            <li className='font-sans text-sm md:text-base'>
              Treatment planning
            </li>
          </ul>
          <p className='font-sans text-justify text-sm md:text-base leading-relaxed'>
            Of all forms of malocclusion of the teeth and associated alteration
            in their surrounding structures. The CAD CAM (Computer Assisted
            Design Computer Assisted Manufacture) has improved several aspects
            of customized brackets including precision of attachments with
            reduction of time for bonding hence Indirect Orthodontic Bonding
            jigs. Moreover, armamentarium such as:
          </p>
        </div>

        {/* Right Section */}
        <div className='flex-1 flex flex-col gap-2 p-4'>
          {/* Treatment Table */}
          <table className='w-full border-collapse border border-gray-300'>
            <thead>
              <tr>
                <th className='border border-gray-300 p-2 text-left font-bold text-pink-500'>
                  TREATMENT TIMING
                </th>
                <th className='border border-gray-300 p-2 text-left font-bold text-pink-500'>
                  TREATMENT MODALITIES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-gray-300 p-2'>Interceptive</td>
                <td className='border border-gray-300 p-2'>
                  Space maintainers / Removable Appliances
                </td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>Functional</td>
                <td className='border border-gray-300 p-2'>
                  Functional Appliances
                </td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>Definitive</td>
                <td className='border border-gray-300 p-2'>
                  Removable Appliances / Fixed Appliances
                </td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>Orthognathic</td>
                <td className='border border-gray-300 p-2'>
                  Fixed Appliances & Surgery
                </td>
              </tr>
            </tbody>
          </table>

          {/* Right Content */}
          <div className='flex flex-col gap-2 flex-grow p-4'>
            <ol className='list-decimal pl-5'>
              <li className='font-sans text-sm md:text-base'>
                Clear Aligners Therapy (CAT)
              </li>
              <li className='font-sans text-sm md:text-base'>
                Temporary Anchorage Devices (TAD)
              </li>
              <li className='font-sans text-sm md:text-base'>
                Self ligation Fixed appliances
              </li>
              <li className='font-sans text-sm md:text-base'>
                Custom fabricated Fixed appliances
              </li>
              <li className='font-sans text-sm md:text-base'>LASERs</li>
            </ol>

            <p className='font-sans text-justify text-sm md:text-base leading-relaxed'>
              Above have enhanced the quality of treatment delivery, along with
              efficiency and effectiveness and excellence.
            </p>

            {/* IDEAL OCCLUSION */}
            <h3 className='font-sans text-base md:text-lg font-bold mt-2 mb-2 text-gray-600'>
              IDEAL OCCLUSION
            </h3>
            <p className='font-sans text-justify text-sm md:text-base leading-relaxed'>
              Hypothetical concept based on the anatomy of the individual teeth
              and ideal jaw alignment. It is rarely found in nature. However, it
              provides a standard by which other occlusions can be evaluated.
            </p>

            {/* NORMAL OCCLUSION */}
            <h3 className='font-sans text-base md:text-lg font-bold mt-2 mb-2 text-gray-600'>
              NORMAL OCCLUSION
            </h3>
            <p className='font-sans text-justify text-sm md:text-base leading-relaxed'>
              An occlusion within the acceptable deviation of ideal. There are
              no clear limits to the range of normal occlusion. In general,
              minor variations in the alignment of teeth – which are not of
              aesthetic or functional importance are considered within the norm.
            </p>

            {/* Learner Notes Box */}
            <div className=" text-white p-2 flex-grow text-center">
              <p>Learner Notes</p>
              <DrawableLearnerNotes />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction='left' target='/chapter1/page4' />
      <NavigationButton direction='right' target='/chapter1/page6' />

      {/* Footer */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={5} />
    </div>
  );
}
