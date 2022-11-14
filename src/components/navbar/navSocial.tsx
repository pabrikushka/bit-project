import * as React from 'react';
import TwitterIcon from '../../assets/icons/twitter';



function NavSocial(props : any){
    return (
        <div className={`nav-social py-4 ${ props.styleName }`}>
            <li className='nav-item me-md-3'>
                <a href="" className="nav-social-link nav-link p-3 p-md-0 glow-svg-hover">
                    <TwitterIcon />
                </a>
            </li>
            <li className='nav-item'>
                <a href="" className="nav-social-link nav-link p-3 p-md-0 glow-svg-hover">
                    <TwitterIcon />
                </a>
            </li>
        </div>
    )
}

export default NavSocial;