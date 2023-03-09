import clsx from 'clsx';

import { useRouter } from 'next/router';
import { useState } from 'react';

import type { ReactElement } from 'react';

import AreaButton from '@element/AreaButton';

import MenuIcon from '@icon/Menu';
import Close from '@icon/Close';

import useBreakpoints from '@hook/useBreakpoints';

import { renderIf } from '@helper/react';

import MENU from '@config/menu';

interface IProps {
  className?: string;
}

const Menu = ({ className }: IProps): ReactElement => {
  const router = useRouter();

  const { greaterThan: screenGreaterThan } = useBreakpoints();

  const [menuOpen, setMenuOpen] = useState(false);

  return screenGreaterThan('lg') ? (
    <nav
      className={clsx([
        className,
        'fixed z-50 flex justify-end px-32 py-16 w-full',
        'bg-secondary bg-opacity-80'
      ])}
    >
      <ul className="flex flex-row gap-24">
        {MENU.map((page, index) => (
          <a
            href={page.path}
            className={clsx(
              'text-ternary font-medium uppercase',
              router.pathname !== page.path && 'opacity-50'
            )}
            key={page.path + index}
          >
            {page.name}
          </a>
        ))}
      </ul>
    </nav>
  ) : (
    <nav
      className={clsx([
        className,
        'fixed right-0 top-0 p-8 z-[60]',
        'flex flex-col items-end gap-y-6',
        menuOpen && 'h-screen w-screen bg-secondary'
      ])}
    >
      <AreaButton
        onClick={() => setMenuOpen(!menuOpen)}
        className="menu-icon mb-9"
      >
        {menuOpen ? (
          <Close
            width={32}
            height={32}
            className="stroke-primary transform scale-150"
          />
        ) : (
          <MenuIcon width={32} height={32} className="stroke-primary" />
        )}
      </AreaButton>

      {renderIf(
        menuOpen,
        MENU.map((page) => (
          <a
            href={page.path}
            className={clsx(
              'text-4xl text-ternary font-medium uppercase',
              router.pathname !== page.path && 'opacity-50'
            )}
          >
            {page.name}
          </a>
        ))
      )}
    </nav>
  );
};

export default Menu;
