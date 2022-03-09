import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import classes from './AgendaGrid.module.css'
function AgendaGrid(){
  return (
 <>
 <h1 className={classes['agendatitle']}>मुख्य मुद्दे</h1>
  
 <Container ><Row>
    <Col xs={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']} >
    <Card.Img className={classes['image']} variant="bottom" src="https://i.postimg.cc/ZKtrSnB7/gold.png" />
    <Card.Body><Card.Title>धनवापसी पासबुक </Card.Title></Card.Body>
    </Card>
    </Col>
    <Col xs={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']}>
    <Card.Img className={classes['image']} variant="bottom" src="https://i.postimg.cc/vTqKjnXm/jury2.png" />
    <Card.Body><Card.Title>जूरी कोर्ट</Card.Title></Card.Body>
   </Card>
    </Col>
    <Col sm={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']}>
    <Card.Img className={classes['image']} variant="bottom" src="https://cdn-icons-png.flaticon.com/128/6140/6140261.png" />
    <Card.Body><Card.Title>रिक्त भूमि कर</Card.Title></Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']}>
    <Card.Img className={classes['image']} variant="bottom" src="https://cdn-icons-png.flaticon.com/128/1419/1419216.png" />
    <Card.Body><Card.Title>हिन्दूबोर्ड </Card.Title></Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']}>
    <Card.Img className={classes['image']} variant="bottom" src="https://cdn-icons-png.flaticon.com/128/556/556206.png" />
    <Card.Body><Card.Title>गन लॉ</Card.Title></Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']}>
    <Card.Img className={classes['image']} variant="bottom" src="https://i.postimg.cc/vZgDNC5d/vvcm.png" />
    <Card.Body><Card.Title>वोटवापसी मुख्यमंत्री </Card.Title></Card.Body>
    </Card>
    </Col>
  </Row>
</Container>

 </>
    )
}

export default AgendaGrid