import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function SectionServices() {
    return (
        <section id="services" className="services py-5">
            <Container>
                <div className="section-title text-center" data-aos="zoom-out">
                    <h2>Feature</h2>
                    <p>SMART & EASY TO USE</p>
                </div>

                <Row>
                <Col lg={4} md={6} data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="las la-basketball-ball"></i></div>
                    <h4 className="title"><a href="/">Easy online resume builder</a></h4>
                    <p className="description">Create an awesome resume, cover letter or online profile without leaving your web browser.</p>
                    </div>
                </Col>
                <Col lg={4} md={6} className="mt-5 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="las la-book"></i></div>
                    <h4 className="title"><a href="/">Automatic spell-checker</a></h4>
                    <p className="description">Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors.</p>
                    </div>
                </Col>

                <Col lg={4} md={6}className="mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="las la-file-alt"></i></div>
                    <h4 className="title"><a href="/">Your data is safe</a></h4>
                    <p className="description">Your data is kept private and protected by strong 256-bit encryption.</p>
                    </div>
                </Col>
                <Col lg={4} md={6}className="mt-5" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="las la-tachometer-alt"></i></div>
                    <h4 className="title"><a href="/">Automatic summary generator</a></h4>
                    <p className="description">Create a powerful resume profile or cover letter in one click. Writer’s block is no longer an obstacle. Try for free!</p>
                    </div>
                </Col>

                <Col lg={4} md={6} className="mt-5" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="las la-globe-americas"></i></div>
                    <h4 className="title"><a href="/">Approved templates</a></h4>
                    <p className="description">Professionally-designed resume templates and examples (+guides). Just edit and download in 5 minutes.</p>
                    </div>
                </Col>
                <Col lg={4} md={6} className="mt-5" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="las la-clock"></i></div>
                    <h4 className="title"><a href="/">Multi-format resume options</a></h4>
                    <p className="description">Save your perfect resume in any common format, including Microsoft Word and PDF in a single click.</p>
                    </div>
                </Col>
                </Row>
            </Container>
        </section>
    )
}
