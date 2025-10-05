import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './layout.module.css';

export const Layout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className={styles.layout}>
    <Header />

    <section className={styles.content}>
      {children}
    </section>
    <Footer />
  </main>
}
