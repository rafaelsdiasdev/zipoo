import React, { createContext, useState } from 'react';

export const CartContext = createContext()

export default function CartContextProvider(props) {
    const [estabelecimento, setEstabelecimento] = useState('')

    const [displaySupermercado, setDisplaySupermercado] = useState({})
    const [displayPadaria, setDisplayPadaria] = useState({})
    const [displayFarmacia, setDisplayFarmacia] = useState({})
    const [refresh, setRefresh] = useState({})

    const handleMarketChange = (e) => {
        if (e.target.value === 'supermercado') {
            setEstabelecimento('supermercado')
            setDisplaySupermercado({
                display: "block",
                opacity: 1,
                color: "#fff"
            })
            setDisplayFarmacia({
                display: "none"
            })
            setDisplayPadaria({
                display: "none"
            })
            setRefresh({})

        } else if (e.target.value === 'padaria') {
            setEstabelecimento('padaria')
            setDisplaySupermercado({
                display: "none"
            })
            setDisplayFarmacia({
                display: "none"
            })
            setDisplayPadaria({
                display: "block",
                opacity: 1,
                color: "#fff"
            })
            setRefresh({})
        } else if (e.target.value === 'farmacia') {
            setEstabelecimento('farmacia')
            setDisplaySupermercado({
                display: "none"
            })
            setDisplayFarmacia({
                display: "block",
                opacity: 1,
                color: "#fff"
            })
            setDisplayPadaria({
                display: "none"
            })
            setRefresh({})
        } else if (e.target.value === 'reset') {
            setEstabelecimento('')
            setDisplaySupermercado({
                display: "block"
            })
            setDisplayFarmacia({
                display: "block"
            })
            setDisplayPadaria({
                display: "block"
            })
            setRefresh({
                animation: "roll 1s 1",
                transform: "rotate(360deg)",
            })
        }
    }

    const { Provider } = CartContext
    return (
        <Provider value={{ handleMarketChange, estabelecimento, displayFarmacia, displayPadaria, displaySupermercado, refresh }}>
            {props.children}
        </Provider>
    );
}
