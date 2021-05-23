import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PageTemplate from '../pages/template/PageTemplate';
import Home from '../pages/Home';

const Routes = [
  {
    key : 'home-Page',
    path : '/',
    exact : true,
    component: PageTemplate(Home)
  },
];

export default function Routes1() {
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