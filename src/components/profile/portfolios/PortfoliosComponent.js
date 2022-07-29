import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import PortfolioCard from './PortfolioCard'

function PortfoliosComponent({portfolios}) {
    return (
        <Card className="mb-3">
            <Card.Header><h4><strong>Portfolios</strong></h4></Card.Header>
            <Card.Body>
            
                <PortfolioCard portfolios={portfolios} />
            </Card.Body>
        </Card>
    )
}

export default PortfoliosComponent
