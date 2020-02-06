import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-app">
        <Route path="/" component={Navbar} />
        <Route path="/" component={Routes} />
      </div>
    </BrowserRouter>
  )
}

export default App
