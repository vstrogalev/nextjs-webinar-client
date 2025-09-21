import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Header } from '@/app/_components/Header';
import { Footer } from '@/app/_components/Footer';
import styles from './layout.module.css';

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rackets shop",
  description: "nextjs learning project",
  icons: '/favicon.ico'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <div className={styles.layout}>
              <Header />

              <section className={styles.content}>
                {children}
              </section>

              <Footer />
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
