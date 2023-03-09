interface IMenuTab {
  name: string;
  path: string;
}

const menu: IMenuTab[] = [
  {
    name: 'Accueil',
    path: '/'
  },
  {
    name: 'Mon travail',
    path: '/work'
  },
  {
    name: 'Me contacter',
    path: '/contact'
  }
];

export default menu;
