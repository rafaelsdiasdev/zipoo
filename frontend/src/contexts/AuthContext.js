import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/auth-service'

export const AuthContext = createContext()

export default function AuthContextProvider(props) {
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const service = new AuthService()

        const fetchUser = () => {
            if (loggedInUser === null) {
                 service.loggedin()
                    .then(response => {
                        setLoggedInUser(response)
                    })
                    .catch(() => {
                        setLoggedInUser(false)
                    })
            }
        }
        fetchUser()

    }, [loggedInUser])

    const handleInputChange = e => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const getTheUser = (userObj) => {
        setLoggedInUser(userObj)
    }

    const { Provider } = AuthContext
    return (
        <Provider value={{ username, password, handleInputChange, getTheUser, loggedInUser }}>
            {props.children}
        </Provider>
    );

}