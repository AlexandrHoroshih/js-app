import React from 'react';
import loadable from '@loadable/component';

import { router, useCurrentRoute } from '../app-domain/router';

const Routes = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
];

const RouteViews = {
  home: loadable(() => import('./home')),
  about: loadable(() => import('./about')),
};

router.add(Routes);

export const RoutesContent: React.FC = () => {
  const route = useCurrentRoute();

  if (route && route.name) {
    const Content = RouteViews[route.name];

    return <Content />;
  }

  return <RouteViews.home />;
};
