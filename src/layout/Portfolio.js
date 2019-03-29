import React from 'react';
import { Link } from 'react-router-dom';
import './MainAside.css'
import './Portfolio.css'
import ReactPic from './images/reactjs.jpg'
import RandomForest from './images/study-area.png'
import HTMLCSS from './images/htmlcss.png'
import PCA from './images/pca.png'
import ADALINE from './images/adaline.png'
import CRUD from './images/crud.jpg'
import Djangopic from './images/djangomysql.jpg'


function Portfolio() {
    return(
        <div className="Container">
            <div className="Project">
                <img src={Djangopic} alt="djangopic.jpg"/>
                <Link className="ProjLink" to="/picturesite"><h3>Picture Hosting Website</h3>
                </Link>
                <p>A Django + mySQL website for hosting pictures. Freshly uploaded pictures get added to the site automatically</p>
                <br/>
                <Link className="ProjLink" to="/picturesite">
                    Read more...
                </Link>
            </div>
            <div className="Project">
                <img src={CRUD} alt="crud.jpg"/>
                <Link className="ProjLink" to="/crudapp"><h3>CRUD database management</h3>
                </Link>
                <p>A CRUD application for managing user database. Uses Express.js, Node.js and MongoDB</p>
                <br/><br/>
                <Link className="ProjLink" to="/crudapp">
                    Read more...
                </Link>
            </div>
            <div className="Project">
                <img src={ReactPic} alt="rollox"/>
                <h3>ReactJS Portfolio Website</h3>
                <p>A portfolio webpage done for myself using React.js,
                    html and css.
                </p>
            </div>
            <div className="Project">
                <img src={RandomForest} alt="RandomForest.png"/>
                <Link className="ProjLink" to="/randomforest">
                    <h3>Random Forest Land Classification</h3>
                </Link>
                <p>Random forest land classification over Finland.
                    Classification was done using Python.
                    Sentinel-1, Sentinel-2 and Corine2012 have been
                    used as data sources.
                </p>
                <Link className="ProjLink" to="/randomforest">
                    Read more...
                </Link>
            </div>
            <Link className="LinkStyle" to="/neuralnet">
            </Link>
            <div className="Project">
                <img src={PCA} alt="pca.png"/>
                <Link className="ProjLink" to="/neuralnet">
                    <h3>Neural Network MLP For Music Classification</h3>
                </Link>
                <p>Classification of music genres with deep MLP
                    neural network. The data has been preprocessed
                    using principal component analysis.
                </p>
                <Link className="ProjLink" to="/neuralnet">
                    Read more...
                </Link>
            </div>
            <div className="Project">
                <img src={HTMLCSS} alt="HTMLCSS-example.png" />
                <Link className="ProjLink" to="/htmlcss">
                    <h3>HTML and CSS Website</h3>
                </Link>
                <p>A simple blog website done with HTML5 and CSS3. 
                    The main page and blog posts have been split to main
                    and aside sections. 
                </p>
                <br />
                <Link className="ProjLink" to="/htmlcss">
                    Read more...
                </Link>
            </div>
            <div className="Project">
                <img src={ADALINE} alt="adaline.png" />
                <Link className="ProjLink" to="/adaline">
                    <h3>Adaptive Linear Neuron</h3>
                </Link>
                <p>
                    Testing of adaptive linear neuron on randomly generated
                    data clusters. Changing learning rate to figure where
                    sum-squared error starts to converge.
                </p>
                <Link className="ProjLink" to="/adaline">
                    Read more...
                </Link>
            </div>
        </div>

    )
}

export default Portfolio;