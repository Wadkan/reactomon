import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import {v4 as uuid} from "uuid"; 
import axios from 'axios';

import Navbar from './components/layout/Navbar'
import PokeList from './components/PokeList';
import PokeTypes from './components/PokeTypes';

class App extends Component{
  state = {
    pokeList: [],
    typeList: []
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => this.setState({ pokeList: res.data.results }));
    axios.get('https://pokeapi.co/api/v2/type')
      .then(res => this.setState({ typeList: res.data.results }));
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Navbar />
            <Route path="/poke-list" render={props => (
              <React.Fragment>
                <PokeList pokeList={this.state.pokeList}/>
              </React.Fragment>
            )} />
            <Route path="/poke-types" render={props => (
              <React.Fragment>
                <PokeTypes typeList={this.state.typeList}/>
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

