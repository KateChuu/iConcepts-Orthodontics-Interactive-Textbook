/** @format */

'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../../components/Footer';
import PageNumber from '../../../components/PageNumber';
import NavigationButton from '../../../components/NavigationButton';

const Page8 = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      {/* Main Content Section */}
      <div className='flex w-full h-full'>
        {/* Left Container */}
        <div className='flex-1 flex flex-col pr-4 gap-2'>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            <strong>Dental</strong>
          </p>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            Malocclusion is usually caused by local dental factors alone.{' '}
            <strong>Crowding</strong> is the most common problem, which may be
            due to local factors or premature loss of deciduous units.{' '}
            <strong>Spacing</strong> can also occur, but is generally rare. Most
            common reasons being tooth jaw size discrepancy, fleshy frenum,
            missing teeth, malformed teeth etc.{' '}
            <strong>Bimaxillary proclination</strong> is more a racial variant.
            Care should be taken to diagnose the exact cause.{' '}
            <strong>Vertical anomalies</strong> such as anterior openbites may
            also occur in Class I malocclusions, thus the Class I incisor
            relationship does not imply them.{' '}
            <strong>Transverse Anomalies</strong> commonly present with
            crossbites and scissors bite.
          </p>

          <p className='font-sans text-sm md:text-base leading-relaxed'>
            <strong>Facial Growth Pattern</strong>
          </p>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            The growth pattern for Class I subjects is usually favorable.
            Although, it must be borne in mind that vertical discrepancy such as
            an anterior openbite tends to get worse with further growth, as
            dento-alveolar compensation is already at its limits.
          </p>

          {/* Treatment Options */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-2 mb-2 text-gray-600'>
            TREATMENT OPTIONS
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            Apart from functional appliances and Orthognathic surgery per se,
            the other 3 treatment modalities i.e.
          </p>
          <ul className='list-disc pl-5 text-sm md:text-base leading-relaxed'>
            <li className='text-pink-500 font-bold'>Clear Aligner Therapy</li>
            <li className='text-pink-500 font-bold'>Fixed appliances</li>
            <li className='text-pink-500 font-bold'>Removable appliances</li>
          </ul>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            are the most commonly applied treatment mechanics for Class I
            malocclusions. Various etiologic factors shall be discussed in
            detail.
          </p>

          {/* Crowding Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-2 mb-2 text-gray-600'>
            Crowding
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            In a significant proportion of Class I cases, the only feature of
            malocclusion is crowding. Where dental crowding alone is responsible
            for malocclusion with no other local factor, such as crossbites
            etc., it may be possible to treat in limited number of cases without
            any appliance through timely extraction of teeth alone. Serial
            extraction was one such extraction protocol used extensively in the
            past, but has lost much application in present day Orthodontics as
            young patients are not subjected to repeated extractions routinely.
            {/* Extraction Guidelines */}
            <br />
            Extractions for Class I malocclusion
            <br />
            In a crowded case general guidelines for extractions are:
            <br />
            If the space discrepancy is up to 4mm, it is usually resolved
            without extractions (except third molars).
          </p>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            Discrepancy in the range of 5-9mm are best treated without
            extractions by:
          </p>
        </div>

        {/* Right Container */}
        <div className='flex-1 flex flex-col pr-4 gap-2'>
          <ul className='list-disc pl-5 mb-2 text-sm md:text-base leading-relaxed'>
            <ul className='list-disc pl-5'>
              <li>Arch expansion</li>
              <li>Molar anchorage TAD (Temporary Anchorage Devices)</li>
              <li>Enamel reduction IPR (InterProximal Reduction)</li>
            </ul>
          </ul>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            Patients with space discrepancy of 10mm or more almost always
            require premolar extractions with reinforced anchorage. Other
            extraction patterns are asymmetrical and single ectopic dental
            units. In certain crowded cases with premature loss of primary
            teeth, space maintainers may be required to ensure the space for
            permanent successor. However, such cases always require two-phase
            orthodontic treatment. Patients should be made aware of future full
            scope to make an informed decision.
          </p>
          {/* Spacing Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-2 mb-2 text-gray-600'>
            Spacing
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            In Class I case with spacing, the decision has to be made whether
            to:
          </p>
          <ul className='list-disc pl-5 mb-2 text-sm md:text-base leading-relaxed'>
            <li>Open spaces and place prosthesis for missing dental units</li>
            <li>
              Close space with appliance therapy to reduce restorative cycle in
              future
            </li>
          </ul>
          <p className='font-sans text-sm md:text-base leading-relaxed'>
            If spacing is excessive, then it is best to close generalized
            spacing and concentrate on the space where a prosthesis such as a
            bridge, partial denture or acid etch bridge can be placed. The major
            problem is to maintain such prosthesis throughout life, especially
            in children who have a whole life ahead of them, affecting quality
            of life and the cost incurred with frequent replacements. To close
            spaces is perhaps the best option, but can only be done with spacing
            that is not too gross. However, aesthetics may be compromised e.g.
            when a missing lateral incisor space is closed with a more bulkier
            and yellow shaded canine tooth in the maxillary arch.
          </p>

          {/* Bimaxillary Proclination Section */}
          <h3 className='font-sans text-base md:text-lg font-bold mt-2 mb-2 text-gray-600'>
            Bimaxillary Proclination
          </h3>
          <p className='font-sans text-sm md:text-base leading-relaxed mb-2'>
            Concomitant proclination of upper and lower labial dental units is
            usually racial i.e. common feature in Afro-Caribbean, Orientals, and
            Negroid population and is best left untreated. However, if treatment
            is required to improve facial aesthetics and reduce overjet or
            enhance lip competence, it is essential to assess each case on its
            own merits i.e. soft tissue like flaccid or everted lips or skeletal
            pattern. Usually, these cases are treated with extractions of
            premolars in crowded cases, but it is important to note that
            extractions should not be done only for incisor retraction, as
            long-term response is poor and risk of overjet returning and
            reopening the extraction space is always present. Best long-term
            stability is seen with joint Orthodontic and Orthognathic approach
            in severe skeletal cases.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButton direction='left' target='/chapter1/page7' />
      <NavigationButton direction='right' target='/chapter1/page9' />

      {/* Footer */}
      <Footer />

      {/* Page Number */}
      <PageNumber page={8} />
    </div>
  );
};

export default Page8;
