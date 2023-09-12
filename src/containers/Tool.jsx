import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Tool() {
  return (
    <div className='tool-sec'>
      <Container>
        <Row className='justify-content-center'>
            <Col md={12}>
                <div className='tool-content text-center'>
                    <h1>YouTube to MP3 Converter</h1>
                    <p>With this tool you can instantly convert your youtube videos into mp3</p>
                    <form className='convert-form'>
                        <input type="text" placeholder='Enter youtube link here...' />
                        <button type="submit">Convert</button>
                    </form>
                    <a href="#">Download MP3</a>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Tool
