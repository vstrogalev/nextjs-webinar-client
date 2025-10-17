import { getBrands } from '@/services/getBrands';
import { RacketsWithFilter } from './_components/RacketsWithFilter/RacketsWithFilter';
import { getRackets } from '@/services/getRackets';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'all rackets with filter by brand'
}

export default async function RacketsPage() {
  const brandsPromise = getBrands();
  const racketsPromise = getRackets(1, 20);
  const [{ isError: isBrandError, data: brands }, { isError: isRacketsError, data: rackets }] = await Promise.all([brandsPromise, racketsPromise]);

  if (isBrandError || isRacketsError) {
    return null
  }

  return <>
    <RacketsWithFilter brands={brands ?? []} rackets={rackets ?? []} />
  </>;
}
