import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateNothing from '../Layout/TemplateNothing';
import TemplateSidebar from '../Layout/TemplateSidebar';

// Routes
import Home from '../components/Home';

import MemberContainer from '../containers/Member';
import LoginComponent from '../components/Login';


const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <Home {...props} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/login"
      render={props => (
        <TemplateNothing>
          <MemberContainer {...props} Layout={LoginComponent} />
        </TemplateNothing>
      )}
    />
  </Switch>
);

export default Index;