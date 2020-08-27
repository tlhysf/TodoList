import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: '',
        
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title:''
        });
    }

    render() {
        return (
            <div className='container add-todo'>
                <form 
                    onSubmit={this.onSubmit}
                    style={{display: 'flex'}}>
                    <input 
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder="Add Todo..."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input
                        className="btn form-btn"
                        type="submit"
                        value="Add"
                    />
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
	Addtodo: PropTypes.func.isRequired,
};

export default AddTodo;