import skills from "../../data/skills"

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col } from 'react-grid-system';

function Skills() {

        const settings = {
                dots: false,
                infinite: true,
                speed: 400,
                autoplay: true,
                autoplaySpeed: 600,
                responsive: [ { breakpoint: 768, settings: { slidesToShow: 6, slidesToScroll: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 8, slidesToScroll: 1 } }, { breakpoint: 100000, settings: { slidesToShow: 8, slidesToScroll: 1 } } ]
        };

        const data = skills.icons.map((icon) => {
                return (
                    <div className="icon-container"><img className="icon" src={`/images/${icon.img}`} alt={icon.name} /></div>
                );
            }
        )

        return(
                <div>
                    <Container className="container">
                        <Row className="row">
                            <Col sm={12} md={9} lg={8} xl={8} className="column">
                                <h1 className="h1">Here are some things <br/> that I know.</h1>
                                <h2 className="h2">I love learning new languages and technologies and I am always open to new things. I am a lifelong learner and this is just the start of my journey!</h2>
                            </Col>
                        </Row>
                    </Container>
                    <Slider {...settings}>
                        {data}
                    </Slider>
                </div>
        )
}

export default Skills;