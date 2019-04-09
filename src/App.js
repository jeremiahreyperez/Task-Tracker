import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Todos from './components/Todo/Todos';
import AddTodo from './components/Todo/AddTodo';
import About from './components/Pages/About';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.setState({ todos: JSON.parse(storedTodos) });
      return;
    } else {
      localStorage.setItem('todos', [JSON.stringify(this.state.todos)]);
    }
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
    const list = this.state.todos;
    localStorage.setItem('todos', JSON.stringify(list));
  };

  deleteTodo = id => {
    const list = [...this.state.todos];
    const updatedList = list.filter(todo => todo.id !== id);

    this.setState({ todos: updatedList });
    localStorage.setItem('todos', JSON.stringify(updatedList));
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title.charAt(0).toUpperCase() + title.slice(1),
      completed: false
    };
    const list = [...this.state.todos];
    list.push(newTodo);
    this.setState({ todos: list });
    localStorage.setItem('todos', JSON.stringify(list));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/Task-Tracker"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
