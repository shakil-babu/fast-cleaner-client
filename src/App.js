import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Services from './Components/ForHome/Services/Services';
import Admin from './Pages/Admin/Admin';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/contact'>
              <Contact isNav={true} />
            </Route>
            <Route path='/services'>
              <Services isNav={true} />
            </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App  
