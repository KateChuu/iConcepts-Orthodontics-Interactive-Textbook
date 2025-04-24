import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Preface"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref={undefined}
            nextHref="/chapters/chapter1/intro"
            chapterHref={undefined}
        >
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Precisely decade later 2026 have the pleasure to write the preface to the 4th edition on a futuristic format of online interactive text in Orthodontics. A project of lecture notes in high demand of students led to a simple easy readable and time effective monograph for clearing complex concepts in the multidimensional and multifactorial speciality of Orthodontics.
                </p>
            </div>
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    In the past 20 years in particular there has been a huge paradigm shift in our use of technological advances for both investigation and delivery of appliances in ever evolving field of dentistry in general and Orthodontics in particular. Online interactive CADCAM is engaging, rewarding and assists learner to be CLINIC ready. Aim is to have up to date resources in real time with contemporary skills & conserve TIME the most valuable and non renewable resource for learner!
                </p>
            </div>
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Hope you find this Exciting, Engaging and Empowering learning experience with Long Term Information Retention.
                </p>
            </div>
            <div className="mb-8">
                <p className="text-right text-zinc-700 dark:text-zinc-200 mb-1">
                    Shazia
                </p>
            </div>

            {/* Image */}
            <div className="my-4 flex justify-center space-x-4">
                <img
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114785/Dubai2013-22_vqkmqe.jpg"
                    className="h-64 w-auto object-contain"
                />
                <img
                    src="https://res.cloudinary.com/difs4tswt/image/upload/v1745114784/butterfly-world-map-mark-ashkenazi-21_y7gc6j.jpg"
                    className="h-64 w-auto object-contain"
                />
            </div>

        </SectionPage>
    );
}
