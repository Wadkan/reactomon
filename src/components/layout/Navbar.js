import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>NAVBAR</h1>
            <Link style={linkStyle} to="/">PokemonList</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10x'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
