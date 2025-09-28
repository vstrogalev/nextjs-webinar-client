import { BASE_URL, PATHS } from '@/constants/api'
import { Brand } from '@/types/brand';
import { APIResponse } from '@/types/response';

export const getBrands = async (): Promise<APIResponse<Brand[]>> => {
  const response = await fetch(`${BASE_URL}${PATHS.BRANDS}`);

  if (response.status === 404) {
    return ({ isError: false, data: undefined })
  }

  if (!response.ok) {
    return ({ isError: true, data: undefined })
  }

  const data: Brand[] = await response.json();

  return ({ isError: false, data })
}
