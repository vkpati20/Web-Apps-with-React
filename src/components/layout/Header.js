import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'


function Header(){
    return (
        <header className='headerStyle'>
            <h1>Website using React</h1>
            <div className="linkButton">
            <Link style = {linkStyle} to="/">Home</Link>
            </div> | 
            <div className="linkButton">

            <Link style = {linkStyle} to="/Todo_app">Todo List</Link>
            </div> |
            <div className="linkButton">

            <Link style = {linkStyle} to="/Weather">Weather</Link>
            </div>
            
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '10px'
}

export default Header;