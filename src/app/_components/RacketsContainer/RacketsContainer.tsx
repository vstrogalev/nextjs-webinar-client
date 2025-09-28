import { RacketsTitle } from '../RacketsTitle/RacketsTitle';

interface RacketsContainerProps {
  title: string;
  href: string;
  children: React.ReactNode
}

export const RacketsContainer = async ({ title, href, children }: RacketsContainerProps) => {
  return (
    <div>
      <RacketsTitle title={title} href={href} />
      {children}
    </div>
  )
}
