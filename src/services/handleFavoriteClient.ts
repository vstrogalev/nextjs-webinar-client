import { BASE_URL, PATHS } from '@/constants/api';
import { Racket } from '@/types/racket';

interface HandleFavoriteProps {
  racketId: Racket['id'];
  isFavorite?: boolean;
}

export const handleFavoriteClient = async ({ racketId, isFavorite }: HandleFavoriteProps) => {
  const url = `${BASE_URL}${PATHS.PRODUCT}/${racketId}${PATHS.FAVORITE}`

  return await fetch(url, {
    method: isFavorite ? 'DELETE' : 'POST',
    credentials: 'include',
  })
}
