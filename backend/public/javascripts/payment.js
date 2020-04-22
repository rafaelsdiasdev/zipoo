const fetch = require("node-fetch");
require('dotenv').config()

const baseURL = 'https://appws.picpay.com/ecommerce/public'

const url = `${baseURL}/responsefromApis`

const data = {
  referenceId: "103013",
  callbackUrl: "http://localhost:3000/callback",
  returnUrl: "http://localhost:3000/cliente/pedido/103013",
  value: 1.00,
  expiresAt: "2020-05-01T16:00:00-03:00",
  buyer: {
    firstName: "Rafael",
    lastName: "Dias",
    document: "005.032.043-23",
    email: "rafaels.dias@me.com",
    phone: "+55 98 98127-8401"
  }
}

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-picpay-token': process.env.X_PICPAY_TOKEN,
  },
  body: JSON.stringify(data)
};


const payment = async () => {
  try {
    const response = await fetch(url, options)
    return await response.json().then(responsefromApi => console.log(responsefromApi))
  } catch (err) {
    console.error(err)
  }
}

const btnPagar = document.querySelector('button.payment')

btnPagar.addEventListener('click', () => {
  payment().then(data => data)
})

