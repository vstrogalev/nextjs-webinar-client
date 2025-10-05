'use client';

import { useActionState, useEffect } from 'react';
import { signupAction } from './signup-action';
import { SignupState } from '@/types/signup';
import styles from './page.module.css';

export default function RegistrationPage() {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<SignupState, FormData>(signupAction, { error: '' });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return <div className={styles.signupPageContainer}>
    <form className={styles.form} action={formAction}>
      <div className={styles.form__header}>
        <h2>Регистрация</h2>
        <p>Введите Ваш логин и пароль и нажмите `&quot;`Отправить`&quot;`</p>
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
