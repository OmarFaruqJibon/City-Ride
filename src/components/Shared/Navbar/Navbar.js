import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import carLogo from '../../../images/654.jpg' 
import useFirebase from '../../hooks/useFirebase';
const Navbar = () => {
    const {user, googleSignOut} = useFirebase();
    console.log(user);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex">
                        <img src={carLogo} style={{ height: '50px', width: '100px' }} alt="" />
                        <h1 className="brand-title">CITY <br/> RIDE</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/about" className="nav-link">About us</Link>
                            <Link to="/vehicles" className="nav-link">Vehicles</Link>
                            {
                                <Link to="/bookingsList" className="nav-link">User Dashboard</Link>
                            }
                            {
                                 <Link to="/admin/orderList" className="nav-link">Admin</Link>
                            }
                            <Link to="/contact" className="nav-link">Contact</Link>
                            {user.email ?
                                <button onClick={googleSignOut} className="btn btn-warning me-2" >SIGN OUT</button> :
                                 <Link to="/login"><button className="btn btn-warning me-2" >SIGN IN</button> </Link>
                            }
                            { <span className="mt-lg-2 text-success">{user.displayName}</span> }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;