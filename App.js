import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './src/Reducer/index';
import ReduxThunk from 'redux-thunk';
import Screen from './src/Screen';
import City from './src/City';

const store = createStore(rootReducer,{},applyMiddleware(ReduxThunk));
const App = () => {
  return (
    <Provider store={store}>
      {/* <Screen /> */}
      <City/>
    </Provider>
  );
};


export default App;
