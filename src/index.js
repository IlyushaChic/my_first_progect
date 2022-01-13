
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { AuthContext } from './context';

ReactDOM.render(
  <App />, document.getElementById('root')
);
=======
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));
>>>>>>> 0f0237f42c13db4e098324041906a4086613bd54


























