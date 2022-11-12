import * as React from 'react';
import { Link } from 'react-scroll'


function HistoryNav() {


    return (
        <nav className='history-nav pt-5'>
            <div className="history-nav-content py-4 py-md-5 mt-xl-5">
                <div className="history-nav-items ps-3 ps-md-5 pe-md-3">
                    <div
                        className="history-nav-dot d-none d-md-block"
                        style={{
                            top: "1rem"
                        }}
                    >
                    </div>
                    <li className='history-nav-item'>
                        <Link className="nav-link small history-nav-link font-aeonik" activeClass="active" to="15" spy={true} delay={50} smooth={true}>15</Link>
                    </li>
                    <li className='history-nav-item'>
                        <Link className="nav-link small history-nav-link font-aeonik" to="16" spy={true} delay={50} smooth={true}>16</Link>
                    </li>
                    <li className='history-nav-item'>
                        <Link className="nav-link small history-nav-link font-aeonik" to="17" spy={true} delay={50} smooth={true}>17</Link>
                    </li>
                    <li className='history-nav-item'>
                        <Link className="nav-link small history-nav-link font-aeonik" to="18" spy={true} delay={50} smooth={true}>18</Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default HistoryNav;


