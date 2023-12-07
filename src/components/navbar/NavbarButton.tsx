import * as React from 'react';
import Button from 'react-bootstrap/Button';


function NavbarButton(props: any) {
    return (
        <div className={props.styleName}>
            <a className="btn btn-primary bit-btn " href="https://smashtoshi.myshopify.com/">
                Pre-Order
            </a>
        </div>
    )
}

export default NavbarButton;