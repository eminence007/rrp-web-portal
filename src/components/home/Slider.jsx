
import React from 'react'
import {Carousel} from 'react-bootstrap'
import  './Slider.css'


function Slider() {
    return (

        <Carousel className='carousel rounded' nextLabel={null} prevLabel={null} fade={true } interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/724x362/?school"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/724x362/?computer"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/724x362/?books"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>)
}
export default Slider