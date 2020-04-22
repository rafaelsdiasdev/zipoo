import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import AuthService from '../../services/auth-service';
import MaskedInput from 'react-text-mask'
import { cpfMask } from '../../config/mask'

import FooterRegister from '../footer/FooterRegister';

import { Container, Title, Input, Form, Button } from './styles'

export default function Signup({ getUser, username, password }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [document, setDocument] = useState('')
  const [phone, setPhone] = useState('')

  const [redirect, setRedirect] = useState(false)

  const service = new AuthService()

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setRedirect(true)

    await service.signup(username, password, firstName, lastName, document, phone)
      .then(response => {
        getUser(response)
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      <Container>
        {redirect ? <Redirect to="/home" /> : null}
        <Title>Complete o seu cadastro</Title>
        <Form onSubmit={handleFormSubmit}>
          <Input placeholder="Nome" type="text" onChange={(e) => setFirstName(e.target.value)} />
          <Input placeholder="Sobrenome" type="text" onChange={(e) => setLastName(e.target.value)} />
          <Input placeholder="CPF" type="text" maxLength="14" value={cpfMask(document)} onChange={(e) => setDocument(e.target.value)} />
          <Input mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} placeholder="Telefone" type="tel" onChange={(e) => setPhone(e.target.value)} />
          <Button type="submit">CADASTRAR</Button>
        </Form>
      </Container>
      <FooterRegister />
    </>
  )
}