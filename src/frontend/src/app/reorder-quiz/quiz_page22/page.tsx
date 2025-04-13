"use client"; // Add this at the top to mark this file as a Client Component

import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import styles from '../page.module.css';
import ReorderQuiz from '@/components/ReorderQuiz/ReorderQuiz';

export default function About() {
  const router = useRouter();

  const quiz_page22 = [
    'Unilateral Posterior crossbite on LHS ( Left Hand Side)',
    'Heavy occlusal loading on molars ( Heat maps on Occlusograms)',
    'Dental wear on incisors',
  ];

  return (
    <div>
      {/* Go back button */}
      <button
        className={styles.button}
        onClick={() => router.back()} // Navigate back using updated useRouter
      >
        Go back
      </button>

      {/* Quiz Section */}
      <div className="quiz mt-10">
        <ReorderQuiz correctOrder={quiz_page22} />
      </div>
    </div>
  );
}
