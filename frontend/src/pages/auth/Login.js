import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import AuthService from '../../services/auth-service';

import FooterLogim from '../footer/FooterLogin'

import { Container, Logo, Title, Input, Form, Button, Err } from './styles'

import zipooLogo from '../../assets/img/zipoo.png'

export default function Login({ getUser }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('hidden')

  const [redirect, setRedirect] = useState(false)

  const service = new AuthService()

  useEffect(() => {
    console.log(err)
  }, [err])

  const handleFormSubmit = (event) => {
    event.preventDefault();
    service.login(username, password)
      .then(response => {
        setRedirect(true)
        getUser(response)
      })
      .catch(err => {
        setErr('visible')
        console.error(err)
      })
  }

  return (
    <>
      {redirect ? <Redirect to="/home" /> : null}

      <Container>
        <Logo src={zipooLogo} alt="zipoo" />
        <Title>Login</Title>
        <Form onSubmit={handleFormSubmit}>
          <Input placeholder="email" type="text" onChange={e => setUsername(e.target.value)} />
          <Input placeholder="senha" type="password" onChange={e => setPassword(e.target.value)} />

          <Err visibility={err}>Erro ao efetuar o Login do usuário</Err>

          <Button type="submit">LOGIN</Button>
        </Form>
      </Container>

      <FooterLogim />
    </>
  )
}
