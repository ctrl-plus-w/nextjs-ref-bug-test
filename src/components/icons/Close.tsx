import type { SVGProps } from 'react';

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.813 15.813 6.187 6.187m9.625 0-9.624 9.625"
      stroke="inherit"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.6}
    />
  </svg>
);

export default Close;
