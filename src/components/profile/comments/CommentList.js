import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

function CommentList({comments}) {
    let commentList = null

    if(comments){
        commentList = comments.map( comments => {
            return (
                <div>
                    <Row className="d-flex mt-3" key={comments.id}>
                        <Col lg={3} sm={12} className="w-100">
                            <a href="#"><img alt={comments.name} src={comments.imgUrl} className="mr-3 rounded-pill"  style={{ width:'100px'}}/></a>
                        </Col>
                        <Col lg={9} sm={12}>
                            <div>
                                <h6 className="mb-2"><a className="text-black" href="#">{comments.name}</a></h6>
                                <p className="text-gray mb-0"><strong>{comments.job}</strong></p>
                                <p className="text-gray">{comments.date}</p>
                            </div>
                            <div>
                                <p>{comments.body}</p>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                </div>
            )
        })
    }
    return (
        <Card.Body>
            {commentList}
            <a className="text-center w-100 d-block mt-4 font-weight-bold" href="#">See All Reviews</a>
        </Card.Body>
    )
}

export default CommentList
