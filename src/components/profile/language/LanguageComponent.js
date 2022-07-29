import React from 'react'
import { Container, Card, Row, Col, Table } from 'react-bootstrap'

function LanguageComponent({language}) {
    return (
        <Card className="mb-3">
            <Card.Header><h4><strong>Languages</strong></h4></Card.Header>
            <Card.Body>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Language</th>
                            <th>Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        { language && language.map( language => {
                            return (
                                <tr>
                                    <td>{language.language}</td>
                                    <td>{language.level}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default LanguageComponent
