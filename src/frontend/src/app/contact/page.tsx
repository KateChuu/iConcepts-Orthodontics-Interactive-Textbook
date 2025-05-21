'use client';

import SectionPage from '@/components/sectionPage';

export default function contactPage() {
    return (
        <SectionPage
            title="Contact"
            subtitle="Published in 2024 · Views: 19723 · Average Reading Time: 17min"
        >
            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Author
                </h3>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    Dr. Shazia Naser-ud-Din
                </p>
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200 mb-1">
                    <a
                        href="mailto:dr.shazia.icorthodontics@gmail.com"
                        className="text-blue-500 underline"
                    >
                        dr.shazia.icorthodontics@gmail.com
                    </a>
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 uppercase">
                    Development Team - RedBack
                </h3>
                <table className="w-full border my-4 border-zinc-300 text-sm text-zinc-800 dark:text-zinc-100">
                    <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800">
                            <th className="border border-zinc-300 p-2 text-left font-semibold">
                                Name
                            </th>
                            <th className="border border-zinc-300 p-2 text-left font-semibold">
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            {
                                name: 'Sangmoon Han',
                                email: 'sangmoonh@student.unimelb.edu.au',
                            },
                            {
                                name: 'Po-Yun Hsiao',
                                email: 'phsiao@student.unimelb.edu.au',
                            },
                            {
                                name: 'Soyeon Park',
                                email: 'soyeonp@student.unimelb.edu.au',
                            },
                            {
                                name: 'Man-Hua Chu',
                                email: 'manhuac@student.unimelb.edu.au',
                            },
                            {
                                name: 'Yu-Tse Ling',
                                email: 'yutse@student.unimelb.edu.au',
                            },
                        ].map((person, index) => (
                            <tr key={index}>
                                <td className="border border-zinc-300 p-2">
                                    {person.name}
                                </td>
                                <td className="border border-zinc-300 p-2">
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
    );
}
