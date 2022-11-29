import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PilsnerUrquell from '../../assets/images/Footer-Logo-PilsnerUrquell.png';
import Moonpay from '../../assets/images/Footer-Logo-Moonpay.png';
import Pioneer from '../../assets/images/Footer-Logo-Pioneer.png';
import Tarsier from '../../assets/images/Footer-Logo-Tarsier.png';


const FooterSponsors = () => {
    return (
        <div className='px-lg-3 ps-xl-5'>
            <h3 className='p lead text-light-60'>
                Sponsors
            </h3>
            <Row className='row-cols-2 gy-3 gx-5 mt-2'>
                <Col>
                    <a className='sponsor' href="">
                        <img src={PilsnerUrquell} alt="Pilsner Urquell" className="sponsor-img" />
                    </a>
                </Col>
                <Col>
                    <a className='sponsor' href="">
                        <img src={Pioneer} alt="Pioneer" className="sponsor-img" />
                    </a>
                </Col>
                <Col >
                    <a className='sponsor' href="">
                        <img src={Moonpay} alt="Moonpay" className="sponsor-img" />
                    </a>
                </Col>
                <Col>
                    <a className='sponsor' href="">
                        <img src={Tarsier} alt="Tarsier" className="sponsor-img" />
                    </a>
                </Col>
                
                
                
            </Row>
        </div>
    )
}

export default FooterSponsors;