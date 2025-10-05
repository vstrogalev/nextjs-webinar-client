'use client';

import { useActionState, useEffect } from 'react';
import { loginAction } from './login-action';
import { LoginState } from '@/types/login';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import styles from './page.module.css';

export default function LoginPage() {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<LoginState, FormData>(loginAction, { error: '' });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return <div className={styles.loginPageContainer}>
    <form className={styles.form} action={formAction}>
      <div className={styles.form__header}>
        <h2>Авторизация</h2>
        <p>Введите Ваш логин и пароль и нажмите `&quot;`Отправить`&quot;`</p>
        <div className={styles.registration}>
          <span>Если Вы не зарегистрированы, Вы можете зарегистрироваться &nbsp;</span>
          <Link href={ROUTES.SIGNUP} className={styles.link}>здесь</Link>
        </div>
      </div>

      <div className={styles.form__item}>
        <label htmlFor="login">Логин</label>
        <input type="text" name='login' required className={styles.input} />
      </div>

      <div className={styles.form__item}>
        <label htmlFor="password">Пароль</label>
        <input type='password' name='password' required className={styles.input} />
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <button type='submit' className={styles.button} disabled={isPending}>Отправить</button>
    </form>
  </div>;
}
