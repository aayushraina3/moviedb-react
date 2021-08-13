import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function MovieCard(props) {
    return (
        <div>   {/*key={props.key}*/}
            <Card className="movie-card">
                <Card.Img className="card-banner" variant="top" src={props.search.Poster} />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{props.search.Title}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button className="card-button" variant="danger">Read More</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
