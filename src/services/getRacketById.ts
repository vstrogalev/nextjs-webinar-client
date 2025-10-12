import { BASE_URL, PATHS } from '@/constants/api'
import { Racket } from '@/types/racket';
import { cookies } from 'next/headers';

export const getRacketById = async (id: number) => {
  const cookieStore = await cookies();
  const response = await fetch(`${BASE_URL}${PATHS.PRODUCT}/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (response.status === 404) {
    return ({ isError: false, data: undefined })
  }

  if (!response.ok) {
    return ({ isError: true, data: undefined })
  }

  const data: { product: Racket } = await response.json();

  return ({ isError: false, data: data.product })
}
