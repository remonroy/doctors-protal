import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Appoinment from './Component/Appoinment/Appoinment/Appoinment';
import Login from './Component/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivetRoute from './Component/Login/PrivetRoute/PrivetRoute';
import Dashbord from './Component/Dashbord/Dashbord/Dashbord';
import AddDoctor from './Component/Dashbord/AddDoctor/AddDoctor';


export const userContext=createContext()

function App() {
  const[loggedInuser,setLoggedInuser]=useState({})
  return (
    <userContext.Provider value={[loggedInuser,setLoggedInuser]}>
      <Router>
        {/* <h1>Email:{loggedInuser.email}</h1> */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivetRoute path="/appoinment">
            <Appoinment></Appoinment>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute path="/dashbord">
            <Dashbord></Dashbord>
          </PrivetRoute>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
