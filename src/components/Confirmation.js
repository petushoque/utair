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
            <p>Введите код из SMS, отправленный на номер +7 (916) 792-89-70</p>
            <div className='confirmation__nambers'>
                <input maxLength='1' type='text' pattern='[0-9]'/>
                <input maxLength='1' type='text' pattern='[0-9]'/>
                <input maxLength='1' type='text' pattern='[0-9]'/>
                <input maxLength='1' type='text' pattern='[0-9]'/>
            </div>
            <div className='confirmation__keyboard'>
                <div className='confirmation__row'>
                    <div className='confirmation__keyboard-number'>
                        1
                    </div>
                    <div className='confirmation__keyboard-number'>
                        2
                    </div>
                    <div className='confirmation__keyboard-number'>
                        3
                    </div>
                </div>
            </div>

            <button className='button' type='submit'>Войти</button>
            <Link className='go-back-arrow' to='/'/>
            <h2 className='confirmation__title'>Подтверждение</h2>
        </form>
    )
}

export default Confirmation