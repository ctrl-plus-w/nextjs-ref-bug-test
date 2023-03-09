import type { SVGProps } from 'react';

const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={26}
    viewBox="0 0 32 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path stroke="inherit" strokeWidth={2} d="M32 25H0M32 13H0M32 1H0" />
  </svg>
);

export default Menu;
