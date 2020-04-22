import React, { useState } from 'react'

import Request from './Pedido'
import Delivery from './Entrega'

import AuthContextProvider from '../../../contexts/AuthContext'
import CartContextProvider from '../../../contexts/CartContext'

import { Container, Button } from './styles.js'

export default function Modality() {

    const [view, setView] = useState('pedido')

    let bgPedido = {}
    let bgEntrega = {}

    if (view === "pedido") {
        bgPedido = {
            backgroundColor: "#fff",
            color: "#1c9271",
            borderBottom: '0px solid #fff',
            borderRight: "1px solid #1c9271",
            borderTop: "1px solid #1c9271",
            borderTopRightRadius: "1px solid #1c9271",
            borderTopLeftRadius: "1px solid #1c9271"
        }
        bgEntrega = {
            backgroundColor: "#e0e2e2",
            color: "#1c9271",
            borderBottom: '1px solid #1c9271',
        }
    } else {
        bgPedido = {
            backgroundColor: "#e0e2e2",
            color: "#1c9271",
            borderBottom: '1px solid #1c9271',
        }
        bgEntrega = {
            backgroundColor: "#fff",
            color: "#1c9271",
            borderBottom: '0px solid #fff',
            borderLeft: "1px solid #1c9271",
            borderTop: "1px solid #1c9271",
            borderTopRightRadius: "1px solid #1c9271",
            borderTopLeftRadius: "1px solid #1c9271"
        }
    }

    return (
        <Container>
            <>
                <ul>
                    <li>
                        <Button style={bgPedido} to="#" onClick={() => setView('pedido')}>Pedido</Button >
                    </li>
                    <li>
                        <Button style={bgEntrega} to="#" onClick={() => setView('entrega')}>Entrega</Button >
                    </li>
                </ul>
            </>
            {view === 'pedido' ?
                <AuthContextProvider>
                    <CartContextProvider>
                        <Request />
                    </CartContextProvider>
                </AuthContextProvider>
                :
                <Delivery />}
        </Container>
    )
}