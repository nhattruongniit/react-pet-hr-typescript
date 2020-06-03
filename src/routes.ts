import { lazy } from 'react';

// containers
const Dashboard = lazy(() => import('features/Dashboard'));
const SliderImage = lazy(() => import('features/SliderImage'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard Page', component: Dashboard },
  { path: '/slider-image', name: 'Slider Image', component: SliderImage },
];


export default routes;
