import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Navbar from './layout/Navbar'
import Home from './layout/Home'
import Portfolio from'./layout/Portfolio'
import Neuralnet from './layout/projects/Neuralnet'
import ForestLand from './layout/projects/ForestLand'
import Htmlcss from './layout/projects/Htmlcss'
import Adaline from './layout/projects/Adaline'
import CRUD from './layout/projects/Crud'
import PICSITE from './layout/projects/Picturesite'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={props =>
            (<React.Fragment>
            <Home />
          </React.Fragment>)} />
          <Route path="/portfolio" component={ Portfolio } />
          <Route path="/neuralnet" component={ Neuralnet } />
          <Route path="/randomforest" component={ ForestLand } />
          <Route path="/htmlcss" component={ Htmlcss } />
          <Route path="/adaline" component={ Adaline } />
          <Route path="/crudapp" component={ CRUD }  />
          <Route path="/picturesite" component={ PICSITE } />
        </div>
      </Router>

    )
  }
}

export default App;
