import type { ReactElement } from 'react';

import Head from 'next/head';

import ParticleAnimation from '@element/ParticleAnimation';
import AnchorButton from '@element/AnchorButton';
import Separator from '@element/Separator';
import Header from '@element/Header';

const Home = (): ReactElement => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-around min-h-screen p-8 lg:px-32 lg:py-16">
        <ParticleAnimation className="w-80 h-80 lg:w-96 lg:h-96" />

        <div className="flex flex-col items-center lg:items-end">
          <Header type={1} className="font-mono text-center lg:text-right mt-8">
            Lukas
          </Header>
          <Separator size="big" />

          <p className="text-primaryLight text-center lg:text-right mt-12">
            Développeur web et designer indépendant <br /> Création
            d’applications web complexes
          </p>

          <AnchorButton href="/contact" className="mt-16">
            Se rencontrer
          </AnchorButton>
        </div>
      </section>
    </>
  );
};

export default Home;
