import React from 'react';

var routes = [];

export default routes;

import { Home, HomeSidebar} from '../../views/home/js/home';
import WhyCrystal from '../../views/home/js/whycrystal';
import WhyAmber from '../../views/home/js/whyamber';

routes.push(  {
  path: "/",
  exact: true,
  type: 'index',
  name: 'Home',
  sidebar: HomeSidebar,
  main: Home
  });

routes.push(  {
  path: "/whyamber",
  exact: true,
  type: 'info',
  name: 'WhyAmber',
  sidebar: HomeSidebar,
  main: WhyAmber
});

routes.push(  {
  path: "/whycrystal",
  exact: true,
  type: 'info',
  name: 'WhyCrystal',
  sidebar: HomeSidebar,
  main: WhyCrystal
});

// append routes
