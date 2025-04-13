"use client"; // Add this at the top to mark this file as a Client Component

import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import styles from '../page.module.css';
import ReorderQuiz from '@/components/ReorderQuiz/ReorderQuiz'; // Path to your quiz component

export default function About() {
  const router = useRouter();

  const quiz_page23 = [
    'Oral Hygiene concern with WSL ( White Spot Lesions)', 
    'Anterior Localized crossbite (in midline) ', 
    'Severe crowding with no space for erupting 13 and 23', 
    'Potential Impaction of 45 to consider for future orthodontic Tx Planning  (OPG)'
  ];

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => router.back()}
      >
        Go back
      </button>
      

      {/* Quiz Section */}
      <div className="quiz mt-10">
        <ReorderQuiz correctOrder={quiz_page23} />
      </div>

    </div>
  );
}

