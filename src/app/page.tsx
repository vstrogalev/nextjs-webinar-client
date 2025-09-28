import { RacketsContainer } from './_components/RacketsContainer/RacketsContainer';
import { ROUTES } from '@/constants/routes';
import { getProducts } from '@/services/getProducts';
import { getTop10 } from '@/services/getTop10';
import { Rackets } from '@/components/Rackets/Rackets';
import styles from "./page.module.css";
import { Suspense } from 'react';

export default async function Home() {
  const racketsPromise = getProducts(1, 10);
  const top10Promise = getTop10();

  const [{ isError: isRacketsError, data: rackets = [] }, { isError: isTop10Error, data: top10Rackets = [] }] = await Promise.all([racketsPromise, top10Promise]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Suspense fallback={<div>Loading rackets...</div>}>
          {!isRacketsError && Boolean(rackets?.length) && <RacketsContainer title='Ракетки' href={ROUTES.RACKETS}>
            <Rackets rackets={rackets} />
          </RacketsContainer>}
        </Suspense>

        <Suspense fallback={<div>Loading top 10 rackets...</div>}>
          {!isTop10Error && Boolean(top10Rackets.length) && <RacketsContainer title='Топ 10' href={ROUTES.TOP_10} >
            <Rackets rackets={top10Rackets} />
          </RacketsContainer>}
        </Suspense>
      </main>
    </div>
  );
}
