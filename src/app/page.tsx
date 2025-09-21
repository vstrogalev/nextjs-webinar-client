import { TitlePanel } from './_components/TitlePanel';
import { TopRackets } from './_components/TopRackets';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TitlePanel />
        <TopRackets />
      </main>
    </div>
  );
}
