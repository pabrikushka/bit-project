import * as React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import AnimatedArrow from '../assets/icons/animatedArrow';
import CloseButton from 'react-bootstrap/CloseButton';
import packShot from "../assets/images/packshot.png";

const SiteAlert = () => {
  
  return (
    <section className="site-alert py-2 d-flex align-items-center">
        <Container className="nav-container px-xl-5">
          <div className='alert-body d-flex justify-content-between align-items-md-center'>
            <div className='d-none d-md-block'><AnimatedArrow /></div>
            <div className="alert-content d-flex flex-column flex-md-row align-items-md-center">
              <img src={packShot} alt="Pack Shot" className='packshot me-2 d-none d-md-block'/>
              <p className='alert-main mb-1 mb-md-0 p-md-2'>
                BIT pre-sales open on 04 April 2023.
              </p>
              <a href="" className='p-md-2 text-white'>Reserve a copy</a>
            </div>
            <div className='p-1 p-md-0'>
            {/* <CloseButton aria-label="Hide"  variant='white'/> */}
            </div>
          </div>
        </Container>
    </section>
  );
};

export default SiteAlert;
