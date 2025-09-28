import { getTop10 } from '@/services/getTop10';
import { RacketsList } from '@/components/RacketsList/RacketsList';

export default async function Top10RacketsPage() {
  const { isError: isRacketsError, data: rackets = [] } = await getTop10();

  return <>
    {!isRacketsError && <RacketsList title='Топ 10' rackets={rackets} />}
  </>;
}
