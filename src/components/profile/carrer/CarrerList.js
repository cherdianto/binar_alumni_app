import React from 'react'
import { Container, Row } from 'react-bootstrap'

function CarrerList({carrer}) {
    // const carrerSummary = [
    //     { 
    //         id: '1',
    //         position: 'software developer',
    //         company: 'webcreatia.com',
    //         periode: 'januari 2020 - januari 2021',
    //         description: 'lorem ipsum generator making',
    //         keyAchievement: [
    //             { id: '1',
    //             detail: 'successfully deploy new product to production phase'},
    //             { id: '2',
    //             detail: 'successfully deploy new product to production phase'},
    //             { id: '3',
    //             detail: 'successfully deploy new product to production phase'},
    //             { id: '4',
    //             detail: 'successfully deploy new product to production phase'},
    //         ]
    //     }
    // ]
    
    let achievementList = null
    if (carrer.keyAchievement){ 
        achievementList = carrer.keyAchievement.map(keyAchievement => {
        return (
            <li>{keyAchievement.detail}</li>
        )
    })
    }

    const showAchievementList = (achievementList) ? <div><p><strong>Key Achievements:</strong></p><ul>{achievementList}</ul></div> : ''
    return (
        <Row>
            <Container className="text-justify">
            <div className="justify-content-between d-flex">
                <p><strong>{carrer.position}</strong> at {carrer.company}</p>
                <p><strong>{carrer.periode}</strong></p>
            </div>
                <p>{carrer.description}</p>
                {showAchievementList}
                <hr />
            </Container>
        </Row>
    )
}

export default CarrerList
