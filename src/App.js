import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import {v4 as uuid} from "uuid"; 
import axios from 'axios';

import Navbar from './components/layout/Navbar'
import PokemonsList from './components/PokemonsList';

class App extends Component{
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    } )})
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // AddTodo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos:
        [...this.state.todos, res.data] }));
    }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Navbar />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <PokemonsList todos={this.state.todos} markComplete={this.markComplete}
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

