// ref:https://bapunawarsaddam.medium.com/add-and-remove-form-fields-dynamically-using-react-and-react-hooks-3b033c3c0bf5

import React, { useState } from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'

function CarrerDinamicForm({carrerSummary}) {
    const [carrer, setCarrer] = useState(carrerSummary)
    const [keyAchievement, setKeyAchievement] = useState('')

    let handleChange = (i, e) => {
        let newCarrer = [
            ...carrer
        ];

        newCarrer[i][e.target.name] = e.target.value
        setCarrer(newCarrer)

        console.log(carrer)
    }

    let addMoreCarrer = () => {
        setCarrer([
            ...carrer,
            {
                id: "",
                position: "",
                company: "",
                periode: "",
                keyAchievement: [{
                    id: '1',
                    detail: ''
                }],   
                description: ""   
            }
        ])
    }

    // let addMoreKeyAchievement = () => {
    //     setKeyAchievement([

    //     ])
    // }

    let removeCarrer = (index) => {
        let newCarrer = [
            ...carrer
        ]

        newCarrer.splice(index,1)
        setCarrer(newCarrer)
    }

    let removeKeyAchievement = (index, keyAchevementIndex) => {
        // index -= 1
        let newKeyAchievement = [
            ...carrer
        ]
        // console.log(carrer)
        // console.log(index)
        // console.log(keyAchevementIndex)
        // console.log(newKeyAchievement[index].keyAchievement)

        newKeyAchievement[index].keyAchievement.splice(keyAchevementIndex-1,1)
        setKeyAchievement(newKeyAchievement)
        // console.log(carrer)
    }

    // const carrerSummary = [
    //     { 
    //         id: '1',
    //         position: 'software developer',
    //         company: 'webcreatia.com',
    //         periode: 'januari 2020 - januari 2021',
    //         description: 'lorem ipsum generator making'
    //     },
    //     { 
    //         id: '2',
    //         position: 'software developer',
    //         company: 'webcreatia.com',
    //         periode: 'januari 2020 - januari 2021',
    //         description: 'lorem ipsum generator making'
    //     },
    //     { 
    //         id: '3',
    //         position: 'software developer',
    //         company: 'webcreatia.com',
    //         periode: 'januari 2020 - januari 2021',
    //         description: 'lorem ipsum generator making',
    //         keyAchievement: [
    //             { id: '1',
    //             detail: 'successfully deploy new product to production phase'},
    //             { id: '2',
    //             detail: 'successfully deploy new product to production phase'},
    //             { id: '3',
    //             detail: 'successfully deploy new product to production phase'},
    //             { id: '4',
    //             detail: 'successfully deploy new product to production phase'},
    //         ]
    //     },
    //     { 
    //         id: '4',
    //         position: 'software developer',
    //         company: 'webcreatia.com',
    //         periode: 'januari 2020 - januari 2021',
    //         description: 'lorem ipsum generator making'
    //     }
    // ]


    return (
        <Card>
            <Card.Header><h4><strong>Carrer Summaries</strong></h4></Card.Header>
            <Card.Body>
                { carrer.map((element, index) => {
                    return (
                        <Card className="mb-4">
                            <Card.Header className="justify-content-between d-flex">
                                <h5>Carrer {index + 1}</h5>
                                <Button onClick={() => removeCarrer(index)}>Delete</Button>
                            </Card.Header>
                            <Card.Body>
                                <Form key={index} className="mb-4">
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="position">
                                            <Form.Label>Position</Form.Label>
                                            <Form.Control type="text" name="position" onChange={(e) => handleChange(index, e)} placeholder="Junior Full Stack Developer" value={element.position || ""} />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="company">
                                            <Form.Label>Company</Form.Label>
                                            <Form.Control type="text" name="company" onChange={(e) => handleChange(index, e)} placeholder="Cipta Karya Terang Abadi" value={element.company || ""} />
                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="period">
                                        <Form.Label>Period</Form.Label>
                                        <Form.Control type="text" name="periode" onChange={(e) => handleChange(index, e)} placeholder="Period, e.g: 1 January 2019 - 30 December 2020" value={element.periode || ""} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Label>Job Description</Form.Label>
                                        <Form.Control type="text" name="description" onChange={(e) => handleChange(index, e)} placeholder="Job Description" value={element.description || ""} />
                                    </Form.Group>
                                    { element.keyAchievement && (
                                        <Form.Group className="mb-3" controlId="keyAchievement">
                                            <Form.Label className="justify-content-between d-flex">Key Achievement <span><Button>Add</Button></span></Form.Label>
                                            { element.keyAchievement.map((x) => {
                                                return (
                                                    <Row className="d-flex justify-content-start mb-2">
                                                        <Col md={1} className="align-center py-3">{x.id}</Col> 
                                                        <Col md={9}>
                                                            <Form.Control as="textarea" name="keyAchievement" placeholder="Key Achievement" value={x.detail} />
                                                        </Col>
                                                        <Col className="align-center py-2"><Button variant="danger" onClick={() => removeKeyAchievement(index, x.id-1)}>Delete</Button></Col> 
                                                    </Row>
                                                )
                                            })}
                                        

                                    </Form.Group>
                                    ) }
                                    {/* { element.keyAchievement ? (
                                        <Form.Group className="mb-3" controlId="keyAchievement">
                                            <Form.Label>Key Achievement</Form.Label>
                                            { element.keyAchievement.map((x) => {
                                                console.log(x.detail)
                                                return (
                                                    <Row className="justify-content-between">
                                                        <Col md={1}>{x.id}</Col> 
                                                        <Col>
                                                            <Form.Control as="textarea" name="keyAchievement" placeholder="Key Achievement" value={x.detail} />
                                                        </Col>
                                                        <Col><Button>Delete</Button></Col> 
                                                    </Row>
                                                )
                                            })}
                                    </Form.Group>
                                    ) : console.log('no') } */}
                                </Form>
                            </Card.Body>
                        </Card>
                    )
                })}
                <button type="button" className="btn btn-primary my-3 mx-3" onClick={() => addMoreCarrer()}>Add more carrer</button>
                <button type="button" className="btn btn-primary my-3 mx-3">Save the update</button>
                {/* <Form>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="languages">
                            <Form.Label>Position</Form.Label>
                            <Form.Control type="text" placeholder="Junior Full Stack Developer" value={techSkill.Languages} />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="languages">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" placeholder="Cipta Karya Terang Abadi" value={techSkill.Languages} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="tools">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enschede, The Netherlands" value={techSkill.Tools} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="environments">
                        <Form.Label>Period</Form.Label>
                        <Form.Control type="text" placeholder="Period, e.g: 1 January 2019 - 30 December 2020" value={techSkill.Environments} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="environments">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control type="text" placeholder="Job Description" value={techSkill.Environments} />
                    </Form.Group>
                    <button type="button" className="btn btn-primary my-3 mx-3">Add more row</button>
                    <button type="button" className="btn btn-primary my-3 mx-3">Save the update</button>
                </Form> */}
            </Card.Body>
        </Card>
    )
}

export default CarrerDinamicForm
