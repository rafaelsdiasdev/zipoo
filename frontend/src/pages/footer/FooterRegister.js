import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './styles.js'

export default function FooterRegister() {

    return (
        <Container>
            <p>Já possui uma conta?<Link to={"/"}> Login</Link></p>
        </Container>
    )
}