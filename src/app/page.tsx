import { RacketsContainer } from './_components/RacketsContainer/RacketsContainer';
import { ROUTES } from '@/constants/routes';
import { getProducts } from '@/services/getProducts';
import { getTop10 } from '@/services/getTop10';
import { Rackets } from '@/components/Rackets/Rackets';
import styles from "./page.module.css";

export default async function Home() {
  const racketsPromise = getProducts(1, 10);
  const top10Promise = getTop10();

  const [{ isError: isRacketsError, data: rackets = [] }, { isError: isTop10Error, data: top10Rackets = [] }] = await Promise.all([racketsPromise, top10Promise]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {!isRacketsError && Boolean(rackets?.length) && <RacketsContainer title='Ракетки' href={ROUTES.RACKETS}>
          <Rackets rackets={rackets} />
        </RacketsContainer>}

        {!isTop10Error && Boolean(top10Rackets.length) && <RacketsContainer title='Топ 10' href={ROUTES.TOP_10} >
          <Rackets rackets={top10Rackets} />
        </RacketsContainer>}
      </main>
    </div>
  );
}
