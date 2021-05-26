import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PageTemplate from '../pages/template/PageTemplate';
import { HomePage } from '../pages/home-page/Home';
import LikedVideos from '../pages/liked-videos/LikedVideosPage';

const Routes = [
  {
    key : 'home-page',
    path : '/',
    exact : true,
    component: PageTemplate(HomePage)
  },
  {
    key : 'likes-page',
    path : '/liked-videos',
    exact : true,
    component: PageTemplate(LikedVideos)
  },
];

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        {
          Routes.map((item) => (<Route {...item} />))
        }
      </Switch>
    </Router>
  );
}