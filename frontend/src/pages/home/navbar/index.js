import React, { Component } from 'react';
import { mdiLogout, mdiAccountCircle } from '@mdi/js';
import Icon from '@mdi/react'
import { Link } from 'react-router-dom';
import AuthService from '../../../services/auth-service'

import zipooLogo from '../../../assets/img/zipoo.png'


import { Container, Logout, Logo, Photo } from './styles.js'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedInUser: null };
        this.service = new AuthService();
    }

    static getDerivedStateFromProps(nextProps, state) {
        return { ...state, loggedInUser: nextProps["userInSession"] }
    }

    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.setState({ loggedInUser: null });
                this.props.getUser(null);
            })
    }

    render() {
        if (this.state.loggedInUser) {
            return (
                <Container>
                    <Photo>
                        <Icon
                            path={mdiAccountCircle}
                            title="Account"
                            size={2.5}
                            color="#4b8071"
                        />
                    </Photo>
                    <Logo src={zipooLogo} alt="" />
                    <Logout>
                        <Link to='/' onClick={() => this.logoutUser()}>
                            <Icon
                                path={mdiLogout}
                                title="Logout"
                                size={1.3}
                                color="#4b8071"
                            />
                        </Link>
                    </Logout>

                </Container>
            )
        } else {
            return (
                null
            )
        }
    }
}

export default Navbar;