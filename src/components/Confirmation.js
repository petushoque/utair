import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../redux/store';

function Confirmation(props) {

    const [numbers, setNumbers] = useState({one: '', two: '', three: '', four: ''})

    console.log(store.getState())
    const phoneNumber = store.getState().phone;

    useEffect(() => {
        handleSubmit()
    }, [numbers])

    const handleSubmit = () => {
        const code = numbers.one + numbers.two + numbers.three + numbers.four
        if (code.length !== 4) {return}
        props.onConfirm(code)
    }

    const handleInput = (val) => {
        //обработка клавишь с цифрами
        if (val !== 'back') {
            if (numbers.one) {
                if (numbers.two) {
                    if (numbers.three) {
                        if (numbers.four) {return}
                        else setNumbers({... numbers, four: val})
                    }
                    else setNumbers({... numbers, three: val})
                }
                else setNumbers({... numbers, two: val})
            }
            else setNumbers({... numbers, one: val})
        }
        //обработка бэкспейса
        else {
            if (numbers.four) {setNumbers({... numbers, four: ''})}
            else {
                if (numbers.three) {setNumbers({... numbers, three: ''})}
                else {
                    if (numbers.two) {setNumbers({... numbers, two: ''})}
                    else {
                        if (numbers.one) {setNumbers({... numbers, one: ''})}
                        else return
                    }
                }
            }
        }
    }

    return (        
        <form 
            className='confirmation'
            onSubmit={(e) => handleSubmit(e)}>
            <p>Введите код из SMS, отправленный на номер {phoneNumber}</p>
            <div className='confirmation__numbers'>
                <input defaultValue={numbers.one || ''} maxLength='1' type='text' pattern='[0-9]' onInput={(e) => setNumbers({... numbers, one: e.target.value})}/>
                <input defaultValue={numbers.two || ''} maxLength='1' type='text' pattern='[0-9]' onInput={(e) => setNumbers({... numbers, two: e.target.value})}/>
                <input defaultValue={numbers.three || ''} maxLength='1' type='text' pattern='[0-9]'/>
                <input defaultValue={numbers.four || ''} maxLength='1' type='text' pattern='[0-9]'/>
            </div>
            <div className='confirmation__keyboard'>
                <div className='confirmation__row'>
                    <div className='confirmation__keyboard-number'>
                        <button 
                            type='button' 
                            className='confirmation__key' 
                            onClick={(e) => handleInput(e.target.innerText)}>
                                1
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button 
                            type='button' 
                            className='confirmation__key' 
                            onClick={(e) => handleInput(e.target.innerText)}>
                                2
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button 
                            type='button' 
                            className='confirmation__key'
                            onClick={(e) => handleInput(e.target.innerText)}>
                                3
                        </button>
                    </div>
                </div>
                <div className='confirmation__row'>
                    <div className='confirmation__keyboard-number'>
                        <button 
                            type='button' 
                            className='confirmation__key'
                            onClick={(e) => handleInput(e.target.innerText)}>
                                4
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button 
                            type='button' 
                            className='confirmation__key'
                            onClick={(e) => handleInput(e.target.innerText)}>
                                5
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button 
                            type='button' 
                            className='confirmation__key'
                            onClick={(e) => handleInput(e.target.innerText)}>
                                6
                        </button>
                    </div>
                </div>
                <div className='confirmation__row'>
                    <div className='confirmation__keyboard-number'>
                        <button 
                            type='button' 
                            className='confirmation__key'
                            onClick={(e) => handleInput(e.target.innerText)}>
                                7
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button 
                            type='button' 
                            className='confirmation__key'
                            onClick={(e) => handleInput(e.target.innerText)}>
                                8
                        </button>
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button 
                            type='button' 
                            className='confirmation__key'
                            onClick={(e) => handleInput(e.target.innerText)}>
                                9
                        </button>
                    </div>
                </div>
                <div className='confirmation__row'>
                    <div className='confirmation__special-key confirmation__special-key_info'>
                            Не пришло<br/>письмо?
                    </div>
                    <div className='confirmation__keyboard-number'>
                        <button 
                            type='button' 
                            className='confirmation__key'
                            onClick={(e) => handleInput(e.target.innerText)}>
                                0
                        </button>
                    </div>
                    <div 
                        className='confirmation__special-key confirmation__special-key_backspace'
                        onClick={() => handleInput('back')}>                     
                    </div>
                </div>
            </div>
            <Link className='go-back-arrow' to='/'/>
            <h2 className='confirmation__title'>Подтверждение</h2>
        </form>
    )
}

export default Confirmation