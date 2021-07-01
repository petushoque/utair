import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../redux/store';

function Register (props) {

    const handleRegister = (e) => {        
        e.preventDefault()
        props.onRegister()
    }

    //const handleInputChecker = (e) => {
    //    console.log(e.target.value)
    //}

    return (        
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
    )
}

export default Register