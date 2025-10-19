'use client';

import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx'
import { Brand } from '@/types/brand';
import { BRAND_FILTER_ALL } from '@/constants/constants';
import useSWR from 'swr';
import { PATHS } from '@/constants/api';
import { fetcher } from '@/app/api/fetcher';
import { useRouter, useSearchParams } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import styles from './BrandFilter.module.css'

export const BrandFilter = () => {
  const [selectedBrandId, setSelectedBrandId] = useState(BRAND_FILTER_ALL);
  const searchParams = useSearchParams();
  const router = useRouter();

  const { data: brandsData } = useSWR(`${PATHS.BRANDS}`, fetcher<Brand[]>, {
    revalidateOnFocus: false, revalidateIfStale: false,
  })

  const initialBrands = brandsData?.data;
  const brands: Brand[] = useMemo(() => [{ id: BRAND_FILTER_ALL, name: 'All' }, ...(initialBrands ?? [])], [initialBrands]);

  useEffect(() => {
    const brandFromSearchParams = searchParams.get('brand');
    if (!brandFromSearchParams) {
      setSelectedBrandId(BRAND_FILTER_ALL);
      return
    };
    const brand = brands.find(brand => brand.name === brandFromSearchParams);
    if (!brand) {
      setSelectedBrandId(BRAND_FILTER_ALL);
      return
    };
    setSelectedBrandId(brand.id);
  }, [searchParams, brands])


  const handleClick = (brandId: number) => {
    setSelectedBrandId(brandId);

    const brand = brands.find(brand => brand.id === brandId);
    if (!brand) {
      return;
    }

    const newSearchParams = new URLSearchParams(searchParams);
    if (brandId === BRAND_FILTER_ALL) {
      newSearchParams.delete('brand')
    } else {
      newSearchParams.set('brand', brand.name);
    }

    router.replace(`${ROUTES.RACKETS}?${newSearchParams}`)
  }

  return (
    <aside className={styles.brandFilterContainer}>
      <div className={styles.title}>Бренд</div>

      <nav>
        <ul className={styles.links}>
          {brands.map(brand => (
            <li
              key={brand.id}
              onClick={() => handleClick(brand.id)}
              className={clsx(styles.link, { [styles.active]: brand.id === selectedBrandId })}
            >
              {brand.name}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
