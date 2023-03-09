import type { ReactElement, ReactNode } from 'react';

import clsx from 'clsx';

interface IProps {
  className?: string;
  href: string;
  children?: ReactNode;
}

const AnchorButton = ({ className, href, children }: IProps): ReactElement => {
  return (
    <a
      href={href}
      className={clsx([
        'border-b border-primary text-primary text-xl font-mono',
        className
      ])}
    >
      {children}
    </a>
  );
};

export default AnchorButton;
