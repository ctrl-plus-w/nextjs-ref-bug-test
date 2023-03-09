import { useRouter } from 'next/router';

import type { MouseEvent, ReactElement } from 'react';

import clsx from 'clsx';

import Header from '@element/Header';

import { getOrigin } from '@helper/router';

import FOOTER from '@config/footer';

interface IProps {
  className?: string;
}

const Footer = ({ className }: IProps): ReactElement => {
  const router = useRouter();
  const origin = getOrigin();

  const onClickRelativePath =
    (path: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      router.push(path);
    };

  return (
    <footer
      className={clsx(
        'flex flex-col w-full px-8 lg:px-32 xl:px-48 pt-12 pb-8',
        'bg-secondaryBright',
        className
      )}
    >
      <div className="flex flex-row flex-wrap justify-between gap-x-16 gap-y-16 mb-14">
        {FOOTER.map((section) => (
          <nav className="flex flex-col gap-3" key={section.name}>
            <Header type={4} className="text-primary font-mono mb-[10px]">
              {section.name}
            </Header>

            {section.links.map((link, index) => {
              const props: { [key: string]: any } = {
                className: 'text-primaryLight',
                key: section.name + index,
                href: link.path
              };

              if (link.relative) {
                props.onClick = onClickRelativePath(link.path);
              } else {
                props.target = '_blank';
              }

              return <a {...props}>{link.name}</a>;
            })}
          </nav>
        ))}
      </div>

      <a href="#" className="text-xs text-primaryLight text-center">
        2023 ©Copyright Lukas Laudrain - Mentions légales Politique de
        confidentialité
      </a>
    </footer>
  );
};

export default Footer;
