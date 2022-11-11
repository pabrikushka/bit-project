import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Logo from '../images/logo'
import NavSocial from '../components/navSocial';
import { AnimatePresence, motion, useCycle } from "framer-motion";


const Navbar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)
    const [minified, setMinified] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else {
            setVisible(true)
        }

        if (currentScrollPos > 100) {
            setMinified(true)
        } else {
            setMinified(false)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })
    
    const curtainsVariants = {
        closed: {
            scale: 2.1,
            rotate: 30,

        },
        open: {
            scale: 2,
            rotate: 30
        }
    }

    const leftCurtainVariants = {
        closed: {
            left: '-50%',

        },
        open: {
            left: "1%",
        }
    }

    const rightCurtainVariants = {
        closed: {
            right: '-50%',
        },
        open: {
            right: "1%",
        }
    }

    const curtainTransition = {
        duration: .4,
        delay: 0,
        ease: "easeOut"
    }

    const navLinkVariants = {
        closed: {
            opacity: 0,
            y: "130%",
            transition: {
                type: "spring",
                stiffness: 70,
                duration: .1
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                delay: .3,
                type: "spring",
                stiffness: 150
            }
        }
    }

    const navItemsVariants = {
        closed: {
            transition: {
                duration: 0.1,
                staggerChildren: 0.08,
                staggerDirection: -0.5
            }
        },
        open: {
            transition: {
                staggerChildren: 6,
                staggerDirection: 1
            }
        }
    }

    const [open, cycleOpen] = useCycle(false, true);
    useEffect(() => {
        if (open) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
      }, [open]);

    return (
        <nav className={`bit-nav ${visible ? '' : 'shifted'} ${minified ? 'minified' : ''} ${open ? 'opened' : 'collapsed'}`}>
            <Container className='nav-container px-xl-5'>
                <div className="nav-content">
                    <a className="navbar-brand glow-svg-hover" href="#">
                        <Logo className={'brand-logo primary'} />
                        {/* <Logo className={'brand-logo secondary'}/> */}
                    </a>
                    <AnimatePresence>
                        {open && (
                            <>
                                <motion.div
                                    className="nav-curtains"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={curtainsVariants}
                                    transition={curtainTransition}
                                >
                                    <motion.div
                                        className="nav-curtain"
                                        variants={leftCurtainVariants}
                                        transition={curtainTransition}
                                    >
                                    </motion.div>
                                    <motion.div
                                        className="nav-curtain"
                                        variants={rightCurtainVariants}
                                        transition={curtainTransition}
                                    >
                                    </motion.div>

                                </motion.div>
                                <motion.div
                                    className="nav-items"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={navItemsVariants}
                                >

                                    <li className="nav-item">
                                        <motion.a variants={navLinkVariants} href="" className="nav-link">
                                            BTC History
                                        </motion.a>
                                    </li>
                                    <li className="nav-item">
                                        <motion.a variants={navLinkVariants} href="" className="nav-link">
                                            Book
                                        </motion.a>
                                    </li>
                                    <li className="nav-item">
                                        <motion.a variants={navLinkVariants} href="" className="nav-link">Events</motion.a>
                                    </li>
                                    <li className="nav-item">
                                        <motion.a variants={navLinkVariants} href="" className="nav-link">Collective</motion.a>
                                    </li>
                                    <motion.div variants={navLinkVariants}>
                                        <NavSocial styleName={'d-flex d-md-none justify-content-center'} />
                                    </motion.div>

                                </motion.div>
                            </>)}
                    </AnimatePresence>
                    <NavSocial styleName={'d-none d-md-flex'} />
                    <button
                        onClick={(e) => cycleOpen()}
                        className={`nav-trigger btn btn-link d-md-none p-0 ${open ? 'open' : ''}`}
                    >
                        <div className="trigger-labels">
                            <div className="trigger-label menu-open">
                                menu
                            </div>
                            <div className="trigger-label menu-close">
                                close
                            </div>
                        </div>
                    </button>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;