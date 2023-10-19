import "./style.css";
import { ReactComponent as UpIcon } from "./../../assests/up.svg";
import { ReactComponent as DownIcon } from "./../../assests/down.svg";

export const CryptoInfoCard = ({ cardInfo }) => {
  const {  PrimaryIcon, shortname, fullname, price, isPriceUp, jump,fullNameWidth } =
    cardInfo;

  return (
    <div className={`crypto-info-card${isPriceUp ? " price-up" : ""}`}>
      <div className="info-row">
        <div className="card-content">
            <div className={shortname==='ETH'?"primary-icon":null}>
              <PrimaryIcon /> {/* Render the primary icon component */}
            </div>

          <div className="name">
            <div className="short-name">{shortname}</div>
            <div className="full-name" style={{"width":fullNameWidth}}>{fullname}</div>
          </div>
        </div>
        <hr/>
        <div className="price">{price}</div>

        <div className={`jump ${isPriceUp ? "price-up" : "price-down"}`}>
          {isPriceUp ? <UpIcon /> : <DownIcon />}
          {jump}
        </div>
      </div>
    </div>
  );
};
