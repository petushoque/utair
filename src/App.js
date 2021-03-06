import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import * as api from './utils/api';

import { store } from './redux/store';

import Login from './components/Login';
import Register from './components/Register';
import Confirmation from './components/Confirmation';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const hasToken = store.getState().token;
    if (hasToken) {return}
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

  const handleLogin = (phone) => {
    console.log('Login function will be here')

    setIsLoading(true)

    const token = store.getState().token;

    // ===== ТЕСТ ===== //
    console.log(store.getState())

    api.login(token, phone)
    .then((res) => {
      const changeAttemptId = {
        type: 'CHANGE_ATTEMPT_ID',
        payload: res.attemptId
      }
      const changePhone = {
        type: 'CHANGE_PHONE',
        payload: phone
      }
      store.dispatch(changeAttemptId);
      store.dispatch(changePhone);

      // ===== ТЕСТ ===== //
      console.log('Стор на момент логина',store.getState())
      // ===== ТЕТ =====//

      document.location.href = '/confirmation'

      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
  }

  const handleConfirmLogin = (code) => {
    console.log('Here is 4 numbers: ', code)

    const token = store.getState().token;
    const id = store.getState().attemptId;
    api.confirmLogin(token, id, code)
    .then((res) => {
      console.log(res)
      document.location.href = '/'
    })
  }

  const handleRegister = (phone) => {
    console.log('Register function will be here')

    setIsLoading(true)

    const token = store.getState().token;
    const time = Date.now() / 1000 | 0;

    api.register(token, phone, time)
    .then((res) => {
      console.log(res)
      setIsLoading(false)
      document.location.href = '/login'
      })
    .catch((err) => {
      setIsLoading(false)
      console.log(err)
      })
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
              {!isLoggedIn ? 
                <Link className='button' to='/login'>Войти</Link> : 
                (<>
                <p>Привет, %userName</p>
                <p>Выйти</p>
                </>)}                       
            </div>
          </Route>

          <Route exact path='/login'>
            <Login onLogin={handleLogin} isLoading={isLoading}/>
          </Route>

          <Route exact path='/register'>
            <Register onRegister={handleRegister} isLoading={isLoading}/>
          </Route>

          <Route exact path='/confirmation'>
            <Confirmation onConfirm={handleConfirmLogin}/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


/**
 * 
 * 
 *   const handleInputChecker = (e) => {
    if (e.target.validity.valid) {      
      console.log('YES')
    }
    else {      
      console.log('Wrong input')
    }
  }
 * 
 * 
 */