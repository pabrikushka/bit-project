import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterLinks from './FooterLinks';
import LogoXL from '../../assets/images/logoLockup.svg';
import { motion } from 'framer-motion';
import Subscribe from '../art/share/subscribe/Subscribe';

const Footer = () => {
  return (
    <motion.footer
      className='mb-5 pb-5'
      initial={{
        y: '0rem',
        scale: 1,
        opacity: 1,
      }}
      exit={{
        y: '-4rem',
        scale: 0.6,
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        scale: {
          duration: 1,
        },
      }}>
      <Container className='px-xl-5 mb-5 pb-5 mb-lg-0 pb-lg-0'>
        <Row className='footer-main g-0'>
          <Col className='footer-col footer-main-col' xs={12} lg={4} xxl={3}>
            <a className='navbar-brand glow-svg-hover mb-5 d-inline-flex' href='#'>
              <img src={LogoXL} className='brand-logo primary' />
              {/* <Logo className={'brand-logo secondary'}/> */}
            </a>
            <a className='text-decoration-none' href='mailto:hello@smashtoshi.com'>
              <p className='text-light-60 mb-1'>hello@smashtoshi.com</p>
            </a>
          </Col>
          <Col className='footer-col d-lg-flex flex-column align-items-md-center' xs={12} sm={6} lg={4} xxl={5}>
            <FooterLinks />
          </Col>
          <Col className='footer-col' xs={8} sm={6} lg={4} xl={{ span: 3, offset: 1 }}>
            <h3 className='p lead'>Subscribe</h3>
            <p className='text-light-60 mb-1'>Be the first to know about the latest updates, artworks and events</p>
            <div className='pt-3'>
              <Subscribe></Subscribe>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
