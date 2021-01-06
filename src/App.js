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
    pokemons: []
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => this.setState({ pokemons: res.results }))
  }

  // // Toggle Complete
  // markComplete = (id) => {
  //   this.setState({ todos: this.state.todos.map(todo => {
  //     if(todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //     return todo
  //   } )})
  // }

  // // Delete Todo
  // delTodo = (id) => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  // }

  // // AddTodo
  // addTodo = (title) => {
  //   axios.post('https://jsonplaceholder.typicode.com/todos', {
  //     title,
  //     completed: false
  //   })
  //     .then(res => this.setState({ todos:
  //       [...this.state.todos, res.data] }));
  //   }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Navbar />
            <Route path="/poke-list" render={props => (
              <React.Fragment>
                <PokeList todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/poke-types" render={props => (
              <React.Fragment>
                <PokeTypes todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

