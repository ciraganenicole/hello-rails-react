import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { greetingsActions } from '../redux/greetings/actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(greetingsActions());
    console.log('App.js: useEffect', greeting);
  }, []);

  return <>Greeting: {greeting ? greeting : 'Loading...'} </>;
};

Greeting.propTypes = {
  greeting: PropTypes.string,
};
export default Greeting;
