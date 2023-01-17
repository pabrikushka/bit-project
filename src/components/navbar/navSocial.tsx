import * as React from 'react';
import TwitterIcon from '../../assets/icons/twitter';
import DiscordIcon from '../../assets/icons/discord';



function NavSocial(props : any){
    return (
        <div className={`nav-social py-4 ${ props.styleName }`}>
            <li className='nav-item me-md-3'>
                <a href="" className="nav-social-link nav-link p-3 p-md-0 px-md-1 glow-svg-hover">
                    <DiscordIcon />
                </a>
            </li>
            <li className='nav-item'>
                <a href="" className="nav-social-link nav-link p-3 p-md-0 px-md-1 glow-svg-hover">
                    <TwitterIcon />
                </a>
            </li>
        </div>
    )
}

export default NavSocial;