import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Delete_btn.css';


export class Todoitem extends Component {

    getStyle = () =>{


        return{
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: this.props.todo.completed ? '#888' : '#eee',
            color: this.props.todo.completed ? '#fff' : '#7e0a0a'
        
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
  
            <div style={this.getStyle()}>
                <p>
                    <input type= "checkbox" onChange = {this.props.checkBox.bind(this, id)}/> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} className="Delete_btn">x</button>
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    checkBox: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
    
}





export default Todoitem
