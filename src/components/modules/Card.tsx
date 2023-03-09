import { useState } from 'react';

import type { ReactElement } from 'react';

import clsx from 'clsx';

import Header from '@element/Header';

import ArrowDown from '@icon/ArrowDown';
import Check from '@icon/Check';
import Close from '@icon/Close';

import useBreakpoints from '@hook/useBreakpoints';

import { renderIf } from '@helper/react';

interface IProps {
  title: string;
  description: string;
  options?: {
    name: string;
    checked: boolean;
  }[];

  dark?: boolean;

  className?: string;
}

const Card = ({
  title,
  description,
  options,
  className,
  dark = false
}: IProps): ReactElement => {
  const { greaterThan } = useBreakpoints();

  const [opened, setOpened] = useState(false);

  return (
    <article
      className={clsx([
        'flex flex-col p-8 rounded-xl',
        dark
          ? 'bg-[#332E21] border-[#201C0E]'
          : 'bg-[#FEF9ED] border-[#E5DFD0]',
        className
      ])}
    >
      <Header
        type={3}
        className={clsx([
          'font-mono mb-2',
          dark ? 'text-secondary' : 'text-primary'
        ])}
      >
        {title}
      </Header>
      <p className={clsx([dark ? 'text-secondaryLight' : 'text-primaryLight'])}>
        {description}
      </p>

      {renderIf(
        greaterThan('lg') || (opened && options != null && options.length > 0),
        (options || []).map(({ name, checked }, index) => (
          <div
            className={clsx([
              'flex gap-4 mb-2',
              !checked && 'opacity-60',
              index == 0 && 'mt-6'
            ])}
            key={index}
          >
            {checked ? (
              <Check
                className={clsx([dark ? 'stroke-secondary' : 'stroke-primary'])}
              />
            ) : (
              <Close
                className={clsx([dark ? 'stroke-secondary' : 'stroke-primary'])}
              />
            )}
            <p
              className={clsx([dark ? 'text-secondaryLight' : 'text-primary'])}
            >
              {name}
            </p>
          </div>
        ))
      )}

      {renderIf(
        !greaterThan('lg') && options != null && options.length > 0,
        <button
          className="flex items-center gap-2 mt-7"
          onClick={() => setOpened(!opened)}
        >
          <span
            className={clsx([
              'text-xl font-mono border-b',
              dark
                ? 'text-secondary border-secondary'
                : 'text-primary border-primary'
            ])}
          >
            En savoirs plus
          </span>

          <ArrowDown
            className={clsx([
              opened && 'rotate-90',
              dark ? 'stroke-secondary' : 'stroke-primary',
              'w-6 h-6'
            ])}
          />
        </button>
      )}
    </article>
  );
};

export default Card;
