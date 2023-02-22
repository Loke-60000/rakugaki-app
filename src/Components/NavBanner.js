import logo from '../assets/logo.svg';
import '../css/navbar.css'
import '../custom.scss'

function NavBanner() {
    return(
        <>
        <nav className="navbar navbar-primary bg-primary" id='navbar'>
            <div className="container-fluid">
                <img className="logo" src={logo} alt=""></img>
            </div>
        </nav>
        </>
    )
};

export default NavBanner;