import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../redux/store';

function Confirmation(props) {

    const [numbers, setNumbers] = useState(['','','',''])

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onConfirm(numbers)
    }

    return (        
        <form 
            className='confirmation'
            onSubmit={(e) => handleSubmit(e)}>
            <input maxLength='1'/>
            <input />
            <input />
            <input />
            <button className='button' type='submit'>Войти</button>
            <Link className='go-back-arrow' to='/'/>
            <h2 className='register__title'>Подтверждение</h2>
        </form>
    )
}

export default Confirmation