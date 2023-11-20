import { NavLink, Link } from "react-router-dom";

const FooterLinks = () => {
    return (
        <div className='px-lg-3 d-flex flex-column h-100'>
            <ul className='footer-nav-items flex-grow-1 d-flex flex-column'>
                <li className="footer-nav-item">
                    <NavLink className='nav-link footer-link px-0 py-1' to="/history">BTC History</NavLink>
                </li>
                <li className="footer-nav-item">
                    <NavLink className='nav-link footer-link px-0 py-1' to="/collective">The Collective</NavLink>
                </li>
                <li className="footer-nav-item">
                    <a className='nav-link footer-link px-0 py-1' href="https://smashtoshi.myshopify.com/">Shop</a>
                </li>
                <li className="footer-nav-item">
                    <NavLink className='nav-link footer-link px-0 py-1' to="/faq">FAQ</NavLink>
                </li>
                <li className="footer-nav-item mt-auto">
                <Link
                    to='#'
                    className='nav-link footer-link px-0 py-1'

                    onClick={(e) => {
                        window.location.href = "mailto:hello@smashtoshi.com";
                        e.preventDefault();
                    }}
                >
                    hello@smashtoshi.com
                </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterLinks;

{/* <div className='px-lg-3 d-flex flex-column h-100'>
            <ul className='footer-nav-items flex-grow-1 d-flex flex-column'>
                <li className="footer-nav-item">
                    <NavLink className='nav-link px-0 py-1' to="/history">BTC History</NavLink>
                </li>
                <li className="footer-nav-item">
                    <NavLink className='nav-link px-0 py-1' to="/collective">The Collective</NavLink>
                </li>
                <li className="footer-nav-item">
                    <NavLink className='nav-link px-0 py-1' to="https://smashtoshi.myshopify.com/">Shop</NavLink>
                </li>
                <li className="footer-nav-item">
                    <NavLink className='nav-link px-0 py-1' to="/faq">FAQ</NavLink>
                </li>
                <li className="footer-nav-item">
                    <NavLink className='nav-link px-0 py-1' to="/">Email</NavLink>
                </li>
                <li className="footer-nav-item mt-auto py-3">
                    <NavLink className='nav-link px-0 py-1 ' to="/">hello@smashtoshi.com</NavLink>
                </li>
            </ul>
        </div> */}

