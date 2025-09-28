'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { BRAND_FILTER_ALL } from '@/constants/brandFilterAll';
import { BrandFilter } from '@/components/BrandFilter/BrandFilter';
import { RacketsList } from '../../../../components/RacketsList/RacketsList';
import { Brand } from '@/types/brand';
import { Racket } from '@/types/racket';
import { getProducts } from '@/services/getProducts';
import styles from './RacketsWithFilter.module.css'

interface RacketsListProps {
  brands: Brand[];
  initialRackets: Racket[];
}

export const RacketsWithFilter = ({ brands: initialBrands = [], initialRackets = [] }: RacketsListProps) => {
  const [selectedBrandId, setSelectedBrandId] = useState<number>(BRAND_FILTER_ALL);
  const [rackets, setRackets] = useState(initialRackets);

  const brands: Brand[] = useMemo(() => [{ id: BRAND_FILTER_ALL, name: 'All' }, ...initialBrands], [initialBrands]);

  const getFilteredRackets = useCallback(async () => {
    const brand = brands.filter(brand => {
      return brand.id === selectedBrandId && brand.id !== BRAND_FILTER_ALL;
    });
    const brandParam = brand.length > 0 ? brand[0].name : undefined;

    try {
      const { isError, data } = await getProducts(1, 20, brandParam)
      if (isError) {
        setRackets([])
      }

      setRackets(data ?? []);
    } catch (error) {
      console.log("***** [ ~ RacketsWithFilter.tsx ~ getFilteredRackets ~ error ]", error);
    }
  }, [brands, selectedBrandId])

  useEffect(() => {
    getFilteredRackets();
  }, [selectedBrandId, getFilteredRackets])


  return (
    <section className={styles.racketsWithFilterContainer}>
      <BrandFilter brands={brands} selectedBrandId={selectedBrandId} onSelect={setSelectedBrandId} />
      <RacketsList title='Ракетки' rackets={rackets} />
    </section>
  );
}
