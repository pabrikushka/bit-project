import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import AnimatedArrow from '../../../assets/icons/animatedArrow';
import Rocket from '../../../assets/icons/rocket';
import Smiley from '../../../assets/icons/smiley';
import { AnimatePresence, motion } from 'framer-motion';
import { delay, transform } from 'lodash';

type Props = {};

const Subscribe = (props: Props) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData.get('EMAIL'),
        headers: { 'Access-Control-Allow-Origin': '*' },
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsSuccess(true);
    }
  };

  console.log(isError);

  return (
    <div className='subscribe'>
      {/* Form */}
      <AnimatePresence>
        {!(isError || isSuccess) && (
          <motion.div
            className='subscribe-form'
            transition={{ duration: 0.5, delay: isError || isSuccess ? 0 : 0.5 }}
            initial={{ translateY: '-100%', opacity: 0 }}
            animate={{ translateY: '0%', opacity: 1 }}
            exit={{ translateY: '-100%', opacity: 0 }}>
            <div id='mc_embed_shell'>
              <div id='mc_embed_signup'>
                <form
                  action='https://kisslabs.us4.list-manage.com/subscribe/post?u=c1a5e982447e163b13590c489&amp;id=2c95acdcdd&amp;f_id=00222ee9f0'
                  method='post'
                  id='mc-embedded-subscribe-form'
                  name='mc-embedded-subscribe-form'
                  className='validate'
                  target='_self'
                  noValidate
                  onSubmit={handleSubmit}>
                  <div id='mc_embed_signup_scroll'>
                    <InputGroup className='arrow-group'>
                      <Form.Control
                        type='email'
                        name='EMAIL'
                        className='required email'
                        placeholder='Enter your email here'
                        aria-label='Your Email'
                        id='mce-EMAIL'
                        required
                      />
                      <span id='mce-EMAIL-HELPERTEXT' className='helper_text'></span>
                      <Button
                        type='submit'
                        name='subscribe'
                        id='mc-embedded-subscribe'
                        variant='primary'
                        className='text-dark px-2'>
                        <AnimatedArrow />
                      </Button>
                    </InputGroup>
                    {/* 
                    <div aria-hidden='true' style={{ position: 'absolute', left: '-5000px' }}>
                      <input type='text' name='b_c1a5e982447e163b13590c489_2c95acdcdd' tabIndex={-1} />
                    </div> */}
                    <div id='mce-responses' className='clear'>
                      <div className='response' id='mce-error-response' style={{ display: 'none' }}></div>
                      <div className='response' id='mce-success-response' style={{ display: 'none' }}></div>
                    </div>
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
        transition={{ duration: 0.5 }}
        variants={{
          default: { translateY: '100%', opacity: 0, transition: { delay: 0.6 } },
          onShow: { translateY: '0%', opacity: 1, transition: { delay: 0.8 } },
        }}>
        <div className='d-flex align-items-center'>
          <motion.div
            animate={isError ? 'onShow' : 'default'}
            initial={{ translateX: '-10px', translateY: '15px', rotate: '25deg' }}
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
        transition={{ duration: 0.5 }}
        variants={{
          default: { translateY: '100%', opacity: 0, transition: { delay: 0.6 } },
          onShow: { translateY: '0%', opacity: 1, transition: { delay: 0.8 } },
        }}>
        <div className='d-flex align-items-center'>
          <motion.div
            animate={isSuccess ? 'onShow' : 'default'}
            initial={{ translateX: '-10px', translateY: '15px', rotate: '25deg' }}
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
