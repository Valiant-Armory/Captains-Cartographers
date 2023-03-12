import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <>
    <div className="main-page-header-img">
    
    <div className="main-page-header-nav">
    <button className="nav-button" title="Account">Account</button>
      <button className="nav-button" title="Test">Test</button>
      <button className="nav-button" title="Test">Test</button>
      <button className="nav-button" title="Test">Test</button>
      <button className="nav-button" title="Test">Test</button>
    </div>
    </div>
    </>
  );
}

export default Header;