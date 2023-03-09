import type { MouseEvent, ReactElement, ReactNode } from 'react';

import clsx from 'clsx';

interface IProps {
  className?: string;
  children?: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const AreaButton = ({ className, children, onClick }: IProps): ReactElement => {
  return (
    <button
      onClick={onClick}
      className={clsx([
        'p-4 transform translate-x-4 -translate-y-4',
        className
      ])}
    >
      {children}
    </button>
  );
};

export default AreaButton;
