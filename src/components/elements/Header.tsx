import clsx from 'clsx';

import type { ReactElement, ReactNode } from 'react';

type HeaderType = 1 | 2 | 3 | 4;

interface IProps {
  type: HeaderType;
  className?: string;
  children?: ReactNode;
}

const Header = ({ type, className, children }: IProps): ReactElement => {
  switch (type) {
    case 1:
      return (
        <h1 className={clsx(['text-[64px] lg:text-[78px]', className])}>
          {children}
        </h1>
      );

    case 2:
      return (
        <h2 className={clsx(['text-[32px] lg:text-[38px]', className])}>
          {children}
        </h2>
      );

    case 3:
      return <h3 className={clsx(['text-[26px]', className])}>{children}</h3>;

    default:
      return (
        <h4 className={clsx(['text-[22px] font-medium', className])}>
          {children}
        </h4>
      );
  }
};

export default Header;
