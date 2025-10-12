'use client';

import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image'
import { PropsWithChildren } from 'react';
import styles from './RacketCard.module.css'

interface RacketCardProps extends PropsWithChildren {
  imageUrl: string;
  href?: string;
  className?: string;
}

export const RacketCard = ({ imageUrl, href, className, children }: RacketCardProps) => {
  return (
    <>
      {href && <Link href={href} className={clsx(styles.racketCardContainer, className)}>
        {getCardContent(imageUrl, children)}
      </Link>}

      {!href && <div className={clsx(styles.racketCardContainer, className)}>
        {getCardContent(imageUrl, children)}
      </div>}
    </>
  )
}

function getCardContent(imageUrl: string, children: React.ReactNode) {
  return <>
    <Image src={imageUrl} alt='racket image' className={styles.image} width={250} height={320} />
    {children}
  </>
}
