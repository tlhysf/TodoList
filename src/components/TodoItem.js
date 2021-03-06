import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? "line-through" : "none",
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div className="todo" style={this.getStyle()}>
				<p>
					<input 
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>{" "}
					{title}
					<button
						className='btn delete-btn'
						onClick={this.props.delTodo.bind(this, id)}
					>
					x
					</button>
				</p>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
