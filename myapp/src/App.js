import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '',  date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({description: event.target.value});
  }


  inputChanged2 = (event) => {
    this.setState({date: event.target.value});
  }

  handleDelete (itemToBeDeleted) {
    var newItems = this.state.todos.filter((_item) => {
      return _item !== itemToBeDeleted
    });

    this.setState({todos: newItems});
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
          <fieldset>
            Description: <input type="text" onChange={this.inputChanged} value={this.state.description}/>
            Date: <input type="date" onChange={this.inputChanged2} value={this.state.date}/>
            <input type="submit" value="Add"/>
          </fieldset>
          </form>
        </div>
        <div className="table">

            {
              this.state.todos.map((item, index) => 

              <table key={index}>
                <tbody>
                  {item}
                  <a href="#" onClick= {this.handleDelete.bind(this, item) }>
                  delete</a>
                </tbody>
              </table>)
            }
        </div>          
      </div>    
    );
  }
}

export default App;