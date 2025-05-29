import SectionPage from '@/components/sectionPage';
import VideoPlayer from '@/components/videoPlayer';

export default function Video1Page() {
    return (
        <SectionPage
            title="Video 1: Part 1DDS1 Growth & Development DrSND2023"
            subtitle=""
            prevHref="/chapters/chapter6/section1"
            nextHref="/chapters/chapter6/video2"
            chapterHref="/chapters/chapter6"
        >

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    3 part series on Cranio-Facial Growth its complexity and clarity in simple 20 mins sessions
                </p>           
            </div>

            {/* Video Player */}
            
            <VideoPlayer
                cloudName="difs4tswt"
                publicId="Part_1DDS1_Growth_-s1-full-2_ne8056"
                sourceUrl="https://res.cloudinary.com/difs4tswt/video/upload/v1746030972/Part_1DDS1_Growth_-s1-full-2_ne8056.mp4"
                videoId="Ch6_part1"
                caption="Dr Shazia Naser ud Din 2024"
            />

            <div className="mb-8 mt-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">Why do learners find Craniofacial growth so confusing and complex?</span>
                </p>
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li> <strong>Multiple Dimensions </strong></li>
                    <li> <strong>Different tissues development soft, hard osseous dental etc</strong></li>
                    <li> <strong>Changes from neonate to adult forms over the years </strong></li>
                </ul>           
            </div>

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <span className="bg-yellow-300 dark:bg-yellow-300 text-black dark:text-black px-1">
                        This simple easy to follow format with revision is related to embryology and growth through years. 
                        Terms and terminologies are explained with interactive drawings. 
                        With all 3 parts the learner will gain confidence in decision making on sound craniofacial growth and development foundations. 
                    </span>
                </p>   
            </div>

        </SectionPage>
    );
}
