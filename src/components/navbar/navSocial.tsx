import * as React from 'react';
import TwitterIcon from '../../assets/icons/twitter';
import DiscordIcon from '../../assets/icons/discord';
import XIcon from '../../assets/icons/xIcon';



function NavSocial(props : any){
    return (
        <div className={`nav-social py-4 ${ props.styleName }`}>
            <li className='nav-item me-md-3'>
                <a href="https://discord.com/channels/983761568892321872/984057509184688148" target='_blank' className="nav-social-link nav-link p-3 p-md-0 px-md-1 glow-svg-hover">
                    <DiscordIcon />
                </a>
            </li>
            <li className='nav-item'>
                <a href="https://twitter.com/bysmashtoshi" target='_blank' className="nav-social-link nav-link p-3 p-md-0 px-md-1 glow-svg-hover">
                    <XIcon/>
                </a>
            </li>
        </div>
    )
}

export default NavSocial;