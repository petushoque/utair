import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import * as api from './utils/api';

import { store } from './redux/store';

import Login from './components/Login';
import Register from './components/Register';

function App() {

  const [loader, setLoader] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const hasToken = store.getState().token;
    //if (hasToken) {return}
    api.takeTokens(generateRandomUuid())
    .then((res) => {
      const changeToken = {
        type: 'CHANGE_TOKEN',
        payload: res.token
      }
      const changeRefreshToken = {
        type: 'CHANGE_REFRESH_TOKEN',
        payload: res.refresh_token
      }
      store.dispatch(changeToken);
      store.dispatch(changeRefreshToken);
    })
    .catch((err) => console.log(err))
  }, [])

  const handleLogin = (e) => {
    console.log('Login function will be here')
  }

  const handleRegister = (phone) => {
    console.log('Register function will be here')

    const token = store.getState().token;
    const time = Date.now() / 1000 | 0;

    api.register(token, phone, time)
    .then((res) => console.log(res))
  }

  const handleInputChecker = (e) => {
    if (e.target.validity.valid) {      
      console.log('YES')
    }
    else {      
      console.log('Wrong input')
    }
  }
  
  function generateRandomUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
  }

  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>

          <Route exact path='/'>
            <div className='main'>
              <Link className='button' to='/'>Купить билет</Link>
              <Link className='button' to='/login'>Войти</Link>          
            </div>
          </Route>

          <Route exact path='/login'>
            <Login onLogin={handleLogin}/>
          </Route>

          <Route exact path='/register'>
            <Register onRegister={handleRegister}/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
