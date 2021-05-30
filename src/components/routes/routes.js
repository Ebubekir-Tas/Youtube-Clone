import {
  PageTemplate,
  HomePage,
  Trending,
  Subscriptions,
  WatchHistory,
  WatchLater,
  LikedVideos
} from '@pages';

export const routes = [
  {
    key: 'home-page',
    path: '/',
    exact: true,
    component: PageTemplate(HomePage)
  },
  {
    key: 'home-page',
    path: '/trending',
    exact: true,
    component: PageTemplate(Trending)
  },
  {
    key: 'subscriptions-page',
    path: '/subscriptions',
    exact: true,
    component: PageTemplate(Subscriptions)
  },
  {
    key: 'history-page',
    path: '/history',
    exact: true,
    component: PageTemplate(WatchHistory)
  },
  {
    key: 'watch-later-page',
    path: '/watch-later',
    exact: true,
    component: PageTemplate(WatchLater)
  },
  {
    key: 'likes-page',
    path: '/likes',
    exact: true,
    component: PageTemplate(LikedVideos)
  },
];