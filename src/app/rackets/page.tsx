import { getBrands } from '@/services/getBrands';
import { RacketsWithFilter } from './_components/RacketsWithFilter/RacketsWithFilter';
import { getProducts } from '@/services/getProducts';

export default async function RacketsPage() {
  const brandsPromise = getBrands();
  const racketsPromise = getProducts(1, 20);
  const [{ isError: isBrandError, data: brands }, { isError: isRacketsError, data: rackets }] = await Promise.all([brandsPromise, racketsPromise]);

  return <>
    {!isBrandError && !isRacketsError && <RacketsWithFilter brands={brands ?? []} initialRackets={rackets ?? []} />}
  </>;
}
