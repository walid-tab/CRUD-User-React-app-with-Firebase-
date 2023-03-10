import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Nav() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="Title"> Users App</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nav