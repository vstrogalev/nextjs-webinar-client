import { BASE_URL } from '@/constants/api';

export const fetcher = async <T>(path: string, withAuth: boolean = false) => {
  const result = await fetch(`${BASE_URL}/${path}`, (withAuth ? {
    credentials: "include",
  } : undefined));

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { data: T } = await result.json();

  return { isError: false, data: data.data };
};
