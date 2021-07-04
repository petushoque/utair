import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../redux/store';

function Login(props) {

    const [phone, setPhone] = useState();

    const handleLogin = (e) => {        
        e.preventDefault()
        props.onLogin(phone)
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
                defaultValue={phone}
                onInput={(e) => setPhone(e.target.value)}/>
            <button disabled={props.isLoading} className='button' type='submit'>Войти</button>
            {props.isLoading ? 
            <div className='login__loader'>
            <div className='loader'></div>
            <p>Отправляем код подтверждения...</p>
            </div> : 
            <>
            <p>Нет аккаунта?</p>
            <Link className='login__to-register-link' to='register'>Зарегистрируйтесь</Link>
            <Link className='go-back-arrow' to='/'/>
            </> }
                    
        </form>
    )
}

export default Login