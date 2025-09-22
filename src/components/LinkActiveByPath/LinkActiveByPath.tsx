'use client';

import { clsx } from 'clsx'
import Link from 'next/link'
import styles from './LinkActiveByPath.module.css';
import { usePathname } from 'next/navigation';

interface LinkActiveByPathProps {
  href: string;
  label: string;
}

export const LinkActiveByPath = ({ href, label }: LinkActiveByPathProps) => {
  const path = usePathname();
  return (
    <Link href={href} className={clsx(styles.customLinkContainer, { [styles.active]: path === href })} >{label}</Link>
  )
}
