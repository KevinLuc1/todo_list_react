import React , { Component } from 'react';
import Todo from './Todo.js'
import NewForm from './NewForm.js'
import "./TodoList.css"



class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		}
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this);

	}
	
	create(NewTodo){
		this.setState({
			// ...this.state.todos copies the entire todo list
			// then add the NewTodo
			todos: [...this.state.todos, NewTodo]
		})
	}

	remove(id){
		this.setState({
			// not good to mutate existing state
			// better to create a new array
			// we filter out the matching id
			todos: this.state.todos.filter(item => item.id !== id)
		})
	}

	update(id, updatedTodo){
		const newUpdatedTodo = this.state.todos.map(eachItem => {
			if (eachItem.id === id){
				return {...eachItem, task: updatedTodo}
				// we dont use return {task: updatedTodo}
				// or else we will lose the uuid
			}
			else {
				return eachItem
			}
		})
		this.setState({
			todos: newUpdatedTodo
		})
	}

	toggleComplete(id) {
		const newUpdatedTodo = this.state.todos.map(eachItem => {
			if (eachItem.id === id){
				return {...eachItem, completed: !eachItem.completed}
				
			}
			else {
				return eachItem
			}
		})
		this.setState({
			todos: newUpdatedTodo
		})
	}



	render() {
		const displayTodos = this.state.todos.map(item => {
			return <Todo
						// this item.id comes from NewForm using npm uuid
						key = {item.id}
						// passing a new prop "id" because key does not pass down
						id = {item.id} 
						task = {item.task} 
						completed={item.completed}
						removeTodo={this.remove}
						updateTheTodo={this.update}
						toggleTodo={this.toggleComplete}
					/>;
			}
		)
		return (
			<div className="TodoList">
				<h1> Todo List <span>Simple React Todo List App</span></h1>
				<ul>
					{displayTodos}
				</ul>
				<NewForm createTodo={this.create}/>

			</div>
		)
	}
}






export default TodoList;
