'use client';

import { BrandFilter } from '@/components/BrandFilter/BrandFilter';
import { RacketsList } from '@/components/RacketsList/RacketsList';
import { MAX_ITEMS_PER_PAGE } from '@/constants/constants';
import { racketsFetcher } from '@/app/api/racketsFetcher';
import { Racket } from '@/types/racket';
import useSWRInfinite from 'swr/infinite';
import { getKey } from '../../utils';
import styles from './RacketsWithFilter.module.css'

interface RacketsWithFilterProps {
  initialData: Racket[];
  brand: string | undefined,
}

export const RacketsWithFilter = ({ brand, initialData }: RacketsWithFilterProps) => {
  const { data, error, isLoading, size, setSize } = useSWRInfinite<Racket[]>(
    getKey(initialData, brand),
    racketsFetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateFirstPage: false,
      parallel: true,
    }
  );

  const rackets: Racket[] = data ? ([] as Racket[]).concat(...data) : [];

  const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < MAX_ITEMS_PER_PAGE);

  if (error) {
    return "some error";
  }

  if (isLoading && !rackets.length) {
    return "isInitialLoading...";
  }

  if (isEmpty) {
    return "no rackets";
  }

  return (
    <section className={styles.racketsWithFilterContainer}>
      <BrandFilter />

      <RacketsList
        title='Ракетки'
        rackets={rackets}
        pagination={{
          isLoadingMore: !!isLoadingMore,
          isReachingEnd: !!isReachingEnd,
          onLoadMoreClick: () => setSize(size + 1),
        }}
      />
    </section>
  );
}
