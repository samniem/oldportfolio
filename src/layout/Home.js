import React from 'react';
import './MainAside.css'
import './Home.css'
import { Link } from 'react-router-dom';

import Music from './images/pexelmusic.jpg'
import RandomForest from './images/study-area.png'
import ADALINE from './images/adaline.png'
import ReactPic from './images/reactjs.jpg'
import CRUD from './images/crud.jpg'
import Djangopic from './images/djangomysql.jpg'

function Home() {
    return(
        <div className="Container">
            <section className="Mainbar">
            <div className="FacePic">
            </div>
            <p className="Intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed nibh faucibus, aliquam orci eget, sollicitudin ex. Sed accumsan risus neque, nec pretium felis ornare tempor. Duis tempor posuere lacus quis rhoncus. Nullam venenatis turpis a auctor dictum. Maecenas ut enim mollis, pellentesque sem in, lobortis magna. Curabitur tincidunt, risus a facilisis imperdiet, nisl arcu aliquam orci, a dapibus tellus est vel mi. Maecenas pulvinar eget nisl condimentum dapibus. Fusce non egestas mauris. Quisque erat odio, iaculis ut tortor ac, mattis dignissim purus. Ut maximus dignissim leo ut consequat. Aliquam metus magna, pulvinar sed dapibus sed, varius ut tortor. Nullam interdum augue dolor. Phasellus maximus nisl sapien, nec porttitor lectus porta vehicula. 
            </p>
            <p className="Intro">Quisque at purus convallis, luctus mi eget, dapibus nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget finibus nisl. Ut sollicitudin tortor felis, at cursus ligula luctus a. Sed a laoreet augue. Proin semper maximus ipsum, nec varius eros maximus quis. Ut euismod metus nunc, in aliquet lectus consequat vitae. Vivamus molestie nisi ut pulvinar vehicula. Nam eu interdum sapien. Phasellus consectetur lorem ac erat scelerisque, sed suscipit enim tristique. Nam bibendum urna vitae malesuada tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vulputate dui non ante placerat pellentesque. Donec elit lacus, faucibus eget volutpat sit amet, dapibus ac ligula. Maecenas ornare laoreet lorem, quis placerat enim dignissim non. Fusce rutrum consequat lorem, vel condimentum lorem venenatis in.  </p>
            <p className="Intro"> Mauris sit amet vehicula mauris, sed bibendum purus. Sed vehicula fringilla magna, vel finibus diam porttitor ut. Proin nec dapibus eros. In id tempor purus. Morbi pharetra nulla lectus, eget condimentum turpis vehicula sed. Aenean et laoreet libero, vitae placerat diam. Integer dui neque, tincidunt quis mollis nec, malesuada vel turpis. Vivamus venenatis nec neque sit amet dignissim. In hac habitasse platea dictumst. Phasellus mi lectus, euismod quis nisi a, laoreet venenatis diam. Duis nec fermentum eros, ut dignissim lectus. Quisque vel luctus sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris aliquam, erat ut hendrerit interdum, odio sem rutrum erat, in tincidunt massa turpis at erat. Donec in volutpat dui, vel posuere erat. Nam finibus ligula sit amet ligula egestas commodo.  </p>
            </section>
            <aside className="Sidebar">
                <h1>Projects</h1>
                <div className="HomeContainer">
                    <img src={CRUD} alt="crud.jpg"/>
                    <Link className="ProjLink" to="/crudapp">
                    <h3>CRUD application</h3> 
                    </Link>
                </div>
                <div className="HomeContainer">
                    <img src={Djangopic} alt="djangopic.jpg"/>
                    <Link className="ProjLink" to="/picturesite">
                    <h3>Django mySQL Picture Hosting Site</h3> 
                    </Link>
                </div>
                <div className="HomeContainer">
                    <img src={ReactPic} alt="ReactLogo.jpg" />
                    <h3>ReactJS Website</h3>
                </div>
                <div className="HomeContainer">
                    <img src={Music} alt="PCA.png" />
                    <Link className="ProjLink" to="/neuralnet" >
                        <h3>Neural Network Music Classification</h3>
                    </Link>
                </div>
                <div className="HomeContainer">
                    <img src={RandomForest} alt="RandomForest.png" />
                    <Link className="ProjLink" to="/randomforest" >
                        <h3>Random Forest Land Classification</h3>
                    </Link>
                </div>
                <div className="HomeContainer">
                    <img src={ADALINE} alt="RandomForest.png" />
                    <Link className="ProjLink" to="/adaline" >
                        <h3>Adaptive Linear Neuron</h3>
                    </Link>
                </div>
            </aside>
        </div>

    )
}

export default Home;