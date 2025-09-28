'use client';

import { clsx } from 'clsx'
import NextLink from 'next/link'
import styles from './LinkActiveByPath.module.css';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

type LinkActiveByPathProps = ComponentProps<typeof NextLink>

export const LinkActiveByPath = ({ children, ...restProps }: LinkActiveByPathProps) => {
  const path = usePathname();
  const href = restProps.href;
  return (
    <NextLink {...restProps} className={clsx(styles.customLinkContainer, { [styles.active]: path === href })} >{children}</NextLink>
  )
}
