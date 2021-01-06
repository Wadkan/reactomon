import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import PokeList from './components/PokeList';
import PokeDetail from './components/PokeDetail';
import PokeTypes from './components/TypeList';

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
              <PokeList pokeList={this.state.pokeList}/>)} />
            <Route path="/poke-types" render={props => (
              <PokeTypes typeList={this.state.typeList}/>)} />
            <Route path='/pokemon/:id' render={props => (
              <PokeDetail />
            )}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

