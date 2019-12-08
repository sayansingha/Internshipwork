import React from 'react';
import { Navbar,Nav } from 'react-bootstrap'

function navbar() {
    return (
        
            <Navbar bg="light" expand="lg">
            <Navbar href="#home">Logo</Navbar>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#list">List</Nav.Link>
                <Nav.Link href="#escalation">Escalation</Nav.Link>
                <Nav.Link href="#settings">Settings</Nav.Link>
                <Nav.Link href="#account">Account</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        
    )
}
export default navbar;