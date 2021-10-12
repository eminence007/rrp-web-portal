import React from 'react'
import {Carousel} from 'react-bootstrap'
import  './Home.css'


function Home() {
    return (
        <>
        <Carousel className="container carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/724x362/?school"
            alt=""
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/724x362/?computer"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/724x362/?books"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia tempore debitis ut mollitia dolorum quisquam quam ab? Cumque nihil soluta laboriosam perspiciatis sint assumenda quam animi eos aperiam ipsam, impedit rerum mollitia consequuntur asperiores beatae debitis inventore excepturi provident id est recusandae distinctio perferendis ducimus. Reiciendis, mollitia? Perferendis, distinctio. </p>
        </>
    )
}

export default Home