import { gsap } from 'gsap';

import type { ReactElement, ReactNode } from 'react';

import Footer from '@module/Footer';
import Menu from '@module/Menu';

import Loader from '@element/Loader';

import useDynamicEffect from '@hook/useDynamicEffect';
import useBreakpoints from '@hook/useBreakpoints';

import { renderIf } from '@helper/react';

import Curve from '@class/Curve';

import {
  Curve1,
  Curve2,
  Curve3,
  Curve4,
  Curve5,
  Curve6,
  Curve7,
  Curve8
} from '@config/curves';

interface IProps {
  className?: string;
  children?: ReactNode;
}

const Layout = ({ children }: IProps): ReactElement => {
  const { greaterThan } = useBreakpoints();

  useDynamicEffect(() => {
    const timeline = gsap.timeline();

    timeline.to('#loader', {
      opacity: 0,
      pointerEvents: 'none',
      delay: 0.5
    });

    timeline
      .fromTo(
        '#line1 svg',
        { strokeDasharray: '2000px', strokeDashoffset: '2000px' },
        {
          strokeDashoffset: 0,
          duration: 2
        }
      )
      .fromTo(
        '#line2 svg',
        { strokeDasharray: '2000px', strokeDashoffset: '-2000px' },
        {
          strokeDashoffset: 0,
          duration: 1
        },
        '<'
      )
      .from(
        '.separator',
        {
          width: 0
        },
        '<'
      )
      .from(
        'h1, h2, p, a, button, input, textarea',
        {
          opacity: 0,
          y: '1rem'
        },
        '<'
      )
      .from(
        '.menu-icon',
        {
          opacity: 0
        },
        ''
      );

    return () => {
      timeline.revert();
    };
  }, []);

  return (
    <>
      <Loader />

      <div className="absolute inset-0 h-full -z-10 overflow-hidden">
        <div
          className="line absolute top-0 -left-48 md:left-0 md:transform md:scale-150 md:origin-top-left"
          id="line1"
        >
          {Curve.reactCombinePaths(Curve1, Curve2)}
        </div>

        <div
          className="line absolute top-[30vh] -right-48 md:right-0 md:transform md:scale-150 md:origin-top-right"
          id="line2"
        >
          {Curve.reactCombinePaths(Curve3, Curve4)}
        </div>

        {renderIf(
          !greaterThan('lg'),
          <>
            <div
              className="line absolute top-[110vh] -left-18 md:left-0 md:transform md:scale-150 md:origin-top-left"
              id="line3"
            >
              {Curve.reactCombinePaths(Curve5, Curve6)}
            </div>

            <div
              className="line absolute bottom-32 right-0 md:transform md:scale-150 md:origin-bottom-right"
              id="line4"
            >
              {Curve.reactCombinePaths(Curve7, Curve8)}
            </div>
          </>
        )}
      </div>

      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
