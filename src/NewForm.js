import React, {Component} from 'react'
import uuid from 'uuid/v4'
import "./NewForm.css"

class NewForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			task:  ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({
			//same as task: event.target.value
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event){
		event.preventDefault();
		// takes in the current state (already in an object), adds id from uuid
		this.props.createTodo({...this.state, id: uuid(), completed: false});
		// empty out task
		this.setState({task: ""})
	}

	

	render() {
		return (
			<form className="NewForm" onSubmit={this.handleSubmit}>
				<label htmlFor="task" >New Todo  </label>
				<input 
					type = "text" 
					placeholder = "type new task"
					//id is for htmlFor to recognize
					id = "task" 
					//name needs to match task in this.state
					name = "task"
					value = {this.state.task}
					onChange = {this.handleChange}
				/>
				<button>Add New Todo</button> 
			</form>
		)
	}


}

export default NewForm;