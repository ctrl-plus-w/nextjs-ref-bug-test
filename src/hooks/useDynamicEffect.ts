import { useEffect, useLayoutEffect } from 'react';

const useDynamicEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useDynamicEffect;
