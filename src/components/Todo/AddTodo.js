import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    //when submit button is clicked..
    onSubmit = (e) => {
        //to prevent the website to submit to actual file
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input type="text" name="title" style={{flex: '10', padding: '5px', fontSize: '15px'}} placeholder="Add Todo ..." value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}} disabled={!this.state.title}/>
            </form>
        )  
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
    
}

const formStyle = {
    display: 'flex',
    height: '45px'
}

export default AddTodo
