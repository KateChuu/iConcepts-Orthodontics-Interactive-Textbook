import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';

export default function Section5FinalLecturePage() {
    return (
        <SectionPage
            title="Section 5: Final Lecture"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter5/section4"
            nextHref="/chapters/chapter6/intro"
            chapterHref="/chapters/chapter5"
        >
            <div className="mb-8">
                <VideoPlayer
                    cloudName="difs4tswt"
                    publicId="lecture-video-compressed_oiht5b"
                    sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1745115007/lecture-video-compressed_oiht5b.mp4"
                    videoId="Final_Lecture"
                    caption="Final lecture video of the course."
                />
            </div>

            <div className="text-sm md:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed space-y-4 max-w-3xl mx-auto px-4">
                <p>
                    This lightboard lecture with Prezi shows the steps in:
                </p>
                <ul className="list-disc list-inside pl-4">
                    <li>Diagnosis</li>
                    <li>Treatment planning</li>
                    <li>Logical deduction</li>
                    <li>Decision making for orthodontic cases</li>
                </ul>
                <p>
                    Including considerations for important issues like <strong>IOTN</strong> (Index of Orthodontic Treatment Needs).
                </p>
                <p>
                    With over 25 years of experience, Dr. Shazia Naser-ud-Din summarizes the decision-making process into a simple step-by-step sequence.
                </p>
                <p>
                    With Gratitude / Herzlichen Groß
                </p>
                <p className="italic">
                    Dr. S. Naser-ud-Din<br />
                    PhD Orthodontics (UniAdelaide), MSc (UCL), Membership in Orthodontics RCSEd.<br />
                    BDS, CFD, DPHDent (UniSydney), DCPSP-HPE, FICCDE<br />
                    Convenor DDS 2 & 4 | Orthodontics<br />
                    <a 
                        href="https://findanexpert.unimelb.edu.au/profile/1026392-shazia-naser-ud-din" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
                    >
                        Click here to view the Prezi presentation.
                    </a>
                </p>
                <iframe
                    src="https://prezi.com/p/embed/tZUgOi5bsVbcypTzSyYw/"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="w-full max-w-3xl h-[400px] rounded shadow-md"
                ></iframe>
            </div>

            <div className="mb-8">
                <iframe 
                    src="https://prezi.com/p/embed/tZUgOi5bsVbcypTzSyYw/"
                    id="iframe_container"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    webkitallowfullscreen
                    mozallowfullscreen
                    className="w-full h-auto aspect-video"
                />
            </div>

        </SectionPage>
    );
}
