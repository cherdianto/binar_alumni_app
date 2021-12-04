import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CandidateListComponent from './CandidateListComponent'
import classes from './MemberGrid.module.css'
import WidgetFilterCandidateComponent from './WidgetFilterCandidateComponent'

function MemberGrid() {
    return (
        <Container className="my-4">
            <Row>
                <Col lg={3}>
                    <div class="sidebar">
                        <div class={`${classes.widget} border-0 my-2`}>
                            <div class="search">
                                <input class="form-control" type="text" placeholder="Search Keywords" />
                            </div>
                        </div>
                        <div class={`${classes.widget} border-0 my-2`}>
                            <div class="locations">
                                <input class="form-control" type="text" placeholder="All Locations" />
                            </div>
                        </div>
                        <WidgetFilterCandidateComponent />
                        <WidgetFilterCandidateComponent />
                        <WidgetFilterCandidateComponent />
                        
                        <div class="widget border-0">
                            <div class="widget-add">
                                <img class="img-fluid" src="images/add-banner.png" alt="" /></div>
                        </div>
                    </div>
                </Col>
                <Col lg={9}>
                    <Row className="mb-4">
                        <Col>
                            <h6 class="mb-0">Showing 1-10 of <span class="text-primary">28 Candidates</span></h6>
                        </Col>
                    </Row>
                    <div class="job-filter mb-4 d-sm-flex align-items-center">
                        <div class="job-alert-bt"> <a class="btn btn-md btn-dark" href="#"><i class="fa fa-envelope"></i>Get job alert </a> </div>
                        <div class="job-shortby ml-sm-auto d-flex align-items-center">
                            <form class="form-inline">
                                <div class="form-group mb-0">
                                    <label class="justify-content-start mr-2">Sort by :</label>
                                    <div class="short-by">
                                        <select class="form-control basic-select select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                            <option data-select2-id="3">Newest</option>
                                            <option>Oldest</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Row>
                        <CandidateListComponent />
                        <CandidateListComponent />
                        <CandidateListComponent />
                        <CandidateListComponent />
                        <CandidateListComponent />
                        <CandidateListComponent />
                        <CandidateListComponent />
                    </Row>
                    <Row>
                        <div class="col-12 text-center mt-4 mt-sm-5">
                            <ul class="pagination justify-content-center mb-0">
                                <li class="page-item disabled"> <span class="page-link">Prev</span> </li>
                                <li class="page-item active" aria-current="page"><span class="page-link">1 </span> <span class="sr-only">(current)</span></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">...</a></li>
                                <li class="page-item"><a class="page-link" href="#">25</a></li>
                                <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
                            </ul>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default MemberGrid
