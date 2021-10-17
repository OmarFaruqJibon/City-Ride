import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from "./components/context/AuthProvider";
import AboutCompany from "./components/Home/AboutCompany/AboutCompany";
import Contacts from "./components/Home/Contacts/Contacts";
import Home from "./components/Home/Home/Home";
import Vehicles from "./components/Home/Vehicles/Vehicles";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Shared/Login/Login";
import PrivateRoute from "./components/Shared/Login/PrivateRoute/PrivateRoute";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <AboutCompany></AboutCompany>
        </Route>
        <Route path="/contact">
          <Contacts></Contacts>
        </Route>
        <Route path="/vehicles">
          <Vehicles></Vehicles>
        </Route>
        <Route path="/book-vehicles/:id">
          <ServiceDetail></ServiceDetail>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
