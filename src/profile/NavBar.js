import React, { Component } from 'react'
import { Nav, Navbar, Form, Button}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



 export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar  bg="light" variant="light">
                <Navbar.Brand href="#home">My Blog</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Profile</Nav.Link>
                    <Nav.Link href="#pricing">Features</Nav.Link>
                </Nav>
                <Form inline>
                   
                    <Button variant="outline-primary">log out</Button>
                </Form>
            </Navbar>
            </div>
        )
    }
}

export default NavBar
