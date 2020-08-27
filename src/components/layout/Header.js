import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h3>Todolist</h3> 
            <Link 
                className="link" 
                to='/'>
                Home
            </Link> 
            {' | '} 
            <Link 
                className="link"
                to='/about'>
                About
            </Link>
        </header>
    )
}

export default Header;
