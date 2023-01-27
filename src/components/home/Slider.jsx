
import React from 'react'
import {Carousel} from 'react-bootstrap'
import  './Slider.css'


function Slider() {
    return (

        <Carousel className='carousel rounded-4 mx-2 my-2' nextLabel={null} prevLabel={null} fade={true } interval={2400}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/724x250/?school"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/724x250/?computer"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/724x250/?books"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>)
}
export default Slider