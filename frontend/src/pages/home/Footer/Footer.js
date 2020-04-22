import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '@mdi/react'
import { mdiHome } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiAccount } from '@mdi/js';


import './footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <Link to="/home">
                    <Icon path={mdiHome}
                        title="Home"
                        size={1.3}
                        color="#1c9271"
                    />Home</Link>
            </div>
            <div>
                <Link to="/pedidos">

                    <Icon path={mdiMagnify}
                        title="Procurar"
                        size={1.3}
                        color="#1c9271"
                    />Pedidos</Link>
            </div>
            <div>
                <Link to="/perfil">
                    <Icon path={mdiAccount}
                        title="Perfil"
                        size={1.3}
                        color="#1c9271"
                    />Perfil</Link>
            </div>
        </div>
    )
}