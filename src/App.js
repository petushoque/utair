import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react'
import { Redirect, Route, Switch, BrowserRouter, Link } from 'react-router-dom';

function App() {

  const [loader, setLoader] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    console.log('Login function will be here')
  }

  const handleInputChecker = (e) => {
    if (e.target.validity.valid) {      
      console.log('YES')
    }
    else {      
      console.log('Wrong input')
    }
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
            <form 
              className='login'
              onSubmit={() => handleLogin()}>
              <input 
                className='input' 
                type='text' 
                name='login-input' 
                pattern="\+[0-9]{1,4}[0-9]{1,10}|(.*)@(.*)\.[a-z]{2,5}" 
                placeholder='Номер телефона или Email'
                onInput={(e) => handleInputChecker(e)}/>
              <button className='button' type='submit'>Войти</button>
              <p>Нет аккаунта?</p>
              <Link className='login__to-register-link' to='register'>Зарегистрируйтесь</Link>
              <Link className='go-back-arrow' to='/'/>
            </form>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
