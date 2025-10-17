import { BASE_URL, PATHS } from '@/constants/api'
import { Racket } from '@/types/racket';
import { APIResponse } from '@/types/response';
import { buildQueryString } from '@/utils/buildQueryString';
import { cookies } from 'next/headers';

export const getRackets = async (page: number = 1, limit?: number, brand?: string): Promise<APIResponse<Racket[]>> => {
  const cookieStore = await cookies();
  const queryString = buildQueryString({ page, limit, brand })
  const response = await fetch(`${BASE_URL}${PATHS.PRODUCTS}${queryString}`, {
    headers: {
      Cookie: cookieStore.toString()
    },
    next: {
      tags: ["getRackets"],
    },
  });

  if (response.status === 404) {
    return ({ isError: false, data: undefined })
  }

  if (!response.ok) {
    return ({ isError: true, data: undefined })
  }

  const data: Racket[] = await response.json();

  return ({ isError: false, data })
}
