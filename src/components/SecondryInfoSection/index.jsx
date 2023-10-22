import './style.css'
import { ReactComponent as Shield } from "./../../assests/shield.svg"
import { ReactComponent as Community } from "./../../assests/community.svg"
import { ReactComponent as Award } from "./../../assests/award.svg"
import { ReactComponent as Support } from "./../../assests/support.svg"

export const SecondryInfoSection = () => {
    return (
        <div className='SecondryInfoSection-container'>
            <div>
                <hr />
                <h3>
                    Big<span>.</span> Fair<span>.</span> Human<span>.</span>
                </h3>
                <p>Learn why <strong>over 5 million clients choose XM</strong> as their trusted online broker.</p>
            </div>
            <div className='SecondryInfoFlex'>
                <div className='SecondryInfo'>
                    <Shield />
                    <h4>Authorised and Regulated</h4>
                    <p>At XM, we adhere to all regulatory standards and are fully authorised and regulated by FSC.</p>
                </div>
                <div className='SecondryInfo SecondryInfoAward1'>
                    <Award />
                    <h4>Multi-Award-Winning</h4>
                    <p>Over the years we have received over 40 awards for the quality of our products and services.</p>
                </div>
                <div className='SecondryInfo SecondryInfoCommunity1'>
                    <Community />
                    <h4>Committed and Fair</h4>
                    <p>We operate with complete transparency and adhere to the highest professional and ethical standards.</p>
                </div>
            </div>
            <div className='SecondryInfoFlex'>
                <div className='SecondryInfo SecondryInfoAward2'>
                    <Award />
                    <h4>Multi-Award-Winning</h4>
                    <p>Over the years we have received over 40 awards for the quality of our products and services.</p>
                </div>
                <div className='SecondryInfo SecondryInfoCommunity2'>
                    <Community />
                    <h4>Committed and Fair</h4>
                    <p>We operate with complete transparency and adhere to the highest professional and ethical standards.</p>
                </div>
                <div className='SecondryInfo'>
                    <Support />
                    <h4>24/7 Support</h4>
                    <p>Our support agents are on hand 24/7 to answer your questions or assist you with any issues.</p>
                </div>
            </div>
        </div>
    );
}