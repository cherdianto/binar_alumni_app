import React from 'react'
import { Container, Card, Row, Col, Table } from 'react-bootstrap'

function FormalEducationComponent({formalEducation}) {
    return (
        <Card className="mb-3">
            <Card.Header><h4><strong>Educations</strong></h4></Card.Header>
            <Card.Body>
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>School</th>
                            <th>Grade</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        { formalEducation && formalEducation.map( formalEducation => {
                            return (
                                <tr>
                                    <td>{formalEducation.title}</td>
                                    <td>{formalEducation.school}</td>
                                    <td>{formalEducation.grade}</td>
                                    <td>{formalEducation.year}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default FormalEducationComponent
