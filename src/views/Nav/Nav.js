import React from "react";
import './Nav.scss';
import {
    Link, NavLink
} from "react-router-dom"
class Nav extends React.Component {


    render() {
        return (
            <div class="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/todos" activeClassName="active">Todos</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/users" activeClassName="active">User</NavLink>

            </div >)
    }
}

export default Nav;