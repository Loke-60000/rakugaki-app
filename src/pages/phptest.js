import React from 'react';
import '../css/phptest.css';
import Register from "../Components/register";
import Login from "../Components/login";
import NavBanner from "../Components/NavBanner";
import logo from '../assets/logo.svg';
function Testphp() {
  
    return (
            <>
                <NavBanner style=""/>
                <div className="hazard-background p-5">

                </div>
                <h1 className="title p-3">PHP TEST RAKUGAKI</h1>

                <Register/>
                <Login/>
                <div className="hazard-background p-5">

                </div>
                <a href="http://www.google.com">
                   <img src={logo} />
                </a>
            </>
    );
}

export default Testphp;
