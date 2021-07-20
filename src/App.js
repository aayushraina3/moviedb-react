import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Card className="movie-card">
        <Card.Img className="movie-banner" variant="top" src="https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_.jpg" />
        <Card.Body>
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

export default App;
