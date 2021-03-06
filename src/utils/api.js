export const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://www.utair.ru/mobile/api/v8';
// https://cors-anywhere.herokuapp.com/ - обходной путь для обращения к api

function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
}

export function takeTokens(uuid) {
  return fetch(`${BASE_URL}/sessions/guest`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      appVersion:"Web",
      brandName:"Web",
      lang:"ru",
      model:"Web",
      osVersion:"Web",
      platform:"web",
      screenResolution:"Web",
      udid: uuid,
      })
    })
    .then(res => checkResponse(res))
}

export function register(token, phone, timestamp) {
  return fetch(`${BASE_URL}/account/profile`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    method: 'POST',
    body: JSON.stringify({
      login: phone, 
      confirmationGDPRDate: timestamp
      })
    })
    .then(res => checkResponse(res))
}

export function login(token, phone) {
  return fetch(`${BASE_URL}/account/profile/login`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    method: 'POST',
    body: JSON.stringify({
      login: phone
      })
    })
    .then(res => checkResponse(res))
}

export function confirmLogin(token, id, code) {
  return fetch(`${BASE_URL}/account/profile/login/confirm`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    method: 'POST',
    body: JSON.stringify({
      attemptId: id,
      code: code
      })
    })
    .then(res => checkResponse(res))
}