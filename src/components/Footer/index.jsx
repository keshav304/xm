import './style.css'
import Metaquotes from './../../assests/metaquotes.png';
import Verisign from './../../assests/verisign.png';
import Unicef from './../../assests/unicef.png';
import Investors from './../../assests/investors.png';
import TradingPoint from './../../assests/trading-point.png';
import Facebook from './../../assests/fb.png';
import Twitter from './../../assests/x.png';
import Youtube from './../../assests/yt.png';
import Instagram from './../../assests/insta.png';
import Linkedin from './../../assests/ln.png';


export const Footer = () => {
    return (
        <footer>
            <div>
                <div className='companies-container'>
                    <img id='metaquotes' src={Metaquotes} alt="MetaQuotes" />
                    <img id='verisign' src={Verisign} alt="Verisign" />
                    <img id="unicef" src={Unicef} alt="Unicef" />
                    <img id="investors" src={Investors} alt="Investors" />
                </div>
                <div className='social-icons-container'>
                    <p>Follow us on</p>
                    <div className="social-icons">
                        <img src={Facebook} alt="Facebook" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Youtube} alt="Youtube" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Linkedin} alt="Linkedin" />
                    </div>
                </div>
            </div>
            <hr/>
            <div className='site-info-container'>
                <div className='site-info'>
                    <p>
                        <span>Privacy Policy </span>|
                        <span>Terms of use</span>|
                        <span>Site Map</span>
                    </p>
                </div>
                <div>
                    <img id="tradingpoint" src={TradingPoint} alt="TradingPoint" />
                </div>
            </div>
        </footer>
    );
}