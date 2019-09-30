import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import './App.css';

const store = configureStore()
store.dispatch({type: 'ACTION'});

function App() {
  return (
    <Provider store={store}>
      <div>APP</div>
    </Provider>
  );
}

export default App;
