import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import PokeList from './components/PokeList';
import PokeDetail from './components/PokeDetail';
import PokeTypes from './components/TypeList';

const App = props => {
  const [pokeList, setPokeList] = useState([]);
  const [typeList, setTypeList] = useState([])
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => setPokeList(res.data.results));
    axios.get('https://pokeapi.co/api/v2/type')
    .then(res => setTypeList(res.data.results));
  }, []);

  let content = (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Route path="/poke-list" render={props => (
            <PokeList pokeList={pokeList}/>)} />
          <Route path="/poke-types" render={props => (
            <PokeTypes typeList={typeList}/>)} />
          <Route path='/pokemon/:id' render={props => (
            <PokeDetail />
          )}></Route>
        </div>
      </div>
    </Router>
  );
  return content;
  }

export default App;

