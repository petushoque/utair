import { createStore } from 'redux'

const initialState = {
    username: '',
    phone: '',
    email: '',
    token: '',
    refresh_token: '',
}

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_USERNAME':
            return { ...state, username: action.payload }
        case 'CHANGE_PHONE':
            return { ...state, phone: action.payload }
        case 'CHANGE_TOKEN':
            return { ...state, token: action.payload }
        case 'CHANGE_REFRESH_TOKEN':
            return { ...state, refresh_token: action.payload }
    }
    return state;
}

export const store = createStore(reducer, initialState);

console.log(store.getState())