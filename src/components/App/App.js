import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import GnomeList from "../GnomeList/index";
import GnomeDetail from "../GnomeDetail/index"

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={GnomeList} />
        <Route path="/detail/:id" component={GnomeDetail} />
      </Router>
    </Provider>
  );
}

export default App;
