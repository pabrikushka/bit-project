import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AnimatedArrow from '../../assets/icons/animatedArrow';
import {startSignup} from '../../shared/emailSubscriber/signupHelper';

const FooterForm = () => {
    const [emailValue, setEmailValue] = useState('');
    const [signupResult, setSignupResult] = useState(null);
    
    
    const applySignupResult = (result) =>{
        console.log(result); // TODO delete me
        setSignupResult(result);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(emailValue !== ''){
            startSignup(emailValue, applySignupResult);
        }
    };
    
    return (
        <Form className='pt-1' onSubmit={handleSubmit}>
            <InputGroup className="arrow-group mb-3 mt-4">
                <Form.Control
                    type="email"
                    placeholder="Enter your email here"
                    aria-label="Your Email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                />
                <Button variant="primary" className='text-dark px-2' type="submit">
                    <AnimatedArrow />
                </Button>
            </InputGroup>
        </Form>
    )
}

export default FooterForm;