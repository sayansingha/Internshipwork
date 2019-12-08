import React from 'react';
import { Navbar,Nav } from 'react-bootstrap'
import home from "./home-solid.svg"
import list from "./list-solid.svg"
import escal from "./chevron-up-solid.svg"
import settings from "./cogs-solid.svg"
import account from "./user-circle-solid.svg"
import "./pagi.css"
function navbar() {
    return (
        
            <Navbar bg="light" expand="lg">
            <Navbar href="#home">Logo</Navbar>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <img src={home} width="30" height="30"/>
                <Nav.Link href="#Home">Home</Nav.Link>
                <img src={list} width="30" height="30"/>
                <Nav.Link href="#list">List</Nav.Link>
                <img src={escal} width="30" height="30"/>
                <Nav.Link href="#escalation">Escalation</Nav.Link>
                <img src={settings} width="30" height="30"/>
                <Nav.Link href="#settings">Settings</Nav.Link>
                <img src={account} width="30" height="30"/>
                <Nav.Link href="#account">Account</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        
    )
}
export default navbar;