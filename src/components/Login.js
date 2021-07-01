import React from 'react';
import { store } from '../redux/store';

function Login () {

    const changePhone = {
        type: 'CHANGE_PHONE',
        payload: 'TEST'
    }

    console.log(store.getState())

    return (
        <h1 onClick={() => store.dispatch(changePhone)}>Hello</h1>
    )
}

export default Login