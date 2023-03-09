import type { ReactElement, ReactNode } from 'react';

interface IProps {
  className?: string;
  children?: ReactNode;
}

const Layout = ({ children }: IProps): ReactElement => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
