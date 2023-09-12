import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { youtube_parser } from './utils'

function Tool() {
    const [inputData, setInputData] = useState("")
    const inputElem = useRef()
    const youtubeID = youtube_parser(inputData)
    const [urlResult, setUrlResult] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputElem.current.value)
        console.log(youtubeID)

    
        const options = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: {id: youtubeID},
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_RAPID_YOUTUBE_MP3_KEY,
              'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }
          };

          axios(options)
            .then(resp => setUrlResult(resp.data.link))
            .catch(err => console.log(err))

        inputElem.current.value = ""
        setInputData("");
          
          
    }

    const handleChange = () => {
        setInputData(inputElem.current.value)
    }
  return (
    <div className='tool-sec'>
      <Container>
        <Row className='justify-content-center'>
            <Col md={12}>
                <div className='tool-content text-center'>
                    <h1>YouTube to MP3 Converter</h1>
                    <p>With this tool you can instantly convert your youtube videos into mp3</p>
                    <form onSubmit={handleSubmit} className='convert-form'>
                        <input ref={inputElem} value={inputData} onChange={handleChange} type="text" placeholder='Enter youtube link here...' />
                        <button type="submit">Convert</button>
                    </form>
                    {
                        urlResult 
                        ? <a href={urlResult} target='_blank' rel='noreferrer'>Download MP3</a>
                        : ''
                    }
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Tool
