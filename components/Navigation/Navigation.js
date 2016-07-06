import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <div className="Navigation__wrapper">
      <a href="/" onClick={Link.handleClick}><div className="logo"><span className="logo__inner"></span></div></a>
      <ul className="Navigation" role="menu">
        <li className="Navigation-item">
          <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
        </li>
        <li className="Navigation-item">
          <a className="Navigation-link" href="/writing" onClick={Link.handleClick}>Writing</a>
        </li>

      </ul>

    </div>
  );
}

export default Navigation;
