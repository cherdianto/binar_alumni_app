import React from 'react'
import { Card, Container, Row, Col, ProgressBar } from 'react-bootstrap'

function RatingComponent() {
    return (
        <Card className="mb-3">
            <Card.Body md={12}>
                {/* <div class="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating"> */}
                <h5 className="mb-2">Ratings and Reviews</h5>
                <div class="graph-star-rating-header">
                    <div class="star-rating">
                        <a href="#"><i class="icofont-ui-rating active"></i></a>
                        <a href="#"><i class="icofont-ui-rating active"></i></a>
                        <a href="#"><i class="icofont-ui-rating active"></i></a>
                        <a href="#"><i class="icofont-ui-rating active"></i></a>
                        <a href="#"><i class="icofont-ui-rating"></i></a> <b class="text-black ml-2">334</b>
                    </div>
                    <p class="text-black mb-4 mt-2">Rated 3.5 out of 5</p>
                </div>
                <div class="graph-star-rating-body">
                    <Row className="d-inline-flex w-100">
                        <Col lg={3}>5 Star</Col>
                        <Col lg={6} className="px-0"><ProgressBar now={56} /></Col>
                        <Col lg={3}>56%</Col>
                    </Row>
                    <Row className="d-inline-flex w-100">
                        <Col lg={3}>4 Star</Col>
                        <Col lg={6} className="px-0"><ProgressBar now={30} /></Col>
                        <Col lg={3}>30%</Col>
                    </Row>
                    <Row className="d-inline-flex w-100">
                        <Col lg={3}>3 Star</Col>
                        <Col lg={6} className="px-0"><ProgressBar now={20} /></Col>
                        <Col lg={3}>20%</Col>
                    </Row>
                    <Row className="d-inline-flex w-100">
                        <Col lg={3}>2 Star</Col>
                        <Col lg={6} className="px-0"><ProgressBar now={10} /></Col>
                        <Col lg={3}>10%</Col>
                    </Row>
                    <Row className="d-inline-flex w-100">
                        <Col lg={3}>`` Star</Col>
                        <Col lg={6} className="px-0"><ProgressBar now={5} /></Col>
                        <Col lg={3}>5%</Col>
                    </Row>
                    
                </div>
                <div class="graph-star-rating-footer text-center mt-3 mb-3">
                    <button type="button" class="btn btn-outline-primary btn-sm">Rate and Review</button>
                </div>
            {/* </div> */}
            </Card.Body>
        </Card>
    )
}

export default RatingComponent
