'use server';

import { BASE_URL, PATHS } from '@/constants/api';
import { Racket } from '@/types/racket';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

interface HandleFavoriteProps {
  racketId: Racket['id'];
  isFavorite?: boolean;
}

// server-action to demonstrate revalidateTag
export const handleFavoriteServer = async ({ racketId, isFavorite }: HandleFavoriteProps) => {
  const cookiesStore = await cookies();
  const url = `${BASE_URL}${PATHS.PRODUCT}/${racketId}${PATHS.FAVORITE}`

  await fetch(url, {
    method: isFavorite ? 'DELETE' : 'POST',
    headers: {
      Cookie: cookiesStore.toString(),
    }
  })

  revalidateTag('getRackets')
}
