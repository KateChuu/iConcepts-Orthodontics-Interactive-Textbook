// src/app/quiz/page.tsx
import Link from 'next/link';
import styles from './page.module.css'; // 导入 CSS 模块
import DragAndDropQuiz from '@/components/DragAndDropQuiz/DragAndDropQuiz'; // Path to your quiz component

export default function About() {
  return (
    <div>
      <h1>Quiz page</h1>
      <Link href="/"
        className={styles.button}>Go back to Home
      </Link>
      

      {/* Quiz Section */}
      <div className="quiz mt-10">
        <DragAndDropQuiz />
      </div>

    </div>
  );
}

