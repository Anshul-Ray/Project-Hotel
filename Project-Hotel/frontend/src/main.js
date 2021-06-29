import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import User_Nav from "./components/nav_routes/User-Nav";
import AddAdmin from './components/admin/addAdmin';
import AllAdmins from './components/admin/adminlist';
import listHotels from "./components/admin/listHotels";
import editHotel from "./components/admin/editHotel";
import createHotel from "./components/admin/createHotel";
import {Home} from './components/home/homepage';
import Admin_Nav from './components/nav_routes/Admin_Nav';
import adminSign from "./components/admin/adminLogin";
import Team from "./components/aboutUs/team";
import About from './components/aboutPg/About';
import Payment from './components/home/payment';
function Main() {
  return (
    <Router>
        <Route path="/" exact component={User_Nav} />
        <Route path="/" exact component={Home} />
        <Route path="/user" component={User_Nav} />
        <Route path="/user" exact component={Home} />
        <Route path="/user/aboutPg" exact component={About} />
        <Route path="/user/aboutUS" exact component={Team} />
        <Route path="/user/payment" exact component={Payment}/>
        <Route path="/admin" exact component={adminSign} />
        <Route path="/admin/signed" component={Admin_Nav} />
        <Route path="/admin/signed" exact component={listHotels} />
        <Route path="/admin/signed/edit/:id" exact component={editHotel} />
        <Route path="/admin/signed/create" exact component={createHotel} />
        <Route path="/admin/signed/add" exact component={AddAdmin}/>
        <Route path="/admin/signed/list" exact component={AllAdmins}/>
    </Router>
  );
}

export default Main;
