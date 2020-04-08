import React from 'react';
import Payments from './components/Payments'
import { Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App page-container">
      <Switch>
        <Route exact path="/" component={Payments} />
      </Switch>
    </div>
  )
}

