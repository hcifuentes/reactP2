import React from 'react';
import logo from './../logo.svg';

class Header extends React.Component{

    render () {
        return (
            <div style={{color: 'red'}}> soy un div {this.props.text}</div>
        );
    }
}

export default Header;