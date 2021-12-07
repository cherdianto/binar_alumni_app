import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

function IntroductionComponent({introduction}) {
    return (
        <Card className="mb-3">
            <Card.Header><h4><strong>Introduction</strong></h4></Card.Header>
            <Card.Body>
                <Row>
                    <Container className="text-justify">
                        { introduction }
                    </Container>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default IntroductionComponent
