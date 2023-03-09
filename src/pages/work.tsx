import Image from 'next/image';
import Head from 'next/head';
import clsx from 'clsx';

import type { ReactElement } from 'react';

import Header from '@element/Header';
import Separator from '@element/Separator';

import LongArrowDown from '@icon/LongArrowDown';

import useBreakpoints from '@hook/useBreakpoints';

import { renderIf } from '@helper/react';

import appExampleImage1 from '../../public/images/app_example_1.png';
import appExampleImage2 from '../../public/images/app_example_2.png';
import appExampleImage3 from '../../public/images/app_example_3.png';

const Work = (): ReactElement => {
  const { greaterThan } = useBreakpoints();

  return (
    <>
      <Head>
        <title>Lukas Laudrain - Mon travail</title>
        <meta
          name="description"
          content="Création de sites web et d'applications web. Liste non-exhaustive des travaux et projets que j'ai réalisé."
        />
      </Head>

      <section className="flex flex-col min-h-screen px-8 pt-32 pb-16 lg:px-32 lg:py-0 lg:justify-center">
        <Header type={1} className="font-mono text-primary">
          Mon travail
        </Header>
        <Separator size="big" />

        <p className="text-primaryLight mt-16 lg:max-w-2xl">
          En tant qu'entrepreneur passionné par l'informatique depuis mon plus
          jeune âge, j'ai commencé à explorer la programmation à l'école. Au fil
          des ans, j'ai développé mes compétences de manière autodidacte et j'ai
          fondé ma propre entreprise de développement web.
          <br />
          <br />
          Je considère chaque projet comme une opportunité unique de travailler
          en étroite collaboration avec mes clients afin de garantir leur
          satisfaction totale. Je suis convaincu que le respect des attentes et
          la compréhension approfondie des besoins de mes clients sont la clé
          d'un projet réussi. C'est pourquoi je consacre tous mes efforts à
          établir une relation de confiance avec chaque client pour garantir une
          expérience de qualité supérieure.
        </p>

        {renderIf(
          !greaterThan('md'),
          <div className="mt-auto self-center ">
            <LongArrowDown className="mt-8 stroke-primary" />
          </div>
        )}
      </section>

      <section className="px-8 py-16 lg:py-32 md:px-32 2xl:px-64">
        <Header type={2} className="font-mono">
          Gestion d’emplois du temps
        </Header>
        <Separator size="normal" />

        <div className="relative flex flex-col 2xl:flex-row">
          <p className="text-primaryLight mt-16 text-justify lg:max-w-3xl">
            L'évaluation traditionnelle sur feuilles peut ne pas être à la
            hauteur des attentes en matière d'évaluation des compétences des
            élèves. De plus, la correction de ces évaluations peut être longue
            et fastidieuse pour les enseignants. C'est pour simplifier leur
            travail que j'ai développé une application web innovante.
            <br />
            <br />
            L'objectif principal était de proposer une solution dynamique pour
            les évaluations, en offrant différentes options de questions, telles
            que les questions à choix multiples, les réponses libres,
            numériques, textuelles, et bien plus encore. L'application a été
            conçue pour répondre à ces défis et offrir une gamme complète de
            fonctionnalités pour améliorer l'expérience de l'utilisateur.
          </p>

          <Image
            src={appExampleImage1}
            alt="Project1 Image"
            className="mt-16 transform scale-125"
          />
        </div>
      </section>

      <section className="flex flex-col items-end justify px-8 py-16 lg:py-32 md:px-32 2xl:px-64">
        <Header type={2} className="font-mono">
          Gestion de QCM
        </Header>
        <Separator size="normal" />

        <div
          className={clsx([
            'flex flex-col justify-between items-center',
            'lg:items-end lg:max-w-3xl 2xl:max-w-full 2xl:flex-row-reverse 2xl:items-start'
          ])}
        >
          <p className="text-primaryLight mt-16 text-justify">
            Cette application web a été conçue pour améliorer l'organisation des
            emplois du temps pour un lycée, en réponse aux défis posés par la
            pandémie de COVID-19. Les enseignants sont devenus responsables de
            l'ajout de leurs cours en visioconférence dans les emplois du temps
            des élèves.
            <br />
            <br />
            Bien que de nombreuses applications web similaires existent sur le
            marché, mon objectif était de concevoir une application facile à
            utiliser pour permettre une prise en main rapide et efficace. La
            fiabilité, le respect et la confiance ont été au centre de mes
            préoccupations pour développer une solution adaptée aux besoins de
            l'établissement scolaire.
          </p>

          <Image
            src={appExampleImage2}
            alt="Project2 Image"
            className="mt-16 transform scale-125 lg:self-center 2xl:origin-right"
          />
        </div>
      </section>

      <section className="px-8 py-16 lg:py-32 md:px-32 2xl:px-64">
        <Header type={2} className="font-mono">
          Évaluation du développement
        </Header>
        <Separator size="normal" />

        <div className="flex flex-col 2xl:flex-row">
          <p className="text-primaryLight mt-16 text-justify lg:max-w-3xl">
            Inspiré par mon expérience en développement d'une application de
            gestion de QCM, je me suis rendu compte que l'évaluation des
            programmes informatiques peut être fastidieuse pour les enseignants
            et les étudiants.
            <br />
            <br />
            C'est pour améliorer cette situation que j'ai développé une
            application web innovante, qui simplifie la notation et l'évaluation
            des compétences en développement et en programmation pour les
            étudiants et les enseignants. Avec l'expertise que j'ai acquise dans
            ce domaine, j'ai mis en œuvre des solutions fiables, respectueuses
            et de confiance pour offrir une expérience d'apprentissage et
            d'évaluation efficace et professionnelle.
          </p>

          <Image
            src={appExampleImage3}
            alt="Project3 Image"
            className="mt-16 transform scale-125"
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

export default Work;
