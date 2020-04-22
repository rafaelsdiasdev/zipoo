import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import FooterRegister from '../footer/FooterRegister';

import { Container, Title, Input, Form, Button } from './styles'

export default function Register({ password, handleInputChange }) {
    const [checkPassword, setCheckPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    let checkPass

    const handleSubmit = event => {
        event.preventDefault()
        setRedirect(true)
    }

    if (password !== checkPassword) {
        checkPass = {
            backgroundColor: "red"
        }
    }

    return (
        <>
            <Container>
                {redirect ? <Redirect to="/signup" /> : null}
                <Title>Cadastro de usuário</Title>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="E-mail" required type="text" name="username" onChange={(e) => handleInputChange(e)} />
                    <Input placeholder="Senha" required type="password" name="password" onChange={(e) => handleInputChange(e)} />
                    <Input placeholder="Confimar senha" required style={checkPass} type="password" name="password" onChange={(e) => setCheckPassword(e.target.value)} />
                    <Button type="submit">CONTINUAR</Button>
                </Form>
            </Container>
            <FooterRegister />
        </>
    )

}

