import { lazy } from 'react';

// containers
const Home = lazy(() => import('features/Home'));
const SliderImage = lazy(() => import('features/SliderImage'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/home', name: 'Home Page', component: Home },
  { path: '/slider-image', name: 'Slider Image', component: SliderImage },
];


export default routes;
