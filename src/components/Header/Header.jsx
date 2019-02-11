import React from 'react';
import ToolbarLink from '../ToolbarLink';

import './Header.css';

const Header = () => {
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
      </ul>
    </div>
  );
};

export default Header;