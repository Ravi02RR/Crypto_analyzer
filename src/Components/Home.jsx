import { useEffect } from "react";
import "../Components/Home.css";

const Home = () => {
  useEffect(() => {
    renderCoinData("bitcoin", "price1", "change1");
    renderCoinData("ethereum", "price2", "change2");
    renderCoinData("solana", "price3", "change3");
    renderCoinData("binancecoin", "price4", "change4");
    renderCoinData("ripple", "price5", "change5");
    renderCoinData("cardano", "price6", "change6");
    renderCoinData("link", "price7", "change7");
    renderCoinData("polkadot", "price8", "change8");
  }, []);

  const renderCoinData = (coin, priceClass, changeClass) => {
    const priceElement = document.querySelector(`.${priceClass}`);
    const changeElement = document.querySelector(`.${changeClass}`);

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`
    )
      .then((response) => response.json())
      .then((data) => {
        const price = +data[coin].usd.toFixed(2);
        const change = +data[coin].usd_24h_change.toFixed(2);

        priceElement.innerHTML = `$${price}`;
        changeElement.innerHTML = `${change > 0 ? "+" : ""}${change}%`;

        change >= 0
          ? (changeElement.style.color = "green")
          : (changeElement.style.color = "red");
      });
  };

  return (
    <>
      <div className="main">
        <div className="price-container">
          <div className="price-box">
            <div className="bitcoin-box box-styling">
              <img
                src="https://bit.ly/3vNs8vh"
                alt="bitcoin logo image"
                className="logo-size"
              />
              <div className="inner-box-styling">
                <h1 className="currency-id btc-size">BTC/USD</h1>
                <h3 className="price1 price-styling">$</h3>
                <h3 className="change1 change-styling">%</h3>
              </div>
            </div>
            <div className="ethereum-box box-styling">
              <img
                src="https://bit.ly/3kjOn6s"
                alt="ethereum logo image"
                className="logo-size"
              />
              <div className="inner-box-styling">
                <h1 className="currency-id">ETH/USD</h1>
                <h3 className="price2 price-styling">$</h3>
                <h3 className="change2 change-styling">%</h3>
              </div>
            </div>
            <div className="solana-box box-styling">
              <img
                src="https://bit.ly/3EMx8o5"
                alt="solana logo image"
                className="logo-size"
              />
              <div className="inner-box-styling">
                <h1 className="currency-id">SOL/USD</h1>
                <h3 className="price3 price-styling">$</h3>
                <h3 className="change3 change-styling">%</h3>
              </div>
            </div>
            <div className="bnb-box box-styling">
              <img
                src="https://bit.ly/3KvU0tj"
                alt="binance coin logo image"
                className="logo-size"
              />
              <div className="inner-box-styling">
                <h1 className="currency-id">BNB/USD</h1>
                <h3 className="price4 price-styling">$</h3>
                <h3 className="change4 change-styling">%</h3>
              </div>
            </div>
            <div className="ripple-box box-styling">
              <img
                src="https://bit.ly/3s2sWJW"
                alt="ripple logo image"
                className="logo-size"
              />
              <div className="inner-box-styling">
                <h1 className="currency-id">XRP/USD</h1>
                <h3 className="price5 price-styling">$</h3>
                <h3 className="change5 change-styling">%</h3>
              </div>
            </div>
            <div className="cardano-box box-styling">
              <img
                src="https://bit.ly/3BOEGPv"
                alt="cardano logo image"
                className="logo-size"
              />
              <div className="inner-box-styling">
                <h1 className="currency-id">ADA/USD</h1>
                <h3 className="price6 price-styling">$</h3>
                <h3 className="change6 change-styling">%</h3>
              </div>
            </div>
            <div className="link-box box-styling">
              <img
                src="https://bit.ly/3roXj2F"
                alt="chainlink logo image"
                className="logo-size"
              />
              <div className="inner-box-styling">
                <h1 className="currency-id">LINK/USD</h1>
                <h3 className="price7 price-styling">$</h3>
                <h3 className="change7 change-styling">%</h3>
              </div>
            </div>
            <div className="polkadot-box box-styling">
              <img
                src="https://bit.ly/3EHGBBf"
                alt="polkadot logo image"
                className="logo-size"
              />
              <div className="inner-box-styling">
                <h1 className="currency-id">DOT/USD</h1>
                <h3 className="price8 price-styling">$</h3>
                <h3 className="change8 change-styling">%</h3>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default Home;
