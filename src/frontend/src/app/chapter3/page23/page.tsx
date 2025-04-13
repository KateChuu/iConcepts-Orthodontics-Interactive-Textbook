import Footer from "@/components/Footer";
import PageNumber from "@/components/PageNumber";
import NavigationButton from "@/components/NavigationButton";
import InteractiveVideo from "@/components/InteractiveVideo";
import keyMoments from "@/components/InteractiveVideo/keyMoments";
import TypeableLearnerNotes from "@/components/TypeableLearnerNotes/TypeableLearnerNotes";
import Link from "next/link";

export default function Page23() {
  return (
    <div className="h-auto p-12 flex flex-col ml-4 mr-4 overflow-auto">
      <Link
        href="/reorder-quiz/quiz_page23"
        style={{
          position: "fixed", 
          top: "20px", 
          right: "20px", 
          backgroundColor: "#1d4ed8",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
          textAlign: "center",
          fontWeight: "600",
          display: "inline-block",
          transition: "background-color 0.3s ease",
          zIndex: 1000, 
        }}
      >
        Take Quiz
      </Link>
      <div className="flex flex-col w-full h-full gap-4">
        <h1 className="font-sans text-2xl md:text-4xl ml-40 font-bold mb-0 text-gray-800">
          Self Test
        </h1>

        {/* Video Section */}
        <div className="flex flex-col items-center justify-center mb-4 w-full">
          <div className="w-full flex items-center justify-center">
            <InteractiveVideo
              src="/interactive-videos/IteroPosteriorCrossbite.mov"
              keyMoments={keyMoments.IteroPosteriorCrossbite}
              className="w-full max-w-5xl h-auto"
            />
          </div>

          {/* Flex container for the two components */}
          <div className="flex w-full max-w-5xl mt-8">
            {/* Left Component */}
            <div className="flex-1 pr-4">
              <p className="font-sans text-sm md:text-base leading-relaxed text-left text-gray-700">
                Intra Oral scanning with heat maps for high occlusal loading
                <br />
                Observe the unilateral cross bite
              </p>
            </div>

            {/* Right Component */}
            <div className="flex-1 pl-4">
              <div className="bg-yellow-50 text-white p-4 text-center min-h-[200px] w-full">
                <p>Learner Notes</p>
                <TypeableLearnerNotes />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavigationButton direction="left" target="/chapter3/page22" />
      <NavigationButton direction="right" target="/chapter4/page24" />

      {/* Footer Component */}
      <Footer />

      {/* Page Number Component */}
      <PageNumber page={23} />
    </div>
  );
}