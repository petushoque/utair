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
                        <button type='button' className='confirmation__key'>
                            1
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button type='button' className='confirmation__key'>
                            2
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button type='button' className='confirmation__key'>
                            3
                        </button>
                    </div>
                </div>
                <div className='confirmation__row'>
                    <div className='confirmation__keyboard-number'>
                        <button type='button' className='confirmation__key'>
                            4
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button type='button' className='confirmation__key'>
                            5
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button type='button' className='confirmation__key'>
                            6
                        </button>
                    </div>
                </div>
                <div className='confirmation__row'>
                    <div className='confirmation__keyboard-number'>
                        <button type='button' className='confirmation__key'>
                            7
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button type='button' className='confirmation__key'>
                            8
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button type='button' className='confirmation__key'>
                            9
                        </button>
                    </div>
                </div>
                <div className='confirmation__row'>
                    <div className='confirmation__special-key confirmation__special-key_info'>
                            Не пришло<br/>письмо?
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button type='button' className='confirmation__key'>
                            0
                        </button>
                    </div>
                    <div className='confirmation__special-key confirmation__special-key_backspace'>
                            
                    </div>
                </div>
            </div>
            <Link className='go-back-arrow' to='/'/>
            <h2 className='confirmation__title'>Подтверждение</h2>
        </form>
    )
}

export default Confirmation