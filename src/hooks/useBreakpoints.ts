import { useEffect, useState } from 'react';

import useWindowSize from '@hook/useWindowSize';

import tailwindConfig from 'tailwind.config';

interface IScreens {
  [key: string]: string;
}

const DEFAULT_SCREENS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

const useBreakpoints = () => {
  const windowSize = useWindowSize();

  const [screens] = useState(
    (tailwindConfig.theme?.screens || DEFAULT_SCREENS) as IScreens
  );

  const greaterThan = (media: string) => {
    if (!Object.keys(screens).includes(media) || !windowSize.width) return true;

    return windowSize.width >= parseInt(screens[media].slice(0, -2));
  };

  const getScreen = (size: { width?: number; height?: number }) => {
    if (!size.width) return Object.keys(screens)[0];

    for (const media in screens) {
      const breakpoint = parseInt(screens[media].slice(0, -2));
      if (Number.isNaN(breakpoint)) continue;

      if (size.width > breakpoint) return media;
    }

    return Object.keys(screens)[0];
  };

  const [screen, setScreen] = useState(getScreen(windowSize));

  useEffect(() => {
    setScreen(getScreen(windowSize));
  }, [windowSize]);

  return { screen, greaterThan };
};

export default useBreakpoints;
