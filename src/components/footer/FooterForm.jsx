import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AnimatedArrow from '../../assets/icons/animatedArrow';

const FooterForm = () => {
    return (
        <Form className='pt-1'>
            <InputGroup className="arrow-group mb-3 mt-4">
                <Form.Control
                    type="email"
                    placeholder="Enter your email here"
                    aria-label="Your Email"
                />
                <Button variant="primary" className='text-dark px-2'>
                    <AnimatedArrow />
                </Button>
            </InputGroup>
        </Form>
    )
}

export default FooterForm;