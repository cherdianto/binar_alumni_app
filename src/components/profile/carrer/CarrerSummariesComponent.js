import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import CarrerList from './CarrerList'

function CarrerSummariesComponent({carrerSummary}) {
    return (
        <Card className="mb-3">
            <Card.Header><h4><strong>Carrer Summaries</strong></h4></Card.Header>
            <Card.Body>
                { carrerSummary && carrerSummary.map( carrer => {
                    return (
                        <CarrerList carrer={carrer} />
                    )
                })}
            </Card.Body>
        </Card>
    )
}

export default CarrerSummariesComponent
