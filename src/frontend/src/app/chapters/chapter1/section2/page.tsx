import SectionPage from '@/components/sectionPage';

export default function Page() {
    return (
        <SectionPage
            title="Section 2: Brief Historical Background"
            subtitle="Published in 2024 · Views: 11234 · Average Reading Time: 42min"
            prevHref="/chapters/chapter1/section1"
            nextHref="/chapters/chapter1/section3"
            chapterHref="/chapters/chapter1"
        >
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
                BRIEF HISTORICAL BACKGROUND OF ORTHODONTICS
            </h3>

            <p>
                The name of the specialty Orthodontics comes from three Greek words:
            </p>

            <ul className="list-disc list-inside pl-5">
                <li>Ortho – right or correct</li>
                <li>Odontos – teeth</li>
                <li>-ics – science</li>
            </ul>

            <p>
                In the second half of the 19th century, a lot of attention was being paid to the treatment of irregularity of teeth.
                In the early days, this sort of treatment was considered a part of prosthetic dentistry and was handled as a purely mechanical procedure.
                In 1880, Dr. Norman Kingsley (1829–1913), who is considered by many as the Father of Orthodontics, published his
                “Treatise on Oral Deformities as a Branch of Mechanical Surgery.” His major contribution was the occipital headgear.
                Nine years later, Simeon Guilford published <em>Orthodontia</em> – which became a standard text in dental colleges.
            </p>

            <p>
                However, the emergence of Orthodontics as a true specialty is largely the result of the efforts of one man –
                Edward Hartley Angle (1855–1930). Angle published his first book, <em>Malocclusion of Teeth</em> in 1887.
                He developed the classification of malocclusion based on the relationship of first molars, which is still used today.
                He introduced the concept of the Fixed appliance technique for the first time and revolutionized Orthodontics.
                Angle also established the American Society of Orthodontics, with him being the first President.
                Angle is widely known as the Father of Modern Orthodontics.
            </p>
        </SectionPage>
    );
}
