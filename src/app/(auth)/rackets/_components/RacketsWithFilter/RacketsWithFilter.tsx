'use client';

import { BrandFilter } from '@/components/BrandFilter/BrandFilter';
import { RacketsList } from '@/components/RacketsList/RacketsList';
import useSWR from 'swr';
import { PATHS } from '@/constants/api';
import { MAX_ITEMS_PER_PAGE } from '@/constants/constants';
import { fetcher } from '@/app/api/fetcher';
import { Racket } from '@/types/racket';
import styles from './RacketsWithFilter.module.css'

interface RacketsWithFilterProps {
  page: number,
  brand: string | undefined,
}

export const RacketsWithFilter = ({ page, brand }: RacketsWithFilterProps) => {

  const { data: racketsData } = useSWR(
    `${PATHS.PRODUCTS}?page=${page}&limit=${MAX_ITEMS_PER_PAGE}&brand=${brand}`,
    fetcher<Racket[]>, {
    revalidateOnFocus: false, revalidateIfStale: false,
  })

  const rackets = racketsData?.data;

  if (!rackets) {
    return <div>
      No rackets found...
    </div>
  }

  return (
    <section className={styles.racketsWithFilterContainer}>
      <BrandFilter />
      <RacketsList title='Ракетки' rackets={rackets} />
    </section>
  );
}
