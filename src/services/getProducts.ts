import { BASE_URL, PATHS } from '@/constants/api'
import { Racket } from '@/types/racket';
import { APIResponse } from '@/types/response';
import { buildQueryString } from '@/utils/buildQueryString';

export const getProducts = async (page: number = 1, limit?: number, brand?: string): Promise<APIResponse<Racket[]>> => {
  const queryString = buildQueryString({ page, limit, brand })
  const response = await fetch(`${BASE_URL}${PATHS.PRODUCTS}${queryString}`);

  if (response.status === 404) {
    return ({ isError: false, data: undefined })
  }

  if (!response.ok) {
    return ({ isError: true, data: undefined })
  }

  const data: Racket[] = await response.json();

  return ({ isError: false, data })
}
