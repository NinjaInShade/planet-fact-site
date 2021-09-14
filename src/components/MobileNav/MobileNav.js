import React from 'react';
import { Link } from 'react-router-dom';
import './MobileNav.css';

export default function MobileNav({ active, setActive, links }) {
  return (
    <nav
      className={`mobile-nav ${active && 'mobile-nav-active'}`}
      role='navigation'
      aria-labelledby='mobile page navigation'
    >
      <ul>
        {links.map((link, index) => {
          return (
            <li className='mobile-nav-link' key={index}>
              <Link
                to={`/${link.name.toLowerCase()}`}
                className={`nav-mobile mobile-nav-link-a mobile-nav-link-${link.name.toLocaleLowerCase()}`}
                onClick={() => setActive(!active)}
                tabIndex='-1'
              >
                <div className='mobile-nav-circle-container'>
                  <div className='mobile-nav-circle'></div>
                  <span>{link.name}</span>
                </div>
                <svg xmlns='http://www.w3.org/2000/svg' width='6' height='8'>
                  <path fill='none' stroke='#FFF' opacity='.4' d='M1 0l4 4-4 4' />
                </svg>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
