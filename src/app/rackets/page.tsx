'use client';

import { useState } from 'react';
import { BrandFilter } from '@/components/BrandFilter/BrandFilter';
import { mockRackets } from '@/constants/mockRackets';
import { getBrandList } from './utils';
import { RacketsList } from './_components/RacketsList/RacketsList';
import { BRAND_FILTER_ALL } from '@/constants/brandFilterAll';
import styles from "./page.module.css";

export default function RacketsPage() {
  const [selectedBrandId, setSelectedBrandId] = useState<number>(BRAND_FILTER_ALL);

  const filteredRackets = selectedBrandId === BRAND_FILTER_ALL ? mockRackets : mockRackets.filter(racket => racket.brand.id === selectedBrandId)

  const brandList = getBrandList(mockRackets);

  return (
    <section className={styles.page}>
      <BrandFilter brands={brandList} selectedBrandId={selectedBrandId} onSelect={setSelectedBrandId} />
      <RacketsList rackets={filteredRackets} />
    </section>
  );
}
