"use client";

import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";

export default function TermsPage() {
  const router = useRouter();

  return (
    <div className="h-auto p-12 flex flex-col">
      {/* Main Content Section */}
      <div className="flex flex-1 w-full gap-4">
        <div className="flex-1 flex flex-col pr-4 gap-2">
          <h2 className="font-sans text-xl md:text-2xl font-bold mb-2">
            Privacy Statement
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            This website is designed to provide interactive learning tools for
            orthodontics students. We highly value your privacy and are
            committed to not collecting, storing, or analyzing any user personal
            data or learning behavior data (such as study time, quiz results,
            etc.). Currently, this website does not have any data collection or
            analysis capabilities. All interactive elements (such as quizzes,
            videos, etc.) are solely intended to enhance your learning
            experience and will not be used for academic evaluations.
          </p>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            If the system adds data collection and analysis functionality in the
            future, we will notify you in advance and update the privacy policy
            to ensure that your informed consent is obtained before collecting
            any data.
          </p>

          <h2 className="font-sans text-xl md:text-2xl font-bold mb-2">
            Copyright Statement
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            All content on this website, including but not limited to text,
            images, videos, and interactive elements, is based on the
            orthodontics textbook “iConcepts in Orthodontics” written by Shazia
            Naser-ud-Din and is protected by copyright law. Any unauthorized
            reproduction, distribution, modification, or commercial use of this
            website&apos;s content may result in intellectual property infringement
            and legal liability.
          </p>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            To protect copyright, technical measures may be implemented on
            this website to prevent users from copying text content from the web
            pages. We request all users to respect copyright and refrain from
            any form of content copying or distribution without permission. For
            inquiries regarding the legitimate use of content or related issues,
            please contact the website administrator.
          </p>

          <h2 className="font-sans text-xl md:text-2xl font-bold mb-2">
            Terms of Use Statement
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            The primary purpose of this website is to enhance the learning
            experience of students, and all interactive content is intended
            solely for supplementary learning. Students should be aware that
            these interactive features (such as quizzes, drag-and-drop
            questions, etc.) are not currently used for academic performance
            evaluations. We encourage teachers using this website for
            instruction to clearly inform students about the purpose of these
            features.
          </p>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            If the functionality of this website changes in the future, the
            terms of use will be updated accordingly, and users will be notified
            on the website of such updates.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
