import React from 'react'
import { useState } from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'

function EducationFormSettingComponent({formalEducation}) {
    const [education, setEducation] = useState(formalEducation)

    let handleChange = (i, e) => {
        let newEducation = [
            ...education
        ];

        newEducation[i][e.target.name] = e.target.value
        setEducation(newEducation)

        // console.log(education)
    }

    let addMoreEducation = () => {
        setEducation([
            ...education,
            {
                title: "",
                school: "",
                grade: "",
                year: ""  
            }
        ])
    }

    let removeEducation = (index) => {
        let newEducation = [
            ...education
        ]

        newEducation.splice(index,1)
        setEducation(newEducation)
    }
    return (
        <Card>
            <Card.Header><h4><strong>Formal Education</strong></h4></Card.Header>
            <Card.Body>
                { education.map((element, index) => {
                    return (
                        <Card className="mb-4">
                            <Card.Header className="justify-content-between d-flex">
                                <h5>{index+1}. {element.title}</h5>
                                <Button onClick={() => removeEducation(index)}>Delete</Button>
                            </Card.Header>
                            <Card.Body>
                                <Form key={index}>
                                    <Row>
                                        <Form.Group as={Col} md={6} lg={4} className="mb-3" controlId="title">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" name="title" onChange={(e) => handleChange(index, e)} placeholder="Junior Full Stack Developer" value={element.title || ""} />
                                        </Form.Group>
                                        <Form.Group as={Col} md={6} lg={4} className="mb-3" controlId="school">
                                            <Form.Label>School</Form.Label>
                                            <Form.Control type="text" name="school" onChange={(e) => handleChange(index, e)} placeholder="Cipta Karya Terang Abadi" value={element.school || ""} />
                                        </Form.Group>
                                        <Form.Group as={Col} lg={2} className="mb-3" controlId="grade">
                                            <Form.Label>Grade</Form.Label>
                                            <Form.Control type="text" name="grade" onChange={(e) => handleChange(index, e)} placeholder="Cipta Karya Terang Abadi" value={element.grade || ""} />
                                        </Form.Group>
                                        <Form.Group as={Col} lg={2} className="mb-3" controlId="year">
                                            <Form.Label>Year</Form.Label>
                                            <Form.Control type="text" name="year" onChange={(e) => handleChange(index, e)} placeholder="Cipta Karya Terang Abadi" value={element.year || ""} />
                                        </Form.Group>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    )
                })}
                <button type="button" className="btn btn-primary my-3 mx-3" onClick={() => addMoreEducation()}>Add more education</button>
                <button type="button" className="btn btn-primary my-3 mx-3">Save the update</button>

            </Card.Body>
        </Card>
    )
}

export default EducationFormSettingComponent
