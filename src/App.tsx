import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Profile from './Components/Profile';
import Schedule from './Components/Schedule';

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={8} lg={8} className="md-justify-center mt-5" >
          <Profile />
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} className="md-justify-center mt-5" >
        <Schedule />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
