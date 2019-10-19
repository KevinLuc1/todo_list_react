import React, {Component} from 'react'
import "./Todo.css"

class Todo extends Component {
	constructor(props){
		super(props);
		this.state = {
			isEditing: false,
			input: this.props.task
		}

		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleRemove(){
		// props passed in from TodoList
		this.props.removeTodo(this.props.id)
	}

	toggleForm(){
		this.setState({
			isEditing: true
		})
	}


	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSave(e){
		e.preventDefault();
		// take new task data and pass up to parent
		this.props.updateTheTodo(this.props.id, this.state.input);
		this.setState({
			isEditing:false
		})
	}

	handleToggle(e){
		this.props.toggleTodo(this.props.id)
	}

	render() {
		let results;
		if (this.state.isEditing){
			results = (
				<div className="Todo">
					<form className="Todo-edit-form" onSubmit={this.handleSave}>  
						<input 
							type="text"
							name = "input"
							value = {this.state.input}
							onChange = {this.handleChange}

						/>
						<button> Save Changes </button>
					</form>
				</div>
			)
		}
		else (
			results = (
				<div className="Todo">
					<li className={this.props.completed ? "Todo-task completed" : "Todo-task"} 
						onClick={this.handleToggle}
					> 
						{this.props.task} 
					</li>
					<div className="Todo-buttons">	
						<button onClick={this.toggleForm}>
							<i class='fas fa-pen' />
						</button>
						<button onClick={this.handleRemove}>
							<i class='fas fa-trash' />
						</button>
					</div>
				</div>
			)

		)

		return (
			results
		)
	}





}

export default Todo;