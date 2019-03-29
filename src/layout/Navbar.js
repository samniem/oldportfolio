import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.css';


function Navbar() {
    return(
        <div className="NavContainer">
            <Link to="/"><header className="BG"></header></Link>
            <navbar className="NavStyle">
                <Link className="LinkStyle" to="/">Home</Link>
                <Link className="LinkStyle" to="/portfolio">Portfolio</Link>
                <a className="LinkStyle" href="https://www.github.com/samniem" target="_blank">Github</a>
                <a className="LinkStyle" href="https://www.linkedin.com/in/sami-nieminen/" target="_blank">Linkedin</a>
            </navbar>
        </div>
    )
}


export default Navbar;