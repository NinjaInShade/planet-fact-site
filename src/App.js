import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Navbar from './components/Navbar/Navbar.js';
import './base.css';

const PlanetPage = lazy(() => import('./pages/PlanetPage/PlanetPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        {/* Navbar needs to be on every page */}
        <Navbar />

        <Switch>
          {/* Entry page for application - the home page */}
          <Route path='/:planet' exact>
            <PlanetPage />
          </Route>

          {/* 404 page not found route ( any routes not matching go here ) */}
          <Route path='*'>
            <PlanetPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
