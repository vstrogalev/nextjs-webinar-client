'use client';

import styles from "./error.module.css";

export default function Error() {

  return (
    <div className={styles.errorContainer}>
      <h1>Error</h1>
      <h2>Code: 500</h2>
    </div>
  );
}
