import { useUser } from '@/providers/UserProvider';
import { useMemo } from 'react';

export const useUserInfo = () => {
  const { user } = useUser();
  const isLoggedIn = useMemo(() => Boolean(user?.name), [user?.name])

  return { isLoggedIn }
}
