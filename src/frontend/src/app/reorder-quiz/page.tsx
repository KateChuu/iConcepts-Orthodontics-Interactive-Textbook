// reorder-quiz/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

export default function ReorderQuizHome() {
  return (
    <div className={styles.container}>
      <h1>Choose a Quiz</h1>
      <div className={styles.buttonContainer}>
        <Link href="/reorder-quiz/quiz_page22" className={styles.button}>
          Quiz 22
        </Link>
        <Link href="/reorder-quiz/quiz_page23" className={styles.button}>
          Quiz 23
        </Link>
        <Link href="/reorder-quiz/quiz_page27" className={styles.button}>
          Quiz 27
        </Link>
      </div>
    </div>
  );
}
