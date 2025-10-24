import { PATHS } from '@/constants/api';
import { MAX_ITEMS_PER_PAGE } from '@/constants/constants';
import { Racket } from '@/types/racket';

export const getKey = (initialData: Racket[], brand: string | undefined) => {
  return (page: number) => {
    if (page === 0 && typeof window !== undefined && initialData) {
      return initialData;
    }

    return `${PATHS.PRODUCTS}?page=${page + 1}&limit=${MAX_ITEMS_PER_PAGE}${brand ? '&brand=${brand}' : ''}`;
  };
};
