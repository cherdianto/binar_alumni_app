import React from 'react'
import { useState } from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'

function LanguageSettingComponent({languages}) {
    const [language, setLanguage] = useState(languages)

    // const languages = [
    //     { 
    //         id: '1',
    //         language: 'English',
    //         level: 'Fluent'
    //     },

    let handleChange = (i, e) => {
        let newLanguage = [
            ...language
        ];

        newLanguage[i][e.target.name] = e.target.value
        setLanguage(newLanguage)

        // console.log(language)
    }

    let addMoreLanguage = () => {
        setLanguage([
            ...language,
            {
                id: "",
                language: "",
                level: ""
            }
        ])
    }

    let removeLanguage = (index) => {
        let newLanguage = [
            ...language
        ]

        newLanguage.splice(index,1)
        setLanguage(newLanguage)
    }
    return (
        <Card>
            <Card.Header><h4><strong>Languages</strong></h4></Card.Header>
            <Card.Body>
                { language.map((element, index) => {
                    return (
                        <Card className="mb-4">
                            <Card.Header className="justify-content-between d-flex">
                                <h5>{index+1}. {element.language}</h5>
                                <Button onClick={() => removeLanguage(index)}>Delete</Button>
                            </Card.Header>
                            <Card.Body>
                                <Form key={index}>
                                    <Row>
                                        <Form.Group as={Col} md={6} className="mb-3" controlId="language">
                                            <Form.Label>Language</Form.Label>
                                            <Form.Control type="text" name="language" onChange={(e) => handleChange(index, e)} placeholder="Junior Full Stack Developer" value={element.language || ""} />
                                        </Form.Group>
                                        <Form.Group as={Col} md={6} className="mb-3" controlId="level">
                                            <Form.Label>Level</Form.Label>
                                            <Form.Control type="text" name="level" onChange={(e) => handleChange(index, e)} placeholder="Cipta Karya Terang Abadi" value={element.level || ""} />
                                        </Form.Group>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    )
                })}
                <button type="button" className="btn btn-primary my-3 mx-3" onClick={() => addMoreLanguage()}>Add more language</button>
                <button type="button" className="btn btn-primary my-3 mx-3">Save the update</button>

            </Card.Body>
        </Card>
    )
}

export default LanguageSettingComponent
