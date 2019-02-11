import React from 'react';
import { NavLink } from 'react-router-dom';

import './activeLink.css'

function ToolbarLink({ children, ...rest }) {
    return (
        <NavLink activeClassName="active" {...rest}>{children}</NavLink>
    );
}

export default ToolbarLink;