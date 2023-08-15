import DropBody from "./components/DropBody/DropBody";
import DropImage from "./components/DropImage/DropImage";
import Image from "next/image";
import Navbar from "./components/Navbar";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.drop}>
        <DropBody />
        <DropImage />
      </div>
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Docs</h2>
        </a>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Learn</h2>
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Templates</h2>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Deploy</h2>
        </a>
      </div>
    </main>
  );
}
