import { Container, Row, Col } from 'reactstrap';
import './index.css';

const Profile = () => {
  return (
    <Container>
      <Row className="mb-3 align-items-center">
        <Col xs={12} sm={12} md={4} lg={4} className="md-justify-center mb-2">
          <img
            src={'./images/woman-profile.png'}
            className="profile-picture img-fluid"
            alt="professional"
            data-testid="profilePicture"
          />
        </Col>
        <Col xs={12} sm={12} md={8} lg={8}>
          <h2 data-testid="titleProfile" className="profile-title mb-2">
            Professional name
          </h2>
          <div id="details">
            <span id="role" className="profile-role">
              Psicologist
            </span>{' '}
            |{' '}
            <span id="location" className="profile-location">
              Lisbon
            </span>
          </div>
          <div id="profile-classification" className="profile-classification">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffce31"
                stroke="transparent"
                d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffce31"
                stroke="transparent"
                d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffce31"
                stroke="transparent"
                d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffce31"
                stroke="transparent"
                d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffce31"
                stroke="transparent"
                d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"
              />
            </svg>
            <span className="profile-classification-score">(20 reviews)</span>
          </div>
          <div className="profile-price mt-2">
            <span className="profile-price-value">R$160</span>
            <span className="profile-price-session">/ 50 minutes</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pulvinar nec orci eget varius. Nunc at tincidunt lorem. Morbi quis
            urna eu augue volutpat sagittis ut at orci. Ut eget accumsan turpis.
            Vivamus quam risus, fermentum at scelerisque a, auctor et augue.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
