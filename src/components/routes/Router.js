import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PageTemplate from '../pages/template/PageTemplate';
import { HomePage } from '../pages/home/Home';
import LikedVideos from '../pages/liked-videos/LikedVideos';
import Trending from '../pages/trending/Trending';
import Subscriptions from '../pages/subscriptions/Subscriptions';
import History from '../pages/history/History';
import WatchLater from '../pages/watch-later/WatchLater';

const Routes = [
  {
    key : 'home-page',
    path : '/',
    exact : true,
    component: PageTemplate(HomePage)
  },
  {
    key : 'home-page',
    path : '/trending',
    exact : true,
    component: PageTemplate(Trending)
  },
  {
    key : 'subscriptions-page',
    path : '/subscriptions',
    exact : true,
    component: PageTemplate(Subscriptions)
  },
  {
    key : 'history-page',
    path : '/history',
    exact : true,
    component: PageTemplate(History)
  },
  {
    key : 'watch-later-page',
    path : '/watch-later',
    exact : true,
    component: PageTemplate(WatchLater)
  },
  {
    key : 'likes-page',
    path : '/likes',
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