import SectionPage from '@/components/sectionPage';

export default function page() {
    return (
        <SectionPage
            title="Section 1: Readings"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
            prevHref="/chapters/chapter6/intro"
            nextHref="/chapters/chapter6/video1"
            chapterHref="/chapters/chapter6"
        >

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    The topic of Post natal Cranio-facial growth is covered in Paediatric dentistry or Orthodontics E-books as both these specialties treat growing patients. 
                    These are available on the UoM Library at{' '}
                    <a
                        href="https://library.unimelb.edu.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://library.unimelb.edu.au/
                    </a>.
                </p>           
            </div>

            <div className="mb-8"> 
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Put these down in your To do List. 
                    Start with (A)  and then move on until you find the one you really like and save that as a PDF 
                    <strong> (concepts are same, just different words and images,  probably already know some of it from Head and Neck Anatomy consider this revision and refreshing learning):</strong>
                </p>         
                <ul className="list-disc pl-5 text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <li>
                        <strong>A:</strong> McDonald and Avery&apos;s Dentistry for the Child &amp; Adolescent 
                        <span className="font-semibold"> Chapter 21 Growth of the face and dental arches</span>
                    </li>
                    <li>
                        <strong>B:</strong> Paediatric dentistry by Richard Welbury 
                        <span className="font-semibold"> Chapter 1 </span> <span className="font-semibold underline"> Craniofacial growth and development</span>
                    </li>
                    <li>
                        <strong>C:</strong> Orthodontics: Principles and practice by Daljit Gill and Farhad Naini 
                        <span className="font-semibold"> Chapter 1 </span> <span className="font-semibold underline"> Growth and development</span> <span className="font-semibold"> (1.1 Introduction to human craniofacial growth &amp; development, 1.2 Development of the dentition)</span>
                    </li>
                    <li>
                        <strong>D:</strong> Current principles and techniques by Katherine Vig, Robert Vanarsdall, Lee Graber 
                        <span className="font-semibold"> Chapter 8 </span> <span className="font-semibold underline">Craniofacial Growth and Development.</span> <span className="font-semibold">(Postnatal growth of the Maxilla and Postnatal growth of the Mandible)</span>
                    </li>
                    <li>
                        <strong>E:</strong> Clinical success in early Orthodontic treatment by Antonio Patti &amp; Guy Perrier D&apos;Arc 
                        <span className="font-semibold"> Chapter 1 : </span> <span className="font-semibold underline">Normal Growth,</span> <span className="font-semibold">Chapter 2: </span> <span className="font-semibold underline">Establishment of occlusion.</span>
                    </li>
                    <li>
                        <strong>F:</strong> Handbook of Orthodontics by Martyn Cobourne, Edition 2.  
                        Look for Chapter 3 <span className="font-semibold underline">Postnatal growth of the craniofacial region</span>
                    </li>
                </ul>

            </div>
            
        </SectionPage>
    );
}
