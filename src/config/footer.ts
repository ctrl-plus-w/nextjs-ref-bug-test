/**
 *
 * The footer is made of sections, each section has a title and links under it.
 *
 * Each link has a `name` property which is the text rendered on screen and a `path`
 * property which will be the link of the anchor. The `relative` property specifies
 * if the link will be opened relatively to the website domain name.
 *
 */

interface IFooterSection {
  name: string;
  links: {
    name: string;
    path: string;
    relative: boolean;
  }[];
}

const footer: IFooterSection[] = [
  {
    name: 'Les pages',
    links: [
      {
        name: 'ACCUEIL',
        path: '/',
        relative: true
      },
      {
        name: 'MON TRAVAIL',
        path: '/work',
        relative: true
      },
      {
        name: 'ME CONTACTER',
        path: '/contact',
        relative: true
      }
    ]
  },
  {
    name: 'Réseaux',
    links: [
      {
        name: 'LinkedIn',
        path: 'https://www.linkedin.com/in/lukas-laudrain-869303234/',
        relative: false
      },
      {
        name: 'Facebook',
        path: '#',
        relative: true
      },
      {
        name: 'Instagram',
        path: '#',
        relative: true
      },
      {
        name: 'Github',
        path: 'https://github.com/ctrl-plus-w',
        relative: false
      }
    ]
  },
  {
    name: 'Contact',
    links: [
      {
        name: 'contact@lukaslaudrain.fr',
        path: 'mailto:contact@lukaslaudrain.fr',
        relative: false
      },
      {
        name: '+33 (0)7 66 32 44 38',
        path: 'tel:+33766324438',
        relative: false
      }
    ]
  }
];

export default footer;
