import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PageTemplate from '../pages/template/PageTemplate';
import { HomePage } from '../pages/Home';

const Routes = [
  {
    key : 'home-Page',
    path : '/',
    exact : true,
    component: PageTemplate(HomePage)
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