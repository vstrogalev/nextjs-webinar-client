import { BASE_URL, PATHS } from '@/constants/api';
import { ROUTES } from '@/constants/routes';

export const handleLogout = async () => {
  await fetch(`${BASE_URL}${PATHS.LOGOUT}`, {
    credentials: "include",
    method: "DELETE",
  });

  location.assign(ROUTES.ROOT);
};
