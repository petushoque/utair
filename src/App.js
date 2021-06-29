import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react'
import { Redirect, Route, Switch, BrowserRouter, Link } from 'react-router-dom';

function App() {

  const [loader, setLoader] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
            <form className='login'>
              <input placeholder='Номер телефона или Email'/>
              <button className='button' type='submit'>Войти</button>
              <p>Нет аккаунта?</p>
              <Link to='register'>Зарегистрируйтесь</Link>
            </form>
            <Link className='go-back-arrow' to='/'/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
