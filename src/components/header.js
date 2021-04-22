import React from "react"
//import headerStyles from './header.module.css'
import * as headerStyles from "./header.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown, Form,FormControl,Button,Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const HearderComponent = () =>{
  return(
    <Navbar className={headerStyles.navbar} expand="md">
    <Container>
      <Navbar.Brand href="#home"><Image src="../assets/logo.png" /></Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/*<Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>*/}
          
        </Nav>
        <Button className={headerStyles.roundbtn} variant="light">Order Now</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default HearderComponent