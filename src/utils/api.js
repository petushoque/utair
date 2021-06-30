export const BASE_URL = 'https://www.utair.ru/mobile/api/v8';

function checkResponse (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
}

export function authorize (email, password) {
    return fetch(`${BASE_URL}/sessions/guest`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        "appVersion":"Web",
        "brandName":"Web",
        "lang":"ru",
        "model":"Web",
        "osVersion":"Web",
        "platform":"web",
        "screenResolution":"Web",
        "udid":"65eeaed8-ce5e-414f-9193-5246b913bdec"
      })
    })
    .then(res => checkResponse(res))
  }