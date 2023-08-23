import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup, Spinner } from 'react-bootstrap';
import AnimatedArrow from '../../../../assets/icons/animatedArrow';
import Rocket from '../../../../assets/icons/rocket';
import Smiley from '../../../../assets/icons/smiley';
import { AnimatePresence, motion } from 'framer-motion';
import { delay, transform } from 'lodash';
import { startSignup } from './signupHelper';

type Props = {};

const Subscribe = (props: Props) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [signUpResult, setSignUpResult] = useState(null);

  const applySignupResult = (result) => {
    console.log(result); // TODO delete me
    setSignUpResult(result);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailValue !== '') {
      setIsProcessing(true);
      startSignup(emailValue, applySignupResult);
    }
  };

  useEffect(() => {
    if (!signUpResult) return;
    if (signUpResult.status === 0) {
      setIsError(false);
      setIsSuccess(true);
    } else if (signUpResult.status === 1) {
      setIsError(true);
      setIsSuccess(false);
    }
    setIsProcessing(false);
  }, [signUpResult]);

  return (
    <div className='subscribe'>
      {/* Form */}
      <AnimatePresence>
        {!(isError || isSuccess) && (
          <motion.div
            className='subscribe-form'
            transition={{ type: 'spring', duration: 0.5, delay: isError || isSuccess ? 0 : 0.7 }}
            initial={{ translateY: '-100%', opacity: 0 }}
            animate={{ translateY: '0%', opacity: 1 }}
            exit={{ translateY: '-100%', opacity: 0 }}>
            <div id='mc_embed_shell'>
              <div id='mc_embed_signup'>
                <form
                  method='post'
                  id='mc-embedded-subscribe-form'
                  name='mc-embedded-subscribe-form'
                  className='validate'
                  target='_self'
                  noValidate
                  onSubmit={handleSubmit}>
                  <div id='mc_embed_signup_scroll'>
                    <InputGroup className='arrow-group'>
                      <div className='position-relative flex-grow-1'>
                        <Form.Control
                          type='email'
                          name='EMAIL'
                          className='required email h-100'
                          placeholder='Enter your email here'
                          aria-label='Your Email'
                          id='mce-EMAIL'
                          value={emailValue}
                          onChange={(e) => setEmailValue(e.target.value)}
                          required
                        />
                        <span id='mce-EMAIL-HELPERTEXT' className='helper_text'></span>
                        <AnimatePresence>
                          {isProcessing && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className='subscribe-spinner-wrapper h-100 position-absolute top-0 end-0 d-flex align-items-center justify-content-center ps-4 pe-3'>
                              <Spinner className='subscribe-spinner' animation='border' role='status' size='sm'>
                                <span className='visually-hidden'>Loading...</span>
                              </Spinner>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <Button
                        type='submit'
                        name='subscribe'
                        id='mc-embedded-subscribe'
                        variant='primary'
                        className='text-dark px-2'>
                        <AnimatedArrow />
                      </Button>
                    </InputGroup>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <motion.div
        onClick={() => {
          setIsError(false);
        }}
        className='subscribe-error'
        initial={{ translateY: '100%', opacity: 0 }}
        animate={isError ? 'onShow' : 'default'}
        transition={{ duration: 0.5, type: 'spring' }}
        variants={{
          default: { translateY: '100%', opacity: 0, transition: { delay: 0.6 } },
          onShow: { translateY: '0%', opacity: 1, transition: { delay: 0.8 } },
        }}>
        <div className='d-flex align-items-center'>
          <motion.div
            animate={isError ? 'onShow' : 'default'}
            initial={{ translateX: '-10px', translateY: '15px', rotate: '25deg' }}
            transition={{ type: 'spring' }}
            variants={{
              default: {
                translateX: '-10px',
                translateY: '15px',
                rotate: '25deg',
                transition: { transition: 0.3, delay: 0.45 },
              },
              onShow: {
                translateX: '0px',
                translateY: '0px',
                rotate: '0deg',
                transition: { transition: 0.3, delay: 0.8 },
              },
            }}
            className='me-3'>
            <Smiley></Smiley>
          </motion.div>
          <div>
            <h3 className='m-0 fw-light text-error'>Oops...</h3>
            <motion.p
              className='m-0 opacity-50'
              animate={isError ? 'onShow' : 'default'}
              initial={{ translateY: '15px' }}
              transition={{ type: 'spring' }}
              variants={{
                default: { translateY: '15px', transition: { transition: 0.3, delay: 0.35 } },
                onShow: { translateY: '0px', transition: { transition: 0.3, delay: 0.9 } },
              }}>
              Something went wrong...
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Success Message*/}
      <motion.div
        onClick={() => {
          setIsSuccess(false);
        }}
        className='subscribe-error'
        initial={{ translateY: '100%', opacity: 0 }}
        animate={isSuccess ? 'onShow' : 'default'}
        transition={{ duration: 0.5, type: 'spring' }}
        variants={{
          default: { translateY: '100%', opacity: 0, transition: { delay: 0.6 } },
          onShow: { translateY: '0%', opacity: 1, transition: { delay: 0.8 } },
        }}>
        <div className='d-flex align-items-center'>
          <motion.div
            animate={isSuccess ? 'onShow' : 'default'}
            initial={{ translateX: '-10px', translateY: '15px', rotate: '25deg' }}
            transition={{ type: 'spring' }}
            variants={{
              default: {
                translateX: '-10px',
                translateY: '15px',
                rotate: '25deg',
                transition: { transition: 0.3, delay: 0.45 },
              },
              onShow: {
                translateX: '0px',
                translateY: '0px',
                rotate: '0deg',
                transition: { transition: 0.3, delay: 0.8 },
              },
            }}
            className='me-3'>
            <Rocket></Rocket>
          </motion.div>
          <div>
            <h3 className='m-0 fw-light'>Good job!</h3>
            <motion.p
              className='m-0 opacity-50'
              animate={isSuccess ? 'onShow' : 'default'}
              initial={{ translateY: '15px' }}
              transition={{ type: 'spring' }}
              variants={{
                default: { translateY: '15px', transition: { transition: 0.3, delay: 0.35 } },
                onShow: { translateY: '0px', transition: { transition: 0.3, delay: 0.9 } },
              }}>
              We'll keep you posted...
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Subscribe;
