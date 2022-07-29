import React from 'react'
import { useState } from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'

function PortfolioSettingComponent({portfolios}) {
    const [portfolio, setPortfolio] = useState(portfolios)

    // const portfolios = [
    //     { 
    //         id: '1',
    //         title: 'Portfolio Website',
    //         description: 'lorem ipsum generator making',
    //         techStack: 'ReactJS, Redux, Express, MongoDb',
    //         url: 'lorem ipsum generator making'
    //     },

    let handleChange = (i, e) => {
        let newPortfolio = [
            ...portfolio
        ];

        newPortfolio[i][e.target.name] = e.target.value
        setPortfolio(newPortfolio)

        console.log(portfolio)
    }

    let addMorePortfolio = () => {
        setPortfolio([
            ...portfolio,
            {
                id: "",
                portfolio: "",
                level: ""
            }
        ])
    }

    let removePortfolio = (index) => {
        let newPortfolio = [
            ...portfolio
        ]

        newPortfolio.splice(index,1)
        setPortfolio(newPortfolio)
    }
    return (
        <Card>
            <Card.Header><h4><strong>Portfolios</strong></h4></Card.Header>
            <Card.Body>
                { portfolio.map((element, index) => {
                    return (
                        <Card className="mb-4">
                            <Card.Header className="justify-content-between d-flex">
                                <h5>{index+1}. {element.title}</h5>
                                <Button onClick={() => removePortfolio(index)}>Delete</Button>
                            </Card.Header>
                            <Card.Body>
                                <Form key={index}>
                                    <Row>
                                        <Form.Group as={Col} md={6} className="mb-3" controlId="title">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" name="title" onChange={(e) => handleChange(index, e)} placeholder="Junior Full Stack Developer" value={element.title || ""} />
                                        </Form.Group>
                                        <Form.Group as={Col} md={6} className="mb-3" controlId="url">
                                            <Form.Label>Url</Form.Label>
                                            <Form.Control type="text" name="url" onChange={(e) => handleChange(index, e)} placeholder="Cipta Karya Terang Abadi" value={element.url || ""} />
                                        </Form.Group>
                                    </Row>
                                    
                                    <Form.Group md={12} className="mb-3" controlId="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" name="description" onChange={(e) => handleChange(index, e)} placeholder="Cipta Karya Terang Abadi" value={element.description || ""} />
                                    </Form.Group>
                                    <Form.Group md={12} className="mb-3" controlId="techStack">
                                        <Form.Label>Tech Stack</Form.Label>
                                        <Form.Control type="text" name="techStack" onChange={(e) => handleChange(index, e)} placeholder="Cipta Karya Terang Abadi" value={element.techStack || ""} />
                                    </Form.Group>
                                    
                                </Form>
                            </Card.Body>
                        </Card>
                    )
                })}
                <button type="button" className="btn btn-primary my-3 mx-3" onClick={() => addMorePortfolio()}>Add more portfolio</button>
                <button type="button" className="btn btn-primary my-3 mx-3">Save the update</button>

            </Card.Body>
        </Card>
    )
}

export default PortfolioSettingComponent
