import React, { useEffect, useState } from "react";

import axios from "axios";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./main.modules.css";

function Main(props) {
  let [coins, setCoins] = useState([]);
  let [coinsResult, setCoinsResult] = useState([0, 15]);
  let [nowPage, setNowPage] = useState(1);

  useEffect(() => {
    props.setLoadingModal(true);
    axios
      .get("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
      .then((result) => {
        setCoins(result.data.slice(coinsResult[0], coinsResult[1]));
        props.setLoadingModal(false);
      })
      .catch(() => {
        alert("데이터를 못불러옴 !");
        props.setLoadingModal(false);
      });
  }, [coinsResult]);

  return (
    <div className="main-container">
      <div>
        <table>
          <thead>
            <tr>
              <th>순위</th>
              <th>코인</th>
              <th>약어</th>
              <th>가격</th>
              <th>시가총액</th>
              <th>거래량(24h)</th>
              <th>가격변동(24h)</th>
              <th>가격변동(7Day)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, i) => {
              return (
                <tr key={i}>
                  <td>{coin.rank}</td>
                  <td>{coin.name}</td>
                  <td>{coin.symbol}</td>
                  <td>{coin.quotes.KRW.price.toFixed(2).toLocaleString()}원</td>
                  <td>
                    {(coin.quotes.KRW.market_cap / 1000000000000).toFixed(2)}조
                  </td>
                  <td>
                    {(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}조
                  </td>
                  <td>{coin.quotes.KRW.percent_change_24h.toFixed(2)}%</td>
                  <td>{coin.quotes.KRW.percent_change_7d.toFixed(2)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="button-list">
          {nowPage === 1 ? null : (
            <button
              onClick={() => {
                let newCoinsResult = coinsResult.map(
                  (coinsResult) => coinsResult - 15
                );
                setCoinsResult(newCoinsResult);
                setNowPage(nowPage - 1);
              }}
            >
              <FaChevronLeft />
            </button>
          )}

          <span>{nowPage}</span>
          <button
            onClick={() => {
              let newCoinsResult = coinsResult.map(
                (coinsResult) => coinsResult + 15
              );
              setCoinsResult(newCoinsResult);
              setNowPage(nowPage + 1);
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
