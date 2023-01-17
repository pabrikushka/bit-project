import * as React from 'react';
import Button from 'react-bootstrap/Button';


function NavbarButton(props: any) {
    return (
        <div className={props.styleName}>
            <Button variant="primary" className="bit-btn" href="#">
                Buy Now
            </Button>
        </div>
    )
}

export default NavbarButton;