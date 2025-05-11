import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Chapter 5: LEAN Study Methodology for Effective Learning"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter4/section5"
            nextHref="/chapters/chapter5/section1"
            chapterHref="/chapters/chapter5"
        >
            <div className="mb-8">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <img 
                        src="https://res.cloudinary.com/difs4tswt/image/upload/v1746507287/Screenshot_2025-05-06_at_2.54.36_pm_uzeexv.png"
                        alt="lean learning image" 
                        className="my-4 w-3/4 mx-auto" 
                    />
                </p>

            </div>

        </SectionPage>
    );
}
