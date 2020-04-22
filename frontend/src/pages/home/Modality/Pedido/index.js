import React, { useContext } from 'react'

import Icon from '@mdi/react'
import { mdiReload } from '@mdi/js';

// import { AuthContext } from '../../../../../../contexts/AuthContext'
import { CartContext } from '../../../../contexts/CartContext'

import Cart from './Cart'

import { Container, Estabelecimentos, Button, Refresh } from './styles.js'

export default function Request() {
    const { handleMarketChange, displaySupermercado, displayPadaria, displayFarmacia, refresh, estabelecimento } = useContext(CartContext)

    return (
        <Container>
            <Estabelecimentos name="reset">
                <Refresh className="material-icons md-48 md-light" value="reset" style={refresh} onClick={(e) => handleMarketChange(e)} >autorenew</Refresh>
     
                <Button style={displaySupermercado} value="supermercado" onClick={(e) => handleMarketChange(e)}>Supermercado</Button>
                <Button style={displayPadaria} value="padaria" onClick={(e) => handleMarketChange(e)}>Padaria</Button>
                <Button style={displayFarmacia} value="farmacia" onClick={(e) => handleMarketChange(e)}>Farmárcia</Button>

                {estabelecimento !== '' ? <Cart /> : null}

            </Estabelecimentos>
        </Container>
    )
}
