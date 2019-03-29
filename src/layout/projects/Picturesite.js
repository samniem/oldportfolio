import React from 'react';
import './Projects.css'
import PICsite1 from './Images/photography1.png'
import PICsite2 from './Images/photography2.png'


function Picturesite() {
    return(
        <div className="Container">
        <h1>Django Website with mySQL</h1>
        <a className="LinkStyle" href="https://github.com/samniem/DjangoPictureSite" target="_blank">Link to project Github</a>
        <img src={PICsite1} alt="photography1.png" />
        <br/>
        <img src={PICsite2} alt="photography2.png" />
        <br></br>
        </div>
    )

}

export default Picturesite