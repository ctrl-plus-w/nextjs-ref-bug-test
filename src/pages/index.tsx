import type { ReactElement } from 'react';

import ParticleAnimation from '@element/ParticleAnimation';

const Home = (): ReactElement => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row items-center justify-around min-h-screen p-8 lg:px-32 lg:py-16">
        <ParticleAnimation />

        <div className="flex flex-col items-center lg:items-end">
          <h1 className="text-[64px] lg:text-[78px] font-mono text-center lg:text-right mt-8">
            Lukas
          </h1>

          <p className="text-primaryLight text-center lg:text-right mt-12">
            Développeur web et designer indépendant <br /> Création
            d’applications web complexes
          </p>

          <a
            href="/contact"
            className="border-b border-primary text-primary text-xl font-mono mt-16"
          >
            Se rencontrer
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
