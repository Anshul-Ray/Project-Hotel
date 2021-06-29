import React from "react";
import {Link} from "react-router-dom";

export default class Admin_Nav extends React.Component
{
    render()
    {
        return(
            <nav className="navbar navbar-dark bg-danger navbar-expand-lg">
                <Link to='/' className="navbar-brand m-3"><strong>OHO</strong></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                             <Link to='/admin/signed' className="nav-link">Hotels</Link>
                         </li>
                         <li className="navbar-item">
                             <Link to='/admin/signed/create' className="nav-link">Add Hotel</Link>
                         </li>
                         <li className="navbar-item">
                             <Link to='/admin/signed/add' className="nav-link">Add Admin</Link>
                         </li> 
                         <li className="navbar-item">
                             <Link to='/admin/signed/list' className="nav-link">Admin List</Link>
                         </li>
                     </ul>
                 </div>
             </nav>
        );        
    }
}