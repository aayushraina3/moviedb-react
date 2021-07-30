import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function MovieCard(props) {

    console.log(props.info);
    return (
        <div>
            <Card className="movie-card">
                <Card.Img className="card-banner" variant="top" src="https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_.jpg" />
                <Card.Body className="card-body">
                    <Card.Title>American Sniper</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="danger">Read More</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
