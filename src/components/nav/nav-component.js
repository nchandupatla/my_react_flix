import React from 'react';
import { Navbar, Badge,Label} from 'react-bootstrap';


const Nav = () => {
        return (
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#home"><Badge>MYFLEX</Badge></a>
                </Navbar.Brand>
            </Navbar.Header>
            <h1>
             <Label>POPULAR MOVIES</Label>
            </h1>
            </Navbar>
        );
}
    
export default Nav;