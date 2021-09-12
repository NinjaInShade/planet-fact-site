import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileNav from '../MobileNav/MobileNav';
import PlanetsDataJSON from '../../planetsData.json';
import './Navbar.css';

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className='navbar'>
      <MobileNav active={mobileNav} setActive={setMobileNav} links={PlanetsDataJSON} />
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
          aria-label='Hamburger'
          className={`navbar-hamburger ${mobileNav && 'navbar-hamburger-active'}`}
          onClick={() => {
            setMobileNav(!mobileNav);
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
