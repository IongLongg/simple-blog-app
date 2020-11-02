import React from 'react'
import { Card } from 'react-bootstrap'

function SideWidget() {
    return (
        <Card className='my-4 text-center'>
            <Card.Header as='h5'>Side Widget</Card.Header>
            <Card.Body>
                <h1>Ads</h1>
            </Card.Body>
        </Card>
    )
}

export default SideWidget
