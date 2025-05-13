import SectionPage from '@/components/sectionPage';

export default function privacyPage() {

  return (
    <SectionPage
      title="Privacy & Copyright" 
      subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"

    >
      <div className="my-6">
        <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
          Privacy Statement
        </h3>
        <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
            This website is designed to provide interactive learning tools for
            orthodontics students. We highly value your privacy and are
            committed to not collecting, storing, or analyzing any user personal
            data or learning behavior data (such as study time, quiz results,
            etc.). Currently, this website does not have any data collection or
            analysis capabilities. All interactive elements (such as quizzes,
            videos, etc.) are solely intended to enhance your learning
            experience and will not be used for academic evaluations.
        </p>
        <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
            If the system adds data collection and analysis functionality in the
            future, we will notify you in advance and update the privacy policy
            to ensure that your informed consent is obtained before collecting
            any data.
        </p>

        <div className="my-6" />

        <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
          Copyright Statement
        </h3>
        <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
            All content on this website, including but not limited to text,
            images, videos, and interactive elements, is based on the
            orthodontics textbook “iConcepts in Orthodontics” written by Dr. Shazia
            Naser-ud-Din and is protected by copyright law. Any unauthorized
            reproduction, distribution, modification, or commercial use of this
            website&apos;s content may result in intellectual property infringement
            and legal liability.
        </p>
        <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
            To protect copyright, technical measures may be implemented on
            this website to prevent users from copying text content from the web
            pages. We request all users to respect copyright and refrain from
            any form of content copying or distribution without permission. For
            inquiries regarding the legitimate use of content or related issues,
            please contact the website administrator.
        </p>

        <div className="my-6" />

        <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
          Terms of Use Statement
        </h3>
        <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
            The primary purpose of this website is to enhance the learning
            experience of students, and all interactive content is intended
            solely for supplementary learning. Students should be aware that
            these interactive features (such as quizzes, drag-and-drop
            questions, etc.) are not currently used for academic performance
            evaluations. We encourage teachers using this website for
            instruction to clearly inform students about the purpose of these
            features.
        </p>
        <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
            If the functionality of this website changes in the future, the
            terms of use will be updated accordingly, and users will be notified
            on the website of such updates.
        </p>
      </div>

    </SectionPage>
  ) 
}
