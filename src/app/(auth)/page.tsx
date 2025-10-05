import { ROUTES } from '@/constants/routes';
import { getProducts } from '@/services/getProducts';
import { getTop10 } from '@/services/getTop10';
import { Suspense } from 'react';
import { RacketsContainer } from '@/components/RacketsContainer/RacketsContainer';

export default async function Home() {
  const racketsPromise = getProducts(1, 10);
  const top10Promise = getTop10();

  return (
    <>
      <Suspense fallback={<div>Loading rackets...</div>}>
        <RacketsContainer title='Ракетки' href={ROUTES.RACKETS} promise={racketsPromise} />
      </Suspense>

      <Suspense fallback={<div>Loading top 10 rackets...</div>}>
        <RacketsContainer title='Топ 10' href={ROUTES.TOP_10} promise={top10Promise} />
      </Suspense>
    </>
  );
}
