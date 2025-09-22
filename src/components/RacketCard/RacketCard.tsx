import Link from 'next/link';
import Image from 'next/image'
import styles from './RacketCard.module.css'

interface RacketCardProps {
  imageUrl: string;
  href?: string;
  name?: string;
}

export const RacketCard = ({ imageUrl, href, name }: RacketCardProps) => {

  return (
    <Link href={href ?? '#'} className={styles.racketCardContainer}>
      <Image src={imageUrl} alt='racket image' className={styles.image} width={250} height={320} />
      {name && <p className={styles.name}>{name}</p>}
    </Link>
  )
}
