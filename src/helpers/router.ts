/**
 * Get the origin of the actual URL
 * @returns The URL origin (e.g: https://google.com)
 */
export const getOrigin = (): string => {
  return typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : '';
};
