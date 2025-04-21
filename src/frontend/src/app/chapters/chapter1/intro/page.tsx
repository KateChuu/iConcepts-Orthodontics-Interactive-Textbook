import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Chapter 1: An Introduction to Orthodontics"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref={undefined}
            nextHref="/chapters/chapter1/section1"
            chapterHref="/chapters/chapter1"
        >
            {/* Fish Image */}
            <div className='my-4 flex justify-center'>
                Fish image here
            </div>

            {/* Dentist Image */}
            <div className='my-4 flex justify-center'>
                Dentist image here
            </div>

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <strong>At</strong> Alumni luncheon for 8<sup>th</sup> IOC in Sep 2015 in Dubai when iConcepts was initiated it was apparent my
                    journey in Orthodontics has now spanned over several decades and there has been substantial changes in the treatment modalities
                    available in contemporary Orthodontics. Technological advances have provided elements of CAD CAM, 3D imaging precision imaging,
                    Clear Aligners Therapy with greater demand by patients and TADs with predictable anchorage to name just the major advances in
                    the field of Orthodontics. No one could have predicated all this at the turn of the 21st century and yet they are mainstream
                    today and patient driven who is aware of options available to get ideal treatment times to suit their busy lifestyles.
                </p>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    However, the area which has always fascinated me as a dedicated academician and with over 3 decades of experience in higher
                    education in leading universities captivated my imagination is the dissemination of information with technology, design of
                    delivery and long term retention of core knowledge. The world has become global more than ever before and on a click of www
                    and now AI, we are connected to unbelievable speed of execution of information delivery.
                </p>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Information explosion can overwhelm us, but what if we could use it to enhance our Higher Education system. So what would be
                    ideal learning experience?{' '}
                    <a
                        href="https://prezi.com/_vzykxq2q7f1/?utm_campaign=share&utm_medium=copy&rc=ex0share"
                        target="_blank"
                        className="text-red-500 hover:underline"
                    >
                        <strong>LEAN</strong>
                    </a>{' '}
                    of course! The concept is relatively new in Higher Education, it has significance since mind can accept and retain information
                    when provided in easy bits and concepts to provide solid foundation for future clinical practice.
                </p>

                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <strong>Aim</strong> of this simple monograph like its previous versions is to keep the core concepts “simplified” along with
                    key points in easy format for examination preparations and clinical dental chairside applications. The idea is that when you
                    are finished reading a module you have hopefully retained 80-100% of the information provided without feeling overburdened with
                    excessive text. LEAN is a concept that works on the principles of{' '}
                    <em>efficiency, effectiveness and continuous improvement</em>. The endeavor here is the same with added interactivity to be
                    clinic ready! Look forward to your comments on{' '}
                    <a
                        href="https://au.linkedin.com/in/dr-s-naser-ud-din-phd-morth-rcsed-msc-35962465"
                        target="_blank"
                        className="text-red-500 hover:underline"
                    >
                        <strong>LinkedIn</strong>
                    </a>
                    .
                </p>

            </div>

        </SectionPage>
    );
}
