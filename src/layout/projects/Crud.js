import React from 'react';
import './Projects.css'
import CRUDmain from './Images/CRUDmain.png'
import CRUDadd from './Images/CRUDadd.png'
import CRUDedit from './Images/CRUDedit.png'

function Crud() {
    return(
        <div className="Container">
        <h1>CRUD Application with Express.js</h1>
        <img src={CRUDmain} alt="CRUDmain.png" />
        <img src={CRUDadd} alt="CRUDadd.png" />
        <img src={CRUDedit} alt="CRUDedit.png" />
        <br></br>
        <p>The full code is available on my Github</p>
        <a className="LinkStyle" href="https://github.com/samniem/CRUDwithMongoDB" target="_blank">Code is available on Github</a>
        </div>
    )

}

export default Crud