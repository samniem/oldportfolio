import React from 'react';
import './Projects.css'
import Example1 from './Images/example1.png'
import Example2 from './Images/example2.png'
import Example3 from './Images/example3.png'

function Htmlcss() {
    return(
        <div className="Container">
        <h1>HTML and CSS website</h1>
        <img src={Example1} alt="example1.png" />
        <img src={Example2} alt="example2.png" />
        <img src={Example3} alt="example3.png" />
        <br></br>
        <a className="LinkStyle" href="https://github.com/samniem/BlogWebsiteSample" target="_blank">Code is available on Github</a>
        </div>
    )

}

export default Htmlcss