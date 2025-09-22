'use client';

import clsx from 'clsx'
import { Brand } from '@/types/brand';
import styles from './BrandFilter.module.css'

interface BrandFilterProps {
  brands: Brand[];
  selectedBrandId: Brand['id'];
  onSelect: (id: number) => void;
}

export const BrandFilter = ({ brands, selectedBrandId, onSelect }: BrandFilterProps) => {
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
