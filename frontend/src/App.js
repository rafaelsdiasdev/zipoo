import React from 'react';
import AuthContextProvider from './contexts/AuthContext'

import './global.scss'

import Routes from './routes'

function App() {
    return (
        <div>
            <AuthContextProvider>
                <Routes />
            </AuthContextProvider>
        </div>
    );
}

export default App;

