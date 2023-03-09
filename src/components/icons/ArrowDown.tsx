import type { SVGProps } from 'react';

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.875 12.938 18 23.062l10.125-10.125"
      stroke="inherit"
      strokeWidth={3}
      strokeMiterlimit={10}
      strokeLinecap="square"
    />
  </svg>
);

export default ArrowDown;
