import { Container, Row, Col } from 'react-grid-system';

function Contact() {

    return(
        <div>
            <Container className="container">
                <Row>
                    <Col>
                        <h1 className="h1">Get in touch</h1>
                        <a href="mailto:johnianpdavid@gmail.com" className="button">Contact Me</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;