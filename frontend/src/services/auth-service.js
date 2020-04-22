import axios from 'axios';

class AuthService {
    constructor() {
        const service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        });
        this.service = service;
    }

    signup = async (username, password, firstName, lastName, document, email, phone) => {
        return await this.service.post('/signup', { username, password, firstName, lastName, document, email, phone })
            .then(response => response.data)
    }

    loggedin = async () => {
        return await this.service.get('/loggedin')
            .then(response => response.data)
    }

    login = async (username, password) => {
        return await this.service.post('/login', { username, password })
            .then(response => response.data)
    }

    logout = async () => {
        return await this.service.post('/logout', {})
            .then(response => response.data)
    }
}

export default AuthService;