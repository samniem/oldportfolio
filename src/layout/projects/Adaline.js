import React from 'react';
import './Projects.css'

import Adaline1 from './Images/adaline1.png'
import Adaline2 from './Images/adaline2.png'
import Adaline3 from './Images/adaline3.png'
import Adaline4 from './Images/adaline4.png'
import Adaline5 from './Images/adaline5.png'
import Adaline6 from './Images/adaline6.png'
import Adaline7 from './Images/adaline7.png'

function Adaline() {
    return(
        <div className="Container">
            <img src={Adaline1} alt="adaline1.png" />
            <img src={Adaline2} alt="adaline2.png" />
            <img src={Adaline3} alt="adaline3.png" />
            <img src={Adaline4} alt="adaline4.png" />
            <img src={Adaline5} alt="adaline5.png" />
            <img src={Adaline6} alt="adaline6.png" />
            <img src={Adaline7} alt="adaline7.png" />
            <a className="LinkStyle" href="https://github.com/samniem/Adaline/blob/master/Adaline.ipynb" target="_blank">Code also available on Github</a>
        </div>
    )
}

export default Adaline;