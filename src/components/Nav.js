import React from 'react';
import logo from '../assets/logo.png'
// Functional component

const Nav = (props) => {
  console.log(props);
  return (
    <nav className='nav'>
      <img src={logo} alt=""/>
      <ul>
        <li>{props.firstTab}</li>
        <li>{props.secondTab}</li>
        <li>{props.thirdTab}</li>
      </ul>
    </nav>
  )
};

export default Nav;