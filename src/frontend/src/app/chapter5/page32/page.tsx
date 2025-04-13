import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";

export default function Page32() {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* Grid with 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First column */}
        <div className="bg-gray-100 p-4">
          <h2 className="text-xl text-center font-bold mb-2">
            HOW TO STUDY EFFECTIVELY
          </h2>
          <p className="text-justify mb-4">
            Studying for any exam can be a daunting experience if one is not
            organized. It can be made less stressful and tense by studying
            regularly over the year. It may sound too much hard work, but
            actually there is an analogy for it. Just like at a marathon run,
            the runners who start off slowly but surely have greater chance to
            win, because as the runner approaches the finish line he speeds up
            and eventually wins it. This approach to study can help
            tremendously. As the student covers the concepts from day to day
            both in the lectures and during private study, it helps to reduce
            the workload towards the exam period. Likewise, it is never
            advisable to stay up late hours or work beyond the physiological
            capacity of mind and body during the exam months. Like the analogy
            above – no marathon runner runs the entire marathon on the eve of
            the event – he would surly be exhausted on the actual day of the
            performance!
          </p>
          <h2 className="text-xl text-center font-bold mb-2 text-purple-600/[.9]">
            STUDY METHOD
          </h2>
          <p>
            A study system devised by F.P Robinson (1961) has proved of value in
            college and university studies. It is called:
          </p>
          <p className="font-bold text-center">S Q 3 R</p>
          <p>S&nbsp;&nbsp;&nbsp;&nbsp;Survey</p>
          <p>Q&nbsp;&nbsp;&nbsp;&nbsp;Question</p>
          <p>R&nbsp;&nbsp;&nbsp;&nbsp;Read</p>
          <p>R&nbsp;&nbsp;&nbsp;&nbsp;Recite</p>
          <p>R&nbsp;&nbsp;&nbsp;&nbsp;Review</p>
          <p className="text-justify mt-4 mb-4">
            Initially survey or skim through the entire MODULE. Question
            yourself to awaken you interest and curiosity into the subject e.g.
            what could anchorage mean? what does treatment modality mean? in the
            interactive version you can also start with quizzes and ignite your
            intrigue about the subject matter.
          </p>
          <p className="text-justify mb-4">
            Read the content with undivided attention (hence all the material is
            provided user friendly format). Highlight and add notes mark the
            points you were unable to recall. This will enable you to see next
            time if you remember or not the points you missed out earlier. Use
            green self learning space to add notes.
          </p>
        </div>

        {/* Second column */}
        <div className="bg-gray-100 p-4">
          <h2 className="text-xl text-center font-bold mb-2 text-purple-600/[.9]">
            MESSAGE TO THE STUDENTS
          </h2>
          <p className="text-justify mb-4">
            Make a weekly or monthly planner with alerts on smart devices.
            Divide the study load into small and achievable segments. Try to
            achieve these small goals, they help to accomplish the larger ones.
            Reward yourself when a task is completed successfully. Be honest to
            yourself and evaluate yourself regularly. Follow the biological
            clock inside you, if you are an early bird, it is best for you to
            utilize fresh early morning hours for quiet study. If you are used
            to burning the midnight oil, stick to that routine. Self test helps
            to evaluate your performance and can build up your writing speed for
            the finals.
          </p>
          <p className="text-justify mb-4">
            Another good tip for exam preparation is to get to clinical relevant
            questions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-justify">
            <li>
              What are the different systems used to classify malocclusion?
              Discuss Angle’s and Andrew’s system is detail.
            </li>
            <li>
              What is Cephalometric analysis? Describe in detail its purposes?
            </li>
            <li>
              What tissue changes take place when teeth are moved under
              Orthodontic forces?
            </li>
            <li>
              Describe the effects of early loss of primary teeth. Explain with
              examples. What precautions will you take to minimize these
              effects?
            </li>
            <li>
              Define Orthodontics? Discuss the scope and limitations of
              Orthodontic treatment.
            </li>
            <li>
              Discuss the role of habits in causing malocclusion. What steps
              would you take to help such cases?
            </li>
            <li>
              What are Functional appliances? How do they work? Enumerate
              different types of Functional appliances. Give their indications
              and contra-indications.
            </li>
            <li>
              What are Fixed appliances in Orthodontics. Write the
              characteristics of fixed and removable appliances, keeping in view
              the essential requirements of an Orthodontic appliance.
            </li>
          </ul>
        </div>

        {/* Third column */}
        <div className="bg-gray-100 p-4">
          <ul className="list-disc pl-5 space-y-2 text-justify mb-4">
            <li>What is an Openbite? Discuss its etiology and treatment?</li>
            <li>
              Give a detailed account of anchorage support. Give examples.
            </li>
            <li>
              A patient 16 year presents excessive upper protrusion with lower
              anterior teeth touching the palate behind upper anteriors. How
              will you treat this case?
            </li>
            <li>
              What do you understand by Serial extractions? Is it a sound mode
              of treatment?
            </li>
            <li>
              Is patient dealing an important component of Orthodontic
              treatment? Write in detail.
            </li>
            <li>
              Why has Clark Twin Block suddenly become so popular? Describe the
              design and patient management in detail.
            </li>
          </ul>
          <p className="mb-4">Write short notes on:</p>
          <ul className="list-none space-y-2 mb-4">
            <li>- Cleft lip and palate patients</li>
            <li>- Expansion appliances</li>
            <li>- Bimaxillary protrusion</li>
            <li>- Flush terminal plane</li>
          </ul>
          <p className="mb-4 text-justify">
            As its aptly said: “begin with the end in mind” - Covey S in 7
            Habits of Highly effective people. Keep focus on achieving your
            goals and qualifications.
          </p>
          <h2 className="text-xl text-center font-bold mb-2 text-purple-600/[.9]">
            BE KIND TO YOURSELF
          </h2>
          <p className="mb-16">
            Finally during examination months be kind to yourself. Study well,
            eat a good diet, sleep well, avoid drugs and other substances.
          </p>
          <p className="font-bold">
            Wish you Good Luck and all the Best in Life !
          </p>
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter5/page31" />
      <NavigationButton direction="right" target="/chapter5/page33" />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={32} />
    </div>
  );
}
