import './_navbar.scss';

import React from 'react';
import {Link} from 'react-router-dom';

 //component in react router dom, allows us to make fancy links

class Navbar extends React.Component {
  //this shit is static
  render() {
    return(
      <header>
        <h1> ToDo App </h1>
        <nav>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
            <li><Link to='/about'>About Me</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar;
