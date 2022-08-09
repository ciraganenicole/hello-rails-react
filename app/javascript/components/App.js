import React, { useEffect, useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../redux/configureStore.js';
import PropTypes from 'prop-types';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Helloworld from './Greeting.js';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Helloworld />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
