const FooterLinks = () => {
    return (
        <div className='px-lg-3 d-flex flex-column h-100'>
            <ul className='footer-nav-items flex-grow-1 d-flex flex-column'>
                <li className="footer-nav-item">
                    <a className='nav-link px-0 py-1' href="">BTC History</a>
                </li>
                <li className="footer-nav-item">
                    <a className='nav-link px-0 py-1' href="">The Collective</a>
                </li>
                <li className="footer-nav-item">
                    <a className='nav-link px-0 py-1' href="">Shop</a>
                </li>
                <li className="footer-nav-item">
                    <a className='nav-link px-0 py-1' href="">FAQ</a>
                </li>
                <li className="footer-nav-item">
                    <a className='nav-link px-0 py-1' href="">Email</a>
                </li>
                <li className="footer-nav-item mt-auto py-3">
                    <a className='nav-link px-0 py-1 ' href="">hello@smashtoshi.com</a>
                </li>
            </ul>
        </div>
    )
}

export default FooterLinks;

