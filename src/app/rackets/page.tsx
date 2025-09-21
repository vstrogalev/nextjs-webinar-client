'use client';

import { useEffect, useState } from 'react';
import { BrandFilter } from '@/components/BrandFilter';
import { mockRackets } from '@/constants/mockRackets';
import { getBrandList } from './utils';
import { Brand } from '@/types/brand';
import { Racket } from '@/types/racket';
import { RacketsList } from './_components/RacketsList';
import styles from "./page.module.css";

export default function RacketsPage() {
  const [selectedBrandId, setSelectedBrandId] = useState<number>(-1);
  const [rackets, setRackets] = useState<Racket[]>([]);

  useEffect(() => {
    const filteredRackets = selectedBrandId === -1 ? mockRackets : mockRackets.filter(racket => racket.brand.id === selectedBrandId)
    setRackets(filteredRackets);
  }, [selectedBrandId])

  const brandList = getBrandList(mockRackets);

  const handleSelectBrand = (id: Brand['id']) => {
    setSelectedBrandId(id);
  }

  return (
    <section className={styles.page}>
      <BrandFilter brands={brandList} selectedBrandId={selectedBrandId} onSelect={handleSelectBrand} />
      <RacketsList rackets={rackets} />
    </section>
  );
}
