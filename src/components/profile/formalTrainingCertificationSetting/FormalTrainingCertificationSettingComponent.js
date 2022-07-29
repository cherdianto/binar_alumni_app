import React from 'react'
import { useState } from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'

function FormalTrainingCertificationSettingComponent({formalTrainingCertification}) {
    const [training, setTraining] = useState(formalTrainingCertification)

    // const formalTrainingCertification = [
    //     {
    //         id: '1',
    //         title: 'Javascript Mastery',
    //         place: 'Udemy',
    //         year: '2008 - 2012'
    //     },

    let handleChange = (i, e) => {
        let newTraining = [
            ...training
        ];

        newTraining[i][e.target.name] = e.target.value
        setTraining(newTraining)

        // console.log(training)
    }

    let addMoretraining = () => {
        setTraining([
            ...training,
            {
                id: "",
                title: "",
                place: "",
                year: ""  
            }
        ])
    }

    let removetraining = (index) => {
        let newTraining = [
            ...training
        ]

        newTraining.splice(index,1)
        setTraining(newTraining)
    }
    return (
        <Card>
            <Card.Header><h4><strong>Formal training</strong></h4></Card.Header>
            <Card.Body>
                { training.map((element, index) => {
                    return (
                        <Card className="mb-4">
                            <Card.Header className="justify-content-between d-flex">
                                <h5>{index+1}. {element.title}</h5>
                                <Button onClick={() => removetraining(index)}>Delete</Button>
                            </Card.Header>
                            <Card.Body>
                                <Form key={index}>
                                    <Row>
                                        <Form.Group as={Col} md={6} lg={5} className="mb-3" controlId="title">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" name="title" onChange={(e) => handleChange(index, e)} placeholder="Junior Full Stack Developer" value={element.title || ""} />
                                        </Form.Group>
                                        <Form.Group as={Col} md={6} lg={3} className="mb-3" controlId="place">
                                            <Form.Label>Place</Form.Label>
                                            <Form.Control type="text" name="place" onChange={(e) => handleChange(index, e)} placeholder="Cipta Karya Terang Abadi" value={element.place || ""} />
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
                <button type="button" className="btn btn-primary my-3 mx-3" onClick={() => addMoretraining()}>Add more training</button>
                <button type="button" className="btn btn-primary my-3 mx-3">Save the update</button>

            </Card.Body>
        </Card>
    )
}

export default FormalTrainingCertificationSettingComponent
