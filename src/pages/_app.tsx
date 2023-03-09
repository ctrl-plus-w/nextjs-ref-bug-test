import '@style/globals.css';

import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';

import Script from 'next/script';

import Layout from '@module/Layout';

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-EETSRYKHYP"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-EETSRYKHYP');
// </script>

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
