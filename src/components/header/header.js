import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
export default class Header extends React.Component{
    render(){
        return(            
            <div>
            <Nav tabs>
            <NavItem>
                <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#authors">Authors</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/#about">About</NavLink>
            </NavItem>            
            </Nav>
            </div>
        );
    }
}