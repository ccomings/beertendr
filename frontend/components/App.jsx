import React from 'react';
import {
  Route, Redirrect, Switch, Link, HashRouter
} from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Placeholder from './placeholder';
import BreweryIndexContainer from './breweries/breweries_index';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="app-page-container">
      <ProtectedRoute path="/" component={Placeholder} />
      <ProtectedRoute path="/breweries" component={BreweriesIndexContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
    </div>
  </div>
);

export default App;
