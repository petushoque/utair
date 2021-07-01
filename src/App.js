import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { Redirect, Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import * as api from './utils/api';

import Login from './components/Login'

function App() {

  const [loader, setLoader] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      return
    }
    api.takeTokens(generateRandomUuid())
    .then((res) => {
      localStorage.setItem('token', res.token)
      localStorage.setItem('refresh_token', res.refresh_token)
    })
  }, [])

  const handleLogin = (e) => {
    console.log('Login function will be here')
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log('Register function will be here')
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
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
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
            <form 
              className='register'
              onSubmit={(e) => handleRegister(e)}>
              <div>
                <input 
                  className='input' 
                  type='tel' 
                  name='register-input' 
                  placeholder='Номер телефона'
                  required
                  maxLength='12'/>
                <p>Укажите ваш номер телефона. Он будет использоваться для входа в приложение</p>
              </div>
              <div>
                <div className='register__agreement'>
                  <input id='agreement' type='checkbox'/>
                  <label htmlFor='agreement'>
                    Я ознакомлен с условиями использования моих персональных данных и даю согласие на их обработку
                  </label>
                </div>
                <button className='button' type='submit'>Продолжить</button>
              </div>
              <Link className='go-back-arrow' to='/'/>
              <h2 className='register__title'>Регистрация в Utair</h2>
            </form>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
