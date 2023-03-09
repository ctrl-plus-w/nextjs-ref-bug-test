import type { ReactElement, ReactNode } from 'react';

import Footer from '@module/Footer';
import Menu from '@module/Menu';

import useBreakpoints from '@hook/useBreakpoints';

interface IProps {
  className?: string;
  children?: ReactNode;
}

const Layout = ({ children }: IProps): ReactElement => {
  const { greaterThan } = useBreakpoints();

  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
