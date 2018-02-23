import React, { Component } from 'react';
import './App.css';

class TodoTable extends Component {
	constructor(props) {
		super(props);
		this.state = {description: '', date: '', todos: []}
	}


	 deleteTodo = (todoToBeDeleted) => {
    var newItems = this.state.todos.filter((_item) => {
      return _item != todoToBeDeleted
    });

    this.setState({ todos: newItems });
  }

	render() {
    return (
      <div className="App">
         <table>
            <tbody>
              <tr><th>Date</th><th>Description</th></tr>
              {this.props.todos.map((item, index) => <tr key={index}><td>{item.date}</td><td>{item.description} <button onClick= { this.deleteTodo.bind(this, item) }>delete</button></td></tr>)}
            </tbody>
          </table>
        </div>       
    );

  }

}

export default TodoTable;