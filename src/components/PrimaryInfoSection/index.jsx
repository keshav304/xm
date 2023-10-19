import './style.css'
import Bitcoin from "./../../assests/bitcoin.svg";
import Ethereum from "./../../assests/ethereum.svg";
import Litcoin from "./../../assests/litecoin.svg";
import Ripple from "./../../assests/ripple.svg";
const cryptoInfoList = [
    {
        "shortname": "BTC",
        "fullname": "Bitcoin",
        "topIcon": "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png",
        "PrimaryIcon": "`",
        "price": "$1,000.00",
        "jump":"12.95%",
        "isPriceUp": true
    },
    {
        "shortname": "ETH",
        "fullname": "Ethereum",
        "topIcon": "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png",
        "PrimaryIcon": "`",
        "price": "$1,000.00",
        "jump":"12.95%",
        "isPriceUp": true
    },
    {
        "shortname": "XRP",
        "fullname": "Rippling",
        "topIcon": "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png",
        "PrimaryIcon": "`",
        "price": "$1,000.00",
        "jump":"12.95%",
        "isPriceUp": true
    },
    {
        "shortname": "LTC",
        "fullname": "Litecoin",
        "topIcon": "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png",
        "PrimaryIcon": "`",
        "price": "$1,000.00",
        "jump":"12.95%",
        "isPriceUp": true
    },
    {
        "shortname": "BCH",
        "fullname": "Bitcoin Cash",
        "topIcon": "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png",
        "PrimaryIcon": "`",
        "price": "$1,000.00",
        "jump":"12.95%",
        "isPriceUp": true
    }
]

export const PrimaryInfoSection = () => {
    return (
        <section>
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
        </section>
    )
}