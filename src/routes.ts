import { lazy } from 'react';

// containers
const Home = lazy(() => import('features/Home'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/home', name: 'Home Page', component: Home },
];


export default routes;
