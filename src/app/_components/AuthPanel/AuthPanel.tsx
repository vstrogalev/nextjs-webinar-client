'use client';

import { ROUTES } from '@/constants/routes'
import { useUser } from '@/providers/UserProvider';
import { LinkActiveByPath } from '@/components/LinkActiveByPath/LinkActiveByPath';
import { handleLogout } from './utils';
import styles from './AuthPanel.module.css'

export const AuthPanel = () => {
  const { user } = useUser();
  const userName = user.name;

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
