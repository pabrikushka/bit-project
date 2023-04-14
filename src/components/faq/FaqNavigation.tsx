import React from "react";
import { animateScroll, Link } from "react-scroll";


const FaqNavigation = () => {
    return (
        <nav className="faq-nav pt-5">
            <ul className="faq-nav-items">
                <li className="faq-nav-item">
                    <Link
                        className="nav-link history-nav-link lead"
                        activeClass="active"
                        to="General"
                        spy={true}
                        delay={50}
                        smooth={false}
                        // onSetActive={handleSetActive}
                    >
                        General
                    </Link>
                </li>

                <li className="faq-nav-item">
                    <Link
                        className="nav-link history-nav-link lead"
                        activeClass="active"
                        to="General"
                        spy={true}
                        delay={50}
                        smooth={false}
                        // onSetActive={handleSetActive}
                    >
                        The BIT Book
                    </Link>
                </li>

                <li className="faq-nav-item">
                    <Link
                        className="nav-link history-nav-link lead"
                        activeClass="active"
                        to="General"
                        spy={true}
                        delay={50}
                        smooth={false}
                        // onSetActive={handleSetActive}
                    >
                        Events
                    </Link>
                </li>

                <li className="faq-nav-item">
                    <Link
                        className="nav-link history-nav-link lead"
                        activeClass="active"
                        to="General"
                        spy={true}
                        delay={50}
                        smooth={false}
                        // onSetActive={handleSetActive}
                    >
                        Events
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default FaqNavigation