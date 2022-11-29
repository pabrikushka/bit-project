import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterForm from './FooterForm';
import FooterSocial from './FooterSocial';
import FooterSponsors from './FooterSponsors';
import Logo from '../../assets/images/logo';

const Footer = () => {
    return (
        <footer>
            <Container className='px-xl-5'>
                <Row className='footer-main g-0'>
                    <Col className='footer-col footer-main-col' xs={12} lg={4} xxl={3}>
                        <a className="navbar-brand glow-svg-hover mb-3 d-inline-flex" href="#">
                            <Logo className={"brand-logo primary"} />
                            {/* <Logo className={'brand-logo secondary'}/> */}
                        </a>
                        <h3 className='p lead'>
                            Subscribe to our newsletter and be the first to know about the latest updates, artworks and events
                        </h3>
                        <FooterForm />
                    </Col>
                    <Col className='footer-col d-lg-flex justify-content-center' xs={12} sm={6} lg={4} xxl={5}>
                        <FooterSocial />
                    </Col>
                    <Col className='footer-col' xs={8} sm={6} lg={4} xl={{ span: 3, offset: 1 }}>
                        <FooterSponsors />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;