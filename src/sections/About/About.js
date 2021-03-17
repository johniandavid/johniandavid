import { Container, Row, Col } from 'react-grid-system';

function About() {

    return (
            <div>
                <div className="slide">
                    <Container className="container">
                        <Row>
                            <Col sm={12} md={9} lg={7} xl={6}>
                                <h1 className="h1">Aspiring Backend Software Engineer based in SF</h1>
                                <h2 className="h2">Dedicated to creating innovative solutions that can positively impact the lives of others. </h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container className="container">
                        <Row>
                            <Col sm={12} md={9} lg={7} xl={6}>
                                <h1 className="h1">I’m a creative, results-driven Software Engineer who can build state-of-the-art and user-friendly applications </h1>
                                <h2 className="h2"> I aspire to use my passion for technology as a driving force to tackle everyday issues.</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container className="container">
                        <Row>
                            <Col sm={12} md={9} lg={7} xl={6}>
                                <h1 className="h1">In my free time, I love to binge watch Netflix shows, sing in my room, or hang out with friends</h1>
                                <h2 className="h2"> Contact me if you want to work together or if you just want to chat or hang out. I'm open to any opportunities and new connections! </h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
}

export default About;