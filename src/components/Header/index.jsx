import xm_logo from './../../assests/xm_logo.png'
import './style.css'

export const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo-container">
                    <img src={xm_logo} alt="XM Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="#">XM Homepage</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>
        </header>
    );
}