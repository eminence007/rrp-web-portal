import React from 'react'
import {Carousel} from 'react-bootstrap'
import  './Home.css'


function Home() {
    return (
        <>
        <Carousel className='container carousel' nextLabel={null} prevLabel={null} fade={true }>
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
      </Carousel>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia tempore debitis ut mollitia dolorum quisquam quam ab? Cumque nihil soluta laboriosam perspiciatis sint assumenda quam animi eos aperiam ipsam, impedit rerum mollitia consequuntur asperiores beatae debitis inventore excepturi provident id est recusandae distinctio perferendis ducimus. Reiciendis, mollitia? Perferendis, distinctio. </p>
        </>
    )
}

export default Home