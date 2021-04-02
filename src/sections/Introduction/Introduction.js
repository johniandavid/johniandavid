import { Container, Row, Col } from 'react-grid-system';
import {Navbar} from "reactstrap";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import navLinks from '../../data/navlinks'

function Introduction() {

    const socials = Object.values(navLinks["social"]);
    const navItems =  socials.map((social) => {
                    return (
                            <a href={social.url} target="_blank">{social.name}</a>
                        );
                    }
                )

    return(
        <>
            <Container>
                <Navbar className="social-nav">
                    <div id="social">
                    {   navItems}
                    </div>
                </Navbar>
                <Row>
                    <div id="intro" className="container">
                        <h2 className="h2">Hello, my name is</h2>
                        <h1><Typist className="h1" avgTypingDelay={100}>John Ian David :-)</Typist></h1>
                        <a href={navLinks["social"]["github"]["url"]} target="_blank"><div class="button">View My Work</div></a>
                    </div>
                </Row>
            </Container>
        </>
        )
}

export default Introduction;