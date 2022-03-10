import Link from 'next/link'
import { Navbar, Container, Nav  } from 'react-bootstrap'

export default function Bar() {
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container fluid>
        <Navbar.Brand href="/">Nebula API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Introduction</Nav.Link>
            <Nav.Link href="/cloud">Cloud API</Nav.Link>
            <Nav.Link href="/edge">Edge API</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
