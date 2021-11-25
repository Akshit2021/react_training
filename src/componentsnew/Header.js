import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>Home</NavLink>
        <NavLink to ="/edit" activeClassName="isActive" exact={true}>Edit</NavLink>
        {/* <NavLink to ="/create" activeClassName="isActive">Create</NavLink> */}
        <NavLink to ="/help" activeClassName="isActive">Help</NavLink>
    </div>
);

export default Header