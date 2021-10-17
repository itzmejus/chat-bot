import React from 'react'
import Navbar from './Routes/Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ChatBot from './Routes/ChatBot'
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Switch>
      <Route path ='/Chatbot' component={ChatBot}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App
