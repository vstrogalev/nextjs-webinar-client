import { use } from 'react';
import { APIResponse } from '@/types/response';
import { RacketsTitle } from '../RacketsTitle/RacketsTitle';
import { notFound } from 'next/navigation';
import { Rackets } from '@/components/Rackets/Rackets';
import { Racket } from '@/types/racket';

interface RacketsContainerProps {
  title: string;
  href: string;
  promise: Promise<APIResponse<Racket[]>>
}

export const RacketsContainer = ({ title, href, promise }: RacketsContainerProps) => {
  const { isError, data } = use(promise);

  if (isError) {
    return (
      <div>Something went wrong. Update the page later.</div>
    )
  }

  if (!data) {
    notFound();
  }

  return (
    <div>
      <RacketsTitle title={title} href={href} />
      <Rackets rackets={data} />
    </div>
  )
}
