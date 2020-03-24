import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './app/reducers';
import LoginForm from './app/components/LoginForm';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAS_r0sU4gZfbLdmpGw0AJev_HRAaayuzE',
      authDomain: 'fireabse-login-manager.firebaseapp.com',
      databaseURL: 'https://firebase-login-manager.firebaseio.com',
      projectId: 'firebase-login-manager',
      storageBucket: '',
      messagingSenderId: '652843213598',
      appId: '1:652843213598:web:cc093fe011bf593dbfdf0f'
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
