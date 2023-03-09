import type { ReactElement } from 'react';

import Content from '../components/Content';

const Home = (): ReactElement => {
  return (
    <main className='min-h-screen flex justify-center items-center'>
      <Content />
    </main>
  );
};

export default Home;
