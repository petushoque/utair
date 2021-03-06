import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../redux/store';

function Register(props) {

  const [phone, setPhone] = useState()
  const [agreementChecked, setAgreementChecked] = useState(false)

    const handleRegister = (e) => {        
        e.preventDefault()
        if (agreementChecked) {props.onRegister(phone)}
        else {console.log('Не поставлен флажок под соглашением')}
    }

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
            maxLength='12'
            defaultValue={phone}
            onInput={(e) => setPhone(e.target.value)}/>
          <p>Укажите ваш номер телефона. Он будет использоваться для входа в приложение</p>
        </div>
        {props.isLoading?
        <div className='loader'></div>:
        null}        
        <div>
          <div className='register__agreement'>
            <input id='agreement' type='checkbox' defaultValue={agreementChecked} onChange={e => setAgreementChecked(e.target.checked)}/>
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