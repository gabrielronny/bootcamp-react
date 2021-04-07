import React from 'react';
import Logo from '../images/logo.png';
import Avatar from '../images/avatar.png';


function NavBar() {
    return(
   
        <nav>
            <div className="container">
                <img className="logo" src={Logo}alt="Logo" />
                <img src={Avatar} alt="Avatar" className="avatar" />
            </div>
        </nav>
    


    );
}


export default NavBar;