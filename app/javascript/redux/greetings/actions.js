import Greeting from './service';

export const greetingsActions = () => (dispatch) => {
  Greeting().then((data) => {
    console.log('Actions datattt', data.greeting);
    dispatch({
      type: 'SET_GREETING',
      payload: data.greeting,
    });
  });
};