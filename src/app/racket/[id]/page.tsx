import { notFound } from 'next/navigation';
import { RacketDescription } from '@/components/RacketDescription/RacketDescription';
import { RacketCard } from '@/components/RacketCard/RacketCard';
import styles from "./page.module.css";
import { getProductById } from '@/services/getProductById';

interface RacketPageProps {
  params: Promise<{ id: string }>
}

export default async function RacketPage({ params }: RacketPageProps) {
  const { id } = await params;

  const { isError, data } = await getProductById(Number(id))
  if (!isError && !data) {
    notFound();
  }

  if (!data) {
    return (
      <div>No data.</div>
    )
  }

  const { imageUrl, name, brand, description, price } = data;
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
