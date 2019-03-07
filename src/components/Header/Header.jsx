import React from 'react';
import ToolbarLink from '../ToolbarLink';

import './Header.css';

const Header = ({user}) => {
  return (
    <div className="header d-flex">
      <h3>
        <ToolbarLink exact to="/">StarWars DB</ToolbarLink>
      </h3>
      <ul className="d-flex">
        <li>
          <ToolbarLink to="/people/">People</ToolbarLink>
        </li>
        <li>
          <ToolbarLink to="/planets/">Planets</ToolbarLink>
        </li>
        <li>
          <ToolbarLink to="/starships/">Starships</ToolbarLink>
        </li>
        <li>
          {user ?
            <ToolbarLink to="/logout">Logout</ToolbarLink>
            :
            <ToolbarLink to="/signin">Sign In</ToolbarLink>
          }
        </li>
      </ul>
    </div>
  );
};

export default Header;