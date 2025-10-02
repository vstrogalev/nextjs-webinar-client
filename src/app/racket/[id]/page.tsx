import { notFound } from 'next/navigation';
import { RacketDescription } from '@/components/RacketDescription/RacketDescription';
import { RacketCard } from '@/components/RacketCard/RacketCard';
import { getProductById } from '@/services/getProductById';
import { getMetadataProductById } from '@/services/getMetadataProductById';
import { Metadata } from 'next';
import styles from "./page.module.css";

interface RacketPageProps {
  params: Promise<{ id: string }>
}

export const generateMetadata = async ({ params }: RacketPageProps): Promise<Metadata | undefined> => {
  const { id } = await params;
  const racketId = Number(id);

  if (isNaN(racketId)) {
    console.error("***** [ ~ page.tsx ~ generateMetadata ~ racketId is not a number ]", racketId);
    return undefined
  };

  const { isError, data } = await getMetadataProductById(racketId)
  if (isError || !data) {
    console.error("***** [ ~ page.tsx ~ generateMetadata ~ error fetching metadata for racketId: ]", racketId);
  }

  return {
    title: data?.name,
    description: data?.description,
  }
}

export default async function RacketPage({ params }: RacketPageProps) {
  const { id } = await params;
  const racketId = Number(id);

  if (isNaN(racketId)) {
    notFound();
  };

  const { isError, data } = await getProductById(racketId);

  if (isError) {
    return (
      <div>Something went wrong. Update the page later.</div>
    )
  }

  if (!data) {
    notFound();
  }

  const { imageUrl, name, brand, description, price, userData } = data;
  const brandName = brand.name;
  const formattedPrice = price.toFixed(2);
  const isFavorite = userData?.isFavorite;

  return (
    <section className={styles.page}>
      <RacketDescription brand={brandName} name={name} description={description} isFavorite={isFavorite} />
      <RacketCard imageUrl={imageUrl} />
      <div className={styles.price}>{`€ ${formattedPrice}`}</div>
    </section>
  );
}
