import React from 'react';

import {createStore} from "redux"
import { Provider } from 'react-redux';

import reducer from './redux/reducers';

import {composeWithDevTools} from "redux-devtools-extension"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './views/Home';
import Profile from './views/Profile';
import Layout from './components/Layout';

const store = createStore(reducer, composeWithDevTools())

function App() {
  return (
    <Router>
      <Provider store={store}>
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
      </Provider>
    </Router>
  );
}

export default App;
