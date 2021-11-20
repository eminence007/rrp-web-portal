import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import classes from './AgendaGrid.module.css'
function AgendaGrid(){
  return (
 <>
 <h1 className={classes['agendatitle']}>Key Agendas</h1>
  
 <Container ><Row>
    <Col xs={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']} >
    <Card.Img className={classes['image']} variant="bottom" src="https://i.postimg.cc/ZKtrSnB7/gold.png" />
    <Card.Body><Card.Title>Dhan wapsi</Card.Title></Card.Body>
    </Card>
    </Col>
    <Col xs={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']}>
    <Card.Img className={classes['image']} variant="bottom" src="https://i.postimg.cc/vTqKjnXm/jury2.png" />
    <Card.Body><Card.Title>Jury Court</Card.Title></Card.Body>
   </Card>
    </Col>
    <Col sm={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']}>
    <Card.Img className={classes['image']} variant="bottom" src="https://cdn-icons-png.flaticon.com/128/6140/6140261.png" />
    <Card.Body><Card.Title>Empty Land Tax</Card.Title></Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']}>
    <Card.Img className={classes['image']} variant="bottom" src="https://cdn-icons-png.flaticon.com/128/1419/1419216.png" />
    <Card.Body><Card.Title>Hindu Board</Card.Title></Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']}>
    <Card.Img className={classes['image']} variant="bottom" src="https://cdn-icons-png.flaticon.com/128/556/556206.png" />
    <Card.Body><Card.Title>Gun Law</Card.Title></Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={6} lg={4} className={classes['row-gap']}>
    <Card className={classes['card']}>
    <Card.Img className={classes['image']} variant="bottom" src="https://i.postimg.cc/vZgDNC5d/vvcm.png" />
    <Card.Body><Card.Title>Votevapsi CM</Card.Title></Card.Body>
    </Card>
    </Col>
  </Row>
</Container>

 </>
    )
}

export default AgendaGrid