import { BASE_URL } from '@/constants/api';
import { Racket } from '@/types/racket';

export const racketsFetcher = async (path: string | Racket[] | undefined) => {
  if (typeof path !== "string" && path !== undefined) {
    return path;
  }

  const result = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
  });

  return result.json();
};
