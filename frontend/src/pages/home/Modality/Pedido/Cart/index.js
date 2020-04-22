import React, { useContext, useState } from 'react'
// import { CartContext } from '../../../../../../../contexts/CartContext';

import './index.scss'

export default function CartData() {
    // const { estabelecimento } = useContext(CartContext)
    const [amount, setAmount] = useState(0)

    return (
        <>
            <div className="cart-container">
                <div className="cart">
                    <div className="amount">
                        <div className="btn-sub" onClick={() => setAmount(Math.sign(amount - 1) === -1 ? 0 : amount - 1)}>-</div>
                        <p>{amount}</p>
                        <div className="btn-plus" onClick={() => setAmount(amount + 1)}>+</div>
                    </div>
                    <div className="title">Desodorante</div>
                </div>
                <hr />
            </div>
            <div className="cart-total-container">
                <div className="cart-total">
                    <div className="total-title">Previsão do valor total:</div>
                    <div className="cart-total-amount">{amount*5}</div>
                </div>
                <hr />
            </div>
        </>
    )
}