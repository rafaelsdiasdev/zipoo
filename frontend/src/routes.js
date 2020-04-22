import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CartContextProvider from './contexts/CartContext'
import { AuthContext } from './contexts/AuthContext'
import ProtectedRoute from './config/protected-route';

import Navbar from './pages/home/navbar';
import Footer from './pages/home/Footer/Footer'

import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';

import Cart from './pages/home/Modality/Pedido/Cart'
import Pedidos from './pages/home/Pedidos'
import Perfil from './pages/home/Perfil'
import Home from './pages/home'
import Register from './pages/auth/Register'

// import UserEdit from './components/pages/users/EditUser'
// import ProjectList from './components/pages/projects/ProjectList';
// import ProjectDetails from './components/pages/projects/ProjectDetails';
// import TaskDetails from './components/pages/tasks/TaskDetails';

export default function Routes() {
    const { username, password, handleInputChange, getTheUser, loggedInUser } = useContext(AuthContext)

    return (
        <BrowserRouter>
            {loggedInUser ? (
                    <div className="App container">
                        <Navbar userInSession={loggedInUser} getUser={getTheUser} />
                        <Switch>
                            {/* <ProtectedRoute user={loggedInUser} path='/user/:id' component={UserEdit} />
                            <ProtectedRoute user={loggedInUser} path='/projects/:id' component={ProjectDetails} />
                            <ProtectedRoute user={loggedInUser} path='/projects' component={ProjectList} />
                            <ProtectedRoute user={loggedInUser} path="/taks/:id" component={TaskDetails} /> */}
                            <ProtectedRoute user={loggedInUser} path="/home" component={Home} />
                            <ProtectedRoute user={loggedInUser} path="/perfil" component={Perfil} />
                            <ProtectedRoute user={loggedInUser} path="/pedidos" component={Pedidos} />
                            <ProtectedRoute user={loggedInUser} path="/cart">
                                <CartContextProvider>
                                    <Cart />
                                </CartContextProvider>
                            </ProtectedRoute>
                        </Switch>
                        <Footer />
                    </div>
            ) : (
                    <div className="App container">
                        <Switch>
                            <Route
                                exact path='/register'
                                render={() =>
                                    <Register
                                        getUser={getTheUser}
                                        username={username}
                                        password={password}
                                        handleInputChange={handleInputChange} />}
                            />
                            <Route
                                exact path='/signup'
                                render={() =>
                                    <Signup
                                        getUser={getTheUser}
                                        username={username}
                                        password={password} />}
                            />
                            <Route
                                 path='/'
                                render={() =>
                                    <Login getUser={getTheUser} />}
                            />
                        </Switch>
                    </div>
                )}
        </BrowserRouter>
    )
}