'use client';

import { useState } from 'react';
import { BRAND_FILTER_ALL } from '@/constants/brandFilterAll';
import { BrandFilter } from '@/components/BrandFilter/BrandFilter';
import { Brand } from '@/types/brand';
import { Racket } from '@/types/racket';
import { RacketsList } from '@/components/RacketsList/RacketsList';
import styles from './RacketsWithFilter.module.css'

interface RacketsListProps {
  brands: Brand[];
  rackets: Racket[];
}

export const RacketsWithFilter = ({ brands: initialBrands = [], rackets = [] }: RacketsListProps) => {
  const [selectedBrandId, setSelectedBrandId] = useState<number>(BRAND_FILTER_ALL);

  return (
    <section className={styles.racketsWithFilterContainer}>
      <BrandFilter brands={initialBrands} selectedBrandId={selectedBrandId} onSelect={setSelectedBrandId} />
      <RacketsList title='Ракетки' rackets={rackets} />
    </section>
  );
}
