import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import './App.css';

import GnomeList from "../GnomeList/index";

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <GnomeList/>
    </Provider>
  );
}

export default App;
