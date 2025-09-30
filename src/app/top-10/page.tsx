import { getTop10 } from '@/services/getTop10';
import { RacketsList } from '@/components/RacketsList/RacketsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'top 10 rackets'
}

export default async function Top10RacketsPage() {
  const { isError: isRacketsError, data: rackets = [] } = await getTop10();

  return <>
    {!isRacketsError && <RacketsList title='Топ 10' rackets={rackets} />}
  </>;
}
