import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image'
import styles from './RacketCard.module.css'

interface RacketCardProps {
  imageUrl: string;
  href?: string;
  name?: string;
  className?: string;
}

export const RacketCard = ({ imageUrl, href, name = '', className }: RacketCardProps) => {

  return (
    <>
      {href && <Link href={href} className={clsx(styles.racketCardContainer, className)}>
        {getCardContent(imageUrl, name)}
      </Link>}

      {!href && <div className={clsx(styles.racketCardContainer, className)}>
        {getCardContent(imageUrl, name)}
      </div>}
    </>
  )
}

function getCardContent(imageUrl: string, name: string) {
  return <>
    <Image src={imageUrl} alt='racket image' className={styles.image} width={250} height={320} />
    {name && <p className={styles.name}>{name}</p>}
  </>
}
