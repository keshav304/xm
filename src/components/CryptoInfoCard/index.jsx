import './style.css'

export const CryptoInfoCard = ({ cardInfo }) => {
  const { topIcon, PrimaryIcon, shortname, fullname, price, isPriceUp, jump } = cardInfo;

  return (
    <div className={`crypto-info-card${isPriceUp ? ' price-up' : ''}`}>
      {topIcon && <img className="top-icon" src={topIcon} alt="Top Icon" />}
      <div className="card-content">
        {PrimaryIcon && (
          <div className="primary-icon">
            <img src={PrimaryIcon} alt="Primary Icon" />
          </div>
        )}
        <div className="info-row">
          <div className="name">
            <div className="short-name">{shortname}</div>
            <div className="full-name">{fullname}</div>
          </div>
          <div className="price">{price}</div>
        </div>
        <div className={`jump ${isPriceUp ? 'price-up' : 'price-down'}`}>{jump}</div>
      </div>
    </div>
  );
};

