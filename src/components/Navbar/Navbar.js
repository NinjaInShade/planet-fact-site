import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PlanetsDataJSON from '../../planetsData.json';
import './Navbar.css';

export default function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <strong className='logo'>The Planets</strong>
        <ul className='nav-links'>
          {PlanetsDataJSON.map((planetData, index) => {
            return (
              <li className='nav-link' key={index}>
                <NavLink
                  to={`/${planetData.name.toLowerCase()}`}
                  activeClassName='nav-link-a-active'
                  className={`nav nav-link-a nav-link-${planetData.name.toLocaleLowerCase()}`}
                >
                  {planetData.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className={`navbar-hamburger ${sidebarActive && 'navbar-hamburger-active'}`}
          onClick={() => {
            setSidebarActive(!sidebarActive);
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='17'>
            <g fill='#FFF' fill-rule='evenodd'>
              <path d='M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z' />
            </g>
          </svg>
        </button>
      </div>
    </nav>
  );
}
