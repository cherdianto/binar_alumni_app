import React from 'react'
import { Col } from 'react-bootstrap'
import classes from './MemberGrid.module.css'

function CandidateListComponent() {
    return (
        <Col sm={6} lg={4} className="mb-4">
            <div class={`${classes.candidateList} ${classes.candidateGrid}`}>
                    <div class="candidateListImage">
                        <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    </div>
                    <div class={classes.candidateListDetails}>
                        <div class={classes.candidateListInfo}>
                            <div class={classes.candidateListTitle}>
                                <h5><a href="candidate-detail.html">Rafael Briggs</a></h5>
                            </div>
                            <div class={classes.candidateListOption}>
                                <ul class="list-unstyled">
                                    <li><i class="fas fa-filter pr-1"></i>Recruitment Consultancy</li>
                                    <li><i class="fas fa-map-marker-alt pr-1"></i>Haines City, FL 33844</li>
                                </ul>
                            </div>
                        </div>
                        <div class={classes.candidateListFavouriteTime}>
                            <a class={`${classes.candidateListFavourite} order-2`} href="#"><i class="far fa-heart"></i></a>
                            <span class={`${classes.candidateListTime} order-1`}><i class="far fa-clock pr-1"></i>1M ago</span>
                        </div>
                    </div>
                </div>
            </Col>
    )
}

export default CandidateListComponent
