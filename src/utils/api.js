export const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://www.utair.ru/mobile/api/v8';
// https://cors-anywhere.herokuapp.com/ - обходной путь для обращения к api

function checkResponse (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
}

export function takeTokens (uuid) {
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