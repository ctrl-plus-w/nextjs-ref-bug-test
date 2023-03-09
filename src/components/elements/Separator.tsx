import clsx from 'clsx';

import type { ReactElement } from 'react';

type SeparatorSize = 'big' | 'normal';

interface IProps {
  size: SeparatorSize;
  noMargin?: boolean;
  className?: string;
}

const Separator = ({
  size,
  className,
  noMargin = false
}: IProps): ReactElement => {
  return (
    <div
      className={clsx([
        'separator h-1 bg-primary',
        size == 'big' && 'w-16',
        size == 'normal' && 'w-12',
        !noMargin && 'mt-2',
        className
      ])}
    ></div>
  );
};

export default Separator;
