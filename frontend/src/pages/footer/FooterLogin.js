import React from 'react'
import { Link } from 'react-router-dom';

import { Container } from './styles.js'


export default function FooterLogin() {

    return (
        <Container>
            <p>Ainda não tem uma conta?<Link to={"/register"}> Cadaste-se</Link></p>
            <p><Link to={"/signup"}>Equeceu a senha?</Link></p>
        </Container>
    )
}