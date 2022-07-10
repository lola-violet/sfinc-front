import React from 'react';
import { Card, Button } from 'react-bootstrap';


export default function TunnelsAndShaftsCards() {
    return (
        <div>
            <Card style={{ width: '24rem' }}>
                <Card.Img variant='top' src='http://placekitten.com/286/180' />
                <Card.Body>
                    <Card.Title>Tunnel Boring Machine Rescue</Card.Title>
                    <Card.Text>Washington</Card.Text>
                    <Button>View Details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}