import { BASE_URL, PATHS } from '@/constants/api';
import { Racket } from '@/types/racket';

export const getRacketOgById = async ({ id }: { id: string }) => {
  const result = await fetch(`${BASE_URL}${PATHS.PRODUCT}/${id}`, {
    cache: "force-cache",
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: Racket } = await result.json();

  return { isError: false, data: data.product };
};
