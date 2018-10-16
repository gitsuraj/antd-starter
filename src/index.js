import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './components/Loading';
import { PersistGate } from 'redux-persist/es/integration/react';

import * as serviceWorker from './serviceWorker';

import configureStore from './store/index';

import Routes from './routes/index';

const rootElement = document.getElementById('root');
const { persistor, store } = configureStore();
const Root = () => (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Router>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );

render(<Root />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
