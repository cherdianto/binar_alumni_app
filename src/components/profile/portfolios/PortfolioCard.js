import React from 'react'
import { Col, Card, Button, Row } from 'react-bootstrap'

function PortfolioCard({portfolios}) {
    let portfolioList = null

    if (portfolios){
        portfolioList = portfolios.map( portfolio => {
            return (
                <Col sm={6} className="mb-3">
                    <Card className="h-100">
                        <Card.Img variant="top" src="https://dummyimage.com/180x100/000/fff&text=portfolio"/>
                        <Card.Body>
                            <Card.Title><strong>{portfolio.title}</strong></Card.Title>
                        <Card.Text>
                            <p><strong>Tech Stack: </strong>{portfolio.techStack}</p>
                            <p><strong>Description: </strong>{portfolio.description}</p>
                        </Card.Text>    
                        <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </Col>    
            )
        })
    }

    return (
        <Row className="guttersSmall">
            {portfolioList}
        </Row>
    )
}

export default PortfolioCard
