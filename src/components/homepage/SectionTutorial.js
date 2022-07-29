import React from 'react'
import { Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MediaPlayer from './MediaPlayer'

export default function SectionTutorial() {
    return (
        <section id="tutorial" className="section">
            <Container>
                <Col lg={6} className="text-center mx-auto py-3" data-aos="zoom-out">
                    <h2 className="py-3">Effortlessly make a job-worthy resume and cover letter that gets you hired faster</h2>
                    <MediaPlayer />
                    <Link to="/profile" className="btn btn-lg btn-primary my-4 py-2">Build Your Resume</Link>
                </Col>
            </Container>
        </section>
    )
}
