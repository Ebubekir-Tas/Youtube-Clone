import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { routes } from './routes';

export function BaseRouter() {
  return (
    <Router>
      <Switch>
        {
          routes.map((item) => (<Route {...item} />))
        }
      </Switch>
    </Router>
  );
}