import { lazy } from 'react';

// containers
const Home = lazy(() => import('modules/Home/components/Home'));
const Profile = lazy(() => import('modules/Profile/containers/Profile'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home Page', component: Home },
  { path: '/profile', exact: true, name: 'Profile Page', component: Profile },
];

export default routes;
