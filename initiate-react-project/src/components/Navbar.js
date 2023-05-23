import "../styles/Navbar.css"
import logo from "../assets/escape_logo.jpeg";

function Navbar() {
    return (
        <ul id="navbar">
            <div className="navbarLogo-container">
                <img id="navbarLogo" src ={logo}/>
            </div>
            <div className="navbarItem-container">
                <li className="navbarItem">Test</li>
                <li className="navbarItem">Test</li>
                <li className="navbarItem">Test</li>
                <li className="navbarItem">Test</li>
            </div>

        </ul>
    );
}

export default Navbar;