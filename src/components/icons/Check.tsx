import type { SVGProps } from 'react';

const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m17.875 5.5-9.625 11-4.125-4.125"
      stroke="inherit"
      strokeWidth={1.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Check;
