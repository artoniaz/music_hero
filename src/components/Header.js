import React from 'react';

const Header = props => {
    return (
        <header className='header'>
            <h1 className="header__title" onClick={props.resetApp}>full guitar tabs database</h1>
        </header>
    )
}

export default Header;