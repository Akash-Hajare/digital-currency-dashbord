import React, { useState } from "react";

const DisplayDate = ({ response }) => {
  let displayObject = {};

  return (
    <div>
      
      <ul>
        {response &&
          response.map((coin, index) => (
            <li key={index} >
              <div className="image-container container">
                <img src={coin.image} alt={coin.name} />
                <p>{coin.name}</p>
              </div>

              <div className="symbol_container container">
                <p>
                {coin.symbol.toUpperCase()}
                </p>
              </div>

              <div className="price_container container">
                <p>${coin.current_price}</p>
                <p>${coin.total_volume}</p>
              </div>

              <div className="percentage_container container">
                <p style={{color:coin.price_change_percentage_24h >=0 ? 'green':'red'}}>
                    {coin.price_change_percentage_24h}
                    </p>
                <p>Mkt Cap: $ {coin.market_cap}</p>
              </div>
              
            </li>
           
          ))
         
          }
      </ul>
    </div>
  );
};

export default DisplayDate;
