import React, { useState } from 'react'
import '../components/payments.css'

require('dotenv').config()


export default function Payment() {
    //==============useStates============
    const [erro, setErro] = useState('')
    const [qrcode, setQrcode] = useState('')

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [document, setDocument] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    //===================================
    const baseURL = 'https://appws.picpay.com/ecommerce/public'
    const url = `${baseURL}/payments`

    const data = {
        referenceId: "103041",
        callbackUrl: "http://localhost:3000/callback",
        returnUrl: "http://localhost:3000/cliente/pedido/103041",
        value: 1.00,
        expiresAt: "2020-10-01T16:00:00-03:00",
        buyer: {
            firstName: name,
            lastName: lastName,
            document: document,
            email: email,
            phone: phone
        }
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'x-picpay-token': process.env.REACT_APP_X_PICPAY_TOKEN,
            'Access-Control-Allow-Origin': `${baseURL}/payments`,
        },
    };

    const payment = async () => {
        try {
            const response = await fetch(url, options)
            return await response.json()
                .then(responsefromApi => {
                    if (response.status === 422) {
                        return setErro(responsefromApi.message)
                    }
                    console.log(responsefromApi.qrcode)
                    setQrcode(responsefromApi.qrcode.base64)
                })
        } catch (err) {
            console.error(err)
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div>
            <section className="form-pagamento container mt-4">
            <h1 className="text-center">Pagamento com PicPay:</h1>

                {/* Modal */}
                <div className="modal fade" id="payment" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    {/* <h5 className="modal-title" id="exampleModalLabel">Escaneie e pague</h5> */}
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h3><strong>Escaneie e pague</strong></h3>
                                <h4>pelo o seu celular</h4>
                                <img src={qrcode} alt="qrcode" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fim Modal */}

                <form className="form-group" onSubmit={handleSubmit}>
                    <input className="form-control" placeholder="Nome" required onChange={(e) => setName(e.target.value)} />
                    <input className="form-control" placeholder="Sobrenome" required onChange={(e) => setLastName(e.target.value)} />
                    <input className="form-control" placeholder="CPF" required onChange={(e) => setDocument(e.target.value)} />
                    <input className="form-control" type="email" placeholder="E-mail" required onChange={(e) => setEmail(e.target.value)} />
                    <input className="form-control" type="tel" placeholder="Telefone" required onChange={(e) => setPhone(e.target.value)} />
                    <button className="btn btn-success btn-block" data-toggle="modal" data-target="#payment" type="submit" required onClick={() => payment()}>Pagar</button>
                </form>
                <p style={{ color: "red" }}>{erro}</p>
            </section>
        </div>
    )
}
