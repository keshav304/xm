import './style.css'
import { ReactComponent as Bitcoin } from "./../../assests/bitcoin.svg";
import { ReactComponent as Ethereum } from "./../../assests/ethereum.svg";
import { ReactComponent as Ripple } from "./../../assests/ripple.svg";
import { ReactComponent as BitcoinCash } from "./../../assests/bitcoin_cash.svg";
import { ReactComponent as Litcoin } from './../../assests/litcoin.svg';
import { CryptoInfoCard } from '../CryptoInfoCard';
import { WhyXmSection } from '../WhyXmSection';
import { RegisterForm } from '../RegisterForm';
import greenBackground from './../../assests/green-bg.png';
import Cubeglass2 from './../../assests/Cube-glass-2.png';
import Cubeglass3 from './../../assests/Cube-glass-3.png';
import CupGlass1 from './../../assests/cup-glass-1.png';
import GoldNumber1 from './../../assests/Gold-Number-1.png'
import GoldNumberAngle1 from './../../assests/Gold-Number-angle-1.png';
import PerforatedRing from './../../assests/Perforated-ring-glass2.png'
const cryptoInfoList = [
    {
        "shortname": "BTC",
        "fullname": "BITCOIN",
        "PrimaryIcon": Bitcoin,
        "price": "$87,193.00",
        "jump": "12.95%",
        "isPriceUp": true,
        "fullNameWidth": "51px"
    },
    {
        "shortname": "ETH",
        "fullname": 'Ethereum',
        "PrimaryIcon": Ethereum,
        "price": "$1,276.00",
        "jump": "4.87%",
        "fullNameWidth": "61px"
    },
    {
        "shortname": "XRP",
        "fullname": "RIPPLE",
        "PrimaryIcon": Ripple,
        "price": "$0,6058.00",
        "jump": "4.59%",
        "isPriceUp": true,
        "fullNameWidth": "45px"
    },
    {
        "shortname": "LTC",
        "fullname": "LITCOIN",
        "PrimaryIcon": Litcoin,
        "price": "$107,83.00",
        "jump": "8.23%",
        "isPriceUp": false,
        "fullNameWidth": "56px"
    },
    {
        "shortname": "BCH",
        "fullname": "BITCOIN CASH",
        "PrimaryIcon": BitcoinCash,
        "price": "$1,276.00",
        "jump": "5.87%",
        "isPriceUp": true,
        "fullNameWidth": "74px"
    }
]

export const PrimaryInfoSection = () => {
    return (
        <section>
            <img src={Cubeglass2} id='cube-glass-2' alt='' />
            <img src={Cubeglass3} id='cube-glass-3' alt='' />
            <img src={CupGlass1} id='cup-glass-1' alt='' />
            <img src={GoldNumber1} id='gold-number-1' alt='' />
            <img src={GoldNumberAngle1} id='gold-number-angle-1' alt='' />
            <img src={PerforatedRing} id='perforated-ring' alt='' />
            <img src={greenBackground} id='green-bg' alt='' />

            <div className='primary-content-container'>
                <div className='primary-content'>
                    <p>
                        TRADE WITH
                    </p>
                    <p className='pc-para-1'><strong>Zero Swaps</strong> on All XM Ultra Low Accounts for more than 25 instruments!</p>
                    <p className='pc-para-2'>Enjoy spreads <strong>as low as 0.6 pips</strong> and  <strong>leverage up to 1000:1</strong> on instruments like  <strong>EURUSD, USDJPY, EURJPY, GBPUSD, and Gold.</strong></p>
                    <button>open account</button>
                    <p className='pc-link-1'>New to trading? <a>Try a Demo account.</a></p>
                    <p className='pc-link-2'>Terms and Conditions apply*. To read the full T&Cs, <span><a href="#">click here</a></span>.</p>
                </div>
            </div>
            <div className='crypto-cards'>
                {cryptoInfoList.map((info) => (
                    <CryptoInfoCard key={info.fullname} cardInfo={info} />
                ))}
            </div>

            <div className='whysmsection'>
                <WhyXmSection />
            </div>
            <div className='registrationsection'>
                <RegisterForm />
            </div>
        </section>
    )
}