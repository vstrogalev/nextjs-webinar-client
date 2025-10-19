import { getBrands } from '@/services/getBrands';
import { RacketsWithFilter } from './_components/RacketsWithFilter/RacketsWithFilter';
import { getRackets } from '@/services/getRackets';
import { Metadata } from 'next';
import { SWRConfig } from 'swr';
import { PATHS } from '@/constants/api';
import { MAX_ITEMS_PER_PAGE } from '@/constants/constants';

export const metadata: Metadata = {
  description: 'all rackets with filter by brand'
}

interface RacketsPageSearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RacketsPage({ searchParams }: RacketsPageSearchParams) {
  const { page = "1", brand } = await searchParams;

  let pageNumber = 1;
  if (typeof page === "string") {
    pageNumber = parseInt(page) || 1;
  }
  const brandName = typeof brand === 'string' ? brand : undefined;

  return <SWRConfig
    value={{
      fallback: {
        [`${PATHS.PRODUCTS}?page=${page}&limit=${MAX_ITEMS_PER_PAGE}&brand=${brand}`]: getRackets(pageNumber, MAX_ITEMS_PER_PAGE, brandName),
        [`${PATHS.BRANDS}`]: getBrands(),
      },
      revalidateOnFocus: false,
    }}
  >
    <RacketsWithFilter page={pageNumber} brand={brandName} />
  </SWRConfig>;
}
