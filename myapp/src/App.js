import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', todos: [], date: ''}
  }

  inputChanged = (event) => {
    this.setState({description: event.target.value});
  }

  inputChanged2 = (event) => {
    this.setState({date: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.description, this.state.date]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div className="form">
          <form onSubmit={this.addTodo}>
          <legend>Add todo: </legend>
            Description: <input type="text" onChange={this.inputChanged} value={this.state.description}/>
            Date: <input type="date" onChange={this.inputChanged2} value={this.state.date}/>
            <input type="submit" value="Add"/>
          </form>
        </div>
        <div>

            {
              this.state.todos.map((item, index) => 

              <table key={index}>
                <tbody>
                  <tr>
                    <td><th>Description</th></td>
                    <td><th>Date</th></td>
                  </tr>
                  <tr><th>{item}</th></tr>
                </tbody>
              </table>)
            }
        </div>          
      </div>    
    );
  }
}

export default App;