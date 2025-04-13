"use client";

import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";

export default function TermsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <div className="flex flex-1 w-full gap-4">
        <div className="flex-1 flex flex-col pr-4 gap-2">
          <h2 className="font-sans text-xl md:text-2xl font-bold mb-2">
            Author
          </h2>
          <h2 className="font-sans text-sm md:text-lg font-bold mb-2">
            Dr. Shazia Naser-ud-Din
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed mb-2 text-justify">
            <a
              href="mailto:dr.shazia.icorthodontics@gmail.com"
              className="text-blue-500 underline"
            >
              dr.shazia.icorthodontics@gmail.com
            </a>
          </p>

          <h2 className="font-sans text-xl md:text-2xl font-bold mb-2 mt-4">
            Development Team
          </h2>
          <h2 className="font-sans text-lg md:text-lg font-bold mb-2">
            Redback
          </h2>
          <div className="overflow-x-auto">
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
                    name: "Chi Zhang",
                    email: "czzhang5@student.unimelb.edu.au",
                  },
                  { name: "Zhuyu Wu", email: "zhuyuw@student.unimelb.edu.au" },
                  {
                    name: "Xiaotong Luo",
                    email: "xialuo7@student.unimelb.edu.au",
                  },
                  { name: "Yuhao Yu", email: "yuhaoy5@student.unimelb.edu.au" },
                  {
                    name: "Shuangkun Fan",
                    email: "shuangkunf@student.unimelb.edu.au",
                  },
                ].map((person, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      {person.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
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

          <h2 className="font-sans text-lg md:text-lg font-bold mb-2">
            Bluering
          </h2>
          <div className="overflow-x-auto">
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
                    name: "Xiran Wang",
                    email: "xiran1@student.unimelb.edu.au",
                  },
                  {
                    name: "Wille Wang",
                    email: "yifewang14@student.unimelb.edu.au",
                  },
                  {
                    name: "Chih-Hsun Chen",
                    email: "chihhsunc@student.unimelb.edu.au",
                  },
                  {
                    name: "Mengna Sun",
                    email: "mengnas1@student.unimelb.edu.au",
                  },
                  {
                    name: "Yichi Zhang",
                    email: "yichiz9@student.unimelb.edu.au",
                  },
                ].map((person, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      {person.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
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
        </div>
      </div>
    </div>
  );
}
