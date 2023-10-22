import "./style.css";

import competitivePricingIcon from './../../assests/competitive-pricing-icon.png';
import dollarIcon from './../../assests/dollar-icon.png';
import fastExecusionIcon from './../../assests/fast-execusion-icon.png';
import techIcon from './../../assests/tech-icon.png';
import GoldNumber2 from './../../assests/Gold-Number-2.png'

export const WhyXmSection = () => {
  return (
    <>
        <img src={GoldNumber2} id='gold-number-2' alt=''/>

      <div>
        <h4 className="whysmsection-heading">
          Why <strong>Trade</strong> with XM?
        </h4>
        <hr />
      </div>
      <div>
        <p className="whysmsection-description">
          We have been providing traders around the world with the same{" "}
          <strong>premium experience</strong> for over a decade. As an{" "}
          <strong>industry-leader</strong>, we know what the modern trader needs
          to be <strong>successful</strong> in the markets.
        </p>
      </div>
      <div class="whyxm-grid-container">
        <div class="box superior-trade-execution">
          <h2>Superior Trade Execution</h2>
          <hr />
          <p>
            <strong>99%</strong> of trades are executed in{" "}
            <strong>less than a second</strong>, with no requotes or rejections.
          </p>
          <img src={fastExecusionIcon} alt="fast execution icon" />
        </div>
        <div class="box competitive-pricing">
          <h2>Competitive Pricing</h2>
          <hr />
          <p>
            We offer some of the <strong>lowest spreads</strong> and we don’t
            charge commissions.
          </p>
          <img src={competitivePricingIcon} />
        </div>
        <div class="box advanced-technology" alt="competitive pricing">
          <h2>Advanced Technology</h2>
          <hr />
          <p>
            Trade on <strong> MT4 </strong>or5<strong> MT4 </strong>, with
            expert tools, across desktop, web and mobile.
          </p>
          <img src={techIcon} alt="advanced-technology"/>
        </div>
        <div class="box start-with-little">
          <h2>Start with $5</h2>
          <hr />
          <p>
            Start trading your preferred instruments with as little as a{" "}
            <strong>$5 minimum deposit</strong>.
          </p>
          <img src={dollarIcon} alt="dollar icon" />
        </div>
      </div>
    </>
  );
};
