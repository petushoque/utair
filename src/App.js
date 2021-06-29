import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react'

function App() {

  const [loader, setLoader] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='app'>
      <button>
        Купить билет
      </button>
      <button>
        Войти
      </button>
    </div>
  );
}

export default App;
