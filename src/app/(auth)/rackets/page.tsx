import { getBrands } from '@/services/getBrands';
import { RacketsWithFilter } from './_components/RacketsWithFilter/RacketsWithFilter';
import { getRackets } from '@/services/getRackets';
import { Metadata } from 'next';
import { SWRConfig, unstable_serialize } from 'swr';
import { PATHS } from '@/constants/api';
import { MAX_ITEMS_PER_PAGE } from '@/constants/constants';
import { notFound } from 'next/navigation';
import { getKey } from './utils';

export const metadata: Metadata = {
  description: 'all rackets with filter by brand'
}

interface RacketsPageSearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RacketsPage({ searchParams }: RacketsPageSearchParams) {
  const { brand } = await searchParams;
  const searchBrand = typeof brand === 'string' ? brand : undefined;

  const { isError, data } = await getRackets(1, MAX_ITEMS_PER_PAGE, searchBrand);
  if (isError || !data) {
    return notFound();
  };

  const brandName = typeof brand === 'string' ? brand : undefined;

  return <SWRConfig
    value={{
      fallback: {
        [unstable_serialize(getKey(data, searchBrand))]: data,
        [`${PATHS.BRANDS}`]: getBrands(),
      },
      revalidateOnFocus: false,
    }}
  >
    <RacketsWithFilter brand={brandName} initialData={data} />
  </SWRConfig>;
}
