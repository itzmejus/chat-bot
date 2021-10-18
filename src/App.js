import React from 'react'
import Navbar from './Layouts/Navbar'
import ChatBot from './Routes/ChatBot'
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Switch> 
    <Route path="/bot" component={ChatBot} />
      </Switch>
      
    </div>
    </BrowserRouter>
  )
}

export default App
