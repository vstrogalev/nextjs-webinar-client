'use client';

import { useMemo } from 'react';
import clsx from 'clsx'
import { Brand } from '@/types/brand';
import { BRAND_FILTER_ALL } from '@/constants/brandFilterAll';
import styles from './BrandFilter.module.css'

interface BrandFilterProps {
  brands: Brand[];
  selectedBrandId: Brand['id'];
  onSelect: (id: number) => void;
}

export const BrandFilter = ({ brands: initialBrands, selectedBrandId, onSelect }: BrandFilterProps) => {
  const brands: Brand[] = useMemo(() => [{ id: BRAND_FILTER_ALL, name: 'All' }, ...initialBrands], [initialBrands]);

  return (
    <aside className={styles.brandFilterContainer}>
      <div className={styles.title}>Бренд</div>

      <nav>
        <ul className={styles.links}>
          {brands.map(brand => (
            <li
              key={brand.id}
              onClick={() => onSelect(brand.id)}
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
