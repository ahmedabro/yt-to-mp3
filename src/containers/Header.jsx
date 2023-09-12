import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <Row>
            <Col md={4}>
                <a href="#" className='logo'>YouTube2MP3</a>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header
