import React from 'react';

import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './views/Home';
import Profile from './views/Profile';
import Layout from './components/Layout';
import Modal from "./components/Modal"
import CustomSnackbar from './components/Snackbar';

import {store} from "./redux/store"

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Modal />
        <CustomSnackbar />
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
