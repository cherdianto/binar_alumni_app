import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import CommentList from './CommentList'

function CommentsComponent({comments}) {
    return (
        <Card className="mb-3">
            <Card.Header><h4><strong>All Ratings and Reviews</strong></h4></Card.Header>
            <CommentList comments={comments} />
        </Card>
    )
}

export default CommentsComponent
