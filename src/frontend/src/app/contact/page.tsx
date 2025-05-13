import SectionPage from '@/components/sectionPage';

export default function contactPage() {

  return (
    <SectionPage
      title="Contact" 
      subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"

    >
      <div className="my-6">
        <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
          Author
        </h3>
        <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
          Dr. Shazia Naser-ud-Din
        </p>
        <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
          <a
            href="mailto:dr.shazia.icorthodontics@gmail.com"
            className="text-blue-500 underline"
          >
            dr.shazia.icorthodontics@gmail.com
          </a>
        </p>

        <div className="my-6" />

        <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
          Development Team - RedBack
        </h3>
        <table className="w-auto table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border border-gray-300 text-center">
                    Name
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-center">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Sangmoon Han",
                    email: "sangmoonh@student.unimelb.edu.au",
                  },
                  { name: "Po-Yun Hsiao", 
                    email: "phsiao@student.unimelb.edu.au" },
                  {
                    name: "Soyeon Park",
                    email: "soyeonp@student.unimelb.edu.au",
                  },
                  { name: "Man-Hua Chu", 
                    email: "manhuac@student.unimelb.edu.au" },
                  {
                    name: "Yu-Tse Ling",
                    email: "yutse@student.unimelb.edu.au",
                  },
                ].map((person, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="px-4 py-2 border border-gray-300 text-left">
                      {person.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-left">
                      <a
                        href={`mailto:${person.email}`}
                        className="text-blue-500 underline"
                      >
                        {person.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>

    </SectionPage>
  ) 
}
