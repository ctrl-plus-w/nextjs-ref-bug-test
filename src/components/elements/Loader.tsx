import type { ReactElement } from 'react';

import clsx from 'clsx';

interface IProps {
  className?: string;
}

const Loader = ({ className }: IProps): ReactElement => {
  return (
    <section
      className={clsx([
        'fixed h-screen w-screen bg-secondary z-[100]',
        className
      ])}
      id="loader"
    ></section>
  );
};

export default Loader;
