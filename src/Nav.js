import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

  return (
      <nav>
          <ul className="nav-links">
              <Link  to ="/weather">
                <li>Weather</li>
              </Link>
              <Link  to ="/covid">
                <li>Covid</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
