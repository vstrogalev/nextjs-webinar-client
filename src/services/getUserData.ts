import { BASE_URL, PATHS } from '@/constants/api'
import { User } from '@/types/user';
import { cookies } from 'next/headers';

interface UserResponse {
  login: string | undefined;
  isAdmin?: boolean;
}

export const getUserData = async () => {
  const cookieStore = await cookies();

  const response = await fetch(`${BASE_URL}${PATHS.USER}`, {
    credentials: "include",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (response.status === 401) {
    return ({ isError: false, data: undefined })
  }

  if (!response.ok) {
    return ({ isError: true, data: undefined })
  }

  const data: { user: UserResponse } = await response.json();
  const userData: User = {
    name: data.user.login,
    isAdmin: data.user.isAdmin,
  }

  return ({ isError: false, data: userData })
}
