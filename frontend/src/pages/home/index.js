import React from 'react'
import Modality from './Modality'

import { Container, ContainerTitle } from './styles.js'

export default function Home({ loggedInUser }) {

    return (
        <Container>
            <ContainerTitle>
                <h1>Olá {loggedInUser.firstName}...</h1>
            </ContainerTitle>
            <Modality />
        </Container>
    )
}