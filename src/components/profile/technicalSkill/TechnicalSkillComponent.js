import React from 'react'
import { Row, Container, Card } from 'react-bootstrap'

function TechnicalSkillComponent({techSkill}) {
    let skillList = null

    if (techSkill){
        skillList = Object.keys(techSkill).map((key, index, value) => {
            return (
                <Row key={key}>
                    <Container className="text-justify">
                        <strong>{key} :</strong> { techSkill[key].join(', ') }
                    </Container>
                    <hr />
                </Row>
            )
        })
    }
    return (
        <Card className="mb-3">
            <Card.Header><h4><strong>Technical Skill</strong></h4></Card.Header>
            <Card.Body>
                {skillList}
            </Card.Body>
        </Card>
    )
}

export default TechnicalSkillComponent
