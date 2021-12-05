import React from 'react'
import { Container, Card, Row, Col, Table } from 'react-bootstrap'

function FormalTrainingCertificationComponent({formalTrainingCertification}) {
    return (
        <Card className="mb-3">
            <Card.Header><h4><strong>Tranings and Certifications</strong></h4></Card.Header>
            <Card.Body>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Place</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        { formalTrainingCertification && formalTrainingCertification.map( formalTrainingCertification => {
                            return (
                                <tr>
                                    <td>{formalTrainingCertification.title}</td>
                                    <td>{formalTrainingCertification.place}</td>
                                    <td>{formalTrainingCertification.year}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default FormalTrainingCertificationComponent
