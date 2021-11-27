import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function SectionDescription() {
    return (
        <section id="description" className="description bg-light py-5">
            <Container>
                <div className="section-title" data-aos="zoom-out">
                    <h2>ready-to-use</h2>
                    <p>TOOLS FOR CREATING A RESUME</p>
                </div>
                <Row data-aos="fade-up">
                    <Col lg={6} className="order-2 order-lg-1 mt-3 mt-lg-0">
                        <h3>Use the best resume maker as your guide</h3>
                        <p className="font-italic">
                        Getting that dream job can seem like an impossible task. We’re here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.
                        </p>
                        <h3>Use the best resume maker as your guide</h3>
                        <p className="font-italic">
                        Getting that dream job can seem like an impossible task. We’re here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.
                        </p>
                    </Col>
                    <Col lg={6} className="order-1 order-lg-2 text-center">
                        <img src='https://s3.resume.io/cdn-cgi/image/width=770,height=420,dpr=1.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg' alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
