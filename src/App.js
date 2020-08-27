import React, { Component } from "react";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from './components/layout/Header';
import About from './components/pages/About';

import {BrowserRouter as Router, Route} from "react-router-dom";

// import {v4} from 'uuid';
import axios from 'axios';

import "./App.css";


class App extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(res => this.setState({todos : res.data}))
	}

	markComplete = (id) => {
		axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			completed: true
		}).then(res => this.setState({ 
			todos: this.state.todos.map(todo => {
				if (todo.id === id){
				todo.completed = !todo.completed;
			}
			return todo;
		})}))
	}

	delTodo = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => this.setState({
				todos: [...this.state.todos.filter(todo => todo.id !== id )]
		}));
		
	};

	addTodo = (title) => {
		
		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed:false
		}).then(res => this.setState({
			todos: [...this.state.todos, res.data] 
		}))
	}


	render() {
		return (
			<Router>
				<div className="App" style={ { fontFamily: "arial" }}>
					<div className="container main">
						<Header />
						<Route exact path="/" render={props => (
							<React.Fragment>
								<AddTodo addTodo={this.addTodo}/>
								<Todos
									className="todolist"
									todos={this.state.todos} 
									markComplete={this.markComplete}
									delTodo={this.delTodo}
								/>
							 </React.Fragment>
						)} />

						<Route path="/about" component={ About } />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
