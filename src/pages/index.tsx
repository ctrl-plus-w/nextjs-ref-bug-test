import type { ReactElement } from 'react';

import Head from 'next/head';
import clsx from 'clsx';

import Card from '@module/Card';

import ParticleAnimation from '@element/ParticleAnimation';
import AnchorButton from '@element/AnchorButton';
import Separator from '@element/Separator';
import Header from '@element/Header';

const Home = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Lukas Laudrain - Création d'applications web</title>
        <meta
          name="description"
          content="Création de sites web et d'applications web en Loire-Atlantique et en Maine-Et-Loire."
        />
      </Head>

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

      <section
        className="flex flex-col p-8 lg:px-32 lg:py-16"
        id="accompaniement"
      >
        <Header type={2} className="font-mono text-primary">
          Votre accompagnement
        </Header>
        <Separator size="normal" />

        <article className="mt-14 pb-8">
          <Header type={4}>Entretiens préalable</Header>

          <p className="text-primaryLight w-[80%] md:w-80">
            Nous organisons une rencontre initiale pour aligner vos attentes
            avec la solution sur mesure que nous vous proposons.
          </p>

          <div
            className={clsx([
              'absolute top-1/3 left-[80%] md:left-[21rem]',
              'transform -translate-x-[2px] -translate-y-[1.375px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute bottom-[5%] right-[5%] md:right-10',
              'transform translate-x-[1.375px] translate-y-[2px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute right-[5%] bottom-[5%] left-[80%] top-1/3 md:left-[21rem] md:right-10',
              'border-t-[1.25px] border-r-[1.25px] border-ternary rounded-tr-xl'
            ])}
          ></div>
        </article>

        <article className="mt-2 pb-8">
          <Header type={4}>Le devis</Header>

          <p className="text-primaryLight text-right w-[80%] md:w-80">
            Nous établissons un devis détaillé en fonction de votre cahier des
            charges. Audit possible.
          </p>

          <div
            className={clsx([
              'absolute top-1/3 right-[80%] md:right-[21rem]',
              'transform translate-x-[2px] -translate-y-[1.375px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute bottom-[5%] left-[5%] md:left-10',
              'transform -translate-x-[1.375px] translate-y-[2px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute right-[80%] bottom-[5%] left-[5%] top-1/3 md:left-10 md:right-[21rem]',
              'border-t-[1.25px] border-l-[1.25px] border-ternary rounded-tl-xl'
            ])}
          ></div>
        </article>

        <article className="my-2">
          <Header type={4}>La conception</Header>

          <p className="text-primaryLight w-[80%] md:w-80">
            Nous créons votre solution unique en veillant à un suivi continu
            pour éviter tout imprévu
          </p>
        </article>

        <article className="pt-8">
          <Header type={4}>Assistance continue</Header>

          <p className="text-primaryLight text-right w-[80%] md:w-80">
            Nous sommes là pour vous aider, que ce soit pour des retouches ou
            des modifications après la finalisation du développement.
          </p>

          <div
            className={clsx([
              'absolute top-[5%] left-[5%] md:left-10',
              'transform -translate-y-[2px] -translate-x-[1.375px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute bottom-1/3 right-[80%] md:right-[21rem]',
              'transform translate-y-[1.375px] translate-x-[2px]',
              'h-1 w-1 bg-ternary rounded-full'
            ])}
          ></div>

          <div
            className={clsx([
              'absolute right-[80%] top-[5%] left-[5%] bottom-1/3 md:left-10 md:right-[21rem]',
              'border-b-[1.25px] border-l-[1.25px] border-ternary rounded-bl-xl'
            ])}
          ></div>
        </article>
      </section>

      <section className="flex flex-col items-end mt-16 p-8 lg:px-32 lg:py-16">
        <Header type={2} className="font-mono text-primary">
          Les offres
        </Header>
        <Separator size="normal" />

        <div className="flex flex-col gap-x-16 lg:flex-row lg:mt-14 w-full">
          <Card
            title="Site simple"
            description="Besoin d'un site pour présenter vôtre commerce ou vos services. Cette solution est pour vous."
            options={[
              {
                name: 'Design responsive',
                checked: true
              },
              {
                name: 'Accesibilité',
                checked: true
              },
              {
                name: 'Formulaire de contact',
                checked: true
              },

              {
                name: "Espace d'administration",
                checked: false
              },
              {
                name: 'Pages dynamique',
                checked: false
              },
              {
                name: 'Outils de gestion',
                checked: false
              }
            ]}
            className="flex-1 mt-14 lg:mt-0"
          />

          <Card
            title="Site complexe"
            description="Développement d'une application web, un outils interactif portable et hébergé."
            options={[
              {
                name: 'Design responsive',
                checked: true
              },
              {
                name: 'Accesibilité',
                checked: true
              },
              {
                name: 'Formulaire de contact',
                checked: true
              },

              {
                name: "Espace d'administration",
                checked: true
              },
              {
                name: 'Pages dynamique',
                checked: true
              },
              {
                name: 'Outils de gestion',
                checked: true
              }
            ]}
            className="flex-1 mt-10 lg:mt-0"
          />

          <Card
            title="Maintenance"
            description="Accompagnement, maintenance et révision après le projet."
            className="flex-1 mt-10 lg:mt-0"
            options={[
              {
                name: "Formules par nombre d'heures",
                checked: true
              }
            ]}
            dark
          />
        </div>
      </section>

      <section className="mt-16 mb-11 flex flex-col items-center">
        <p className="text-primary text-2xl font-medium text-center lg:max-w-xl">
          Une idée en tête ? Besoin d’aide pour vôtre transition digitale ?
        </p>

        <div className="relative my-8 h-16 w-[1.25px] bg-primary">
          <div className="absolute -top-[2px] -left-[1.375px] w-1 h-1 rounded-full bg-primary transform"></div>
          <div className="absolute -bottom-[2px] -left-[1.375px] w-1 h-1 rounded-full bg-primary transform"></div>
        </div>

        <a
          href="/contact"
          className="block rounded-xl bg-secondaryBright px-7 py-3 font-mono text-xl"
        >
          Se rencontrer
        </a>
      </section>
    </>
  );
};

export default Home;
