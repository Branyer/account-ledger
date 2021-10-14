import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './views/Home';
import Profile from './views/Profile';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/account/profile">
              <Profile />
            </Route>
          </Switch>
      </Layout>
    </Router>
  );
}

export default App;
