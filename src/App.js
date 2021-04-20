import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Services from './Components/ForHome/Services/Services';
import Admin from './Pages/Admin/Admin';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

// user context
export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <PrivateRoute path='/admin'>
                <Admin/>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact isNav={true} />
            </Route>
            <Route path='/services'>
              <Services isNav={true} />
            </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App  
