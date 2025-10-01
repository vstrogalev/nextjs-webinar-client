'use client';

import styles from './globalError.module.css';

export default function GlobalErrorPage() {
  return (
    <html lang="ru">
      <body className={styles.globalError}>
        <h1>Global error</h1>
        <h2>Code: 500</h2>
      </body>
    </html>
  );
}
