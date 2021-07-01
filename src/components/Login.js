import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../redux/store';

function Login (props) {

    const changePhone = {
        type: 'CHANGE_PHONE',
        payload: 'TEST'
    }

    console.log(store.getState())

    const handleLogin = (e) => {        
        e.preventDefault()
        props.onLogin()
    }

    const handleInputChecker = (e) => {
        console.log(e.target.value)
    }

    return (        
        <form 
            className='login'
            onSubmit={(e) => handleLogin(e)}>
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
    )
}

export default Login