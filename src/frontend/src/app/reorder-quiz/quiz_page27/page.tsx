"use client"; 
import { useRouter } from 'next/navigation'; 

import Link from 'next/link';
import styles from '../page.module.css';
import ReorderQuiz from '@/components/ReorderQuiz/ReorderQuiz'; // Path to your quiz component

export default function About() {
  const router = useRouter();

  const quiz_page27 = [
    'Increased Over Jet (OJ)', 
    'Posterior lateral crossbites', 
    'Proclined upper central and lateral incisors from Lateral Ceph radiograph', 
    'Improved lip competency with Clark Twin block in-situ'
  ];

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => router.back()} // Navigate back using updated useRouter
      >
        Go back
      </button>
      

      {/* Quiz Section */}
      <div className="quiz mt-10">
        <ReorderQuiz correctOrder={quiz_page27} />
      </div>

    </div>
  );
}

