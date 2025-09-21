import { mockRackets } from '@/constants/mockRackets';
import { notFound } from 'next/navigation';
import { RacketDescription } from '@/components/RacketDescription';
import { RacketCard } from '@/components/RacketCard';
import styles from "./page.module.css";

interface RacketPageProps {
  params: Promise<{ id: string }>
}

export default async function RacketPage({ params }: RacketPageProps) {
  const { id } = await params;
  const racket = mockRackets.find(racket => racket.id === Number(id));
  if (!racket) {
    notFound();
  }

  const { imageUrl, name, brand, description, price } = racket;
  const brandName = brand.name;
  const formattedPrice = price.toFixed(2);

  return (
    <section className={styles.page}>
      <RacketDescription brand={brandName} name={name} description={description} />
      <RacketCard imageUrl={imageUrl} />
      <div className={styles.price}>{`€ ${formattedPrice}`}</div>
    </section>
  );
}
