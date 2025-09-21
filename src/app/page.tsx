import { RacketsTitle } from './_components/RacketsTitle/RacketsTitle';
import { TopRackets } from './_components/TopRackets/TopRackets';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <RacketsTitle />
        <TopRackets />
      </main>
    </div>
  );
}
