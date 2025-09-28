import { BASE_URL, PATHS } from '@/constants/api'
import { Racket } from '@/types/racket';

export const getTop10 = async () => {
  const response = await fetch(`${BASE_URL}${PATHS.TOP_10}`);

  if (response.status === 404) {
    return ({ isError: false, data: undefined })
  }

  if (!response.ok) {
    return ({ isError: true, data: undefined })
  }

  const data: Racket[] = await response.json();

  return ({ isError: false, data })
}
