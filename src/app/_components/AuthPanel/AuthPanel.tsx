'use client';

import { ROUTES } from '@/constants/routes'
import { useUser } from '@/providers/UserProvider';
import { LinkActiveByPath } from '@/components/LinkActiveByPath/LinkActiveByPath';
import { useRouter } from 'next/navigation';
import { BASE_URL, PATHS } from '@/constants/api';
import styles from './AuthPanel.module.css'

export const AuthPanel = () => {
  const { user } = useUser();
  const router = useRouter();
  const userName = user.name;

  const handleLogout = async () => {
    await fetch(`${BASE_URL}${PATHS.LOGOUT}`, {
      credentials: "include",
      method: "DELETE",
    });

    router.replace(ROUTES.ROOT)
  };

  return (
    <nav className={styles.authPanelContainer}>
      {userName
        ? (<div className={styles.user}>
          <div>{userName}</div>
          <button onClick={handleLogout}>Выйти</button>
        </div>)
        : (
          <LinkActiveByPath href={ROUTES.LOGIN}>Логин/Регистрация</LinkActiveByPath>
        )}
    </nav>
  )
}
