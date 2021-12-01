import React, { useEffect, useState } from 'react';
import './App.css';
import Card from "./components/Card";
function App() {

  const [coins, setcoins] = useState([]);
  const [filter, setFilter] = useState("");


  const store = (e) => {
    const search = e.target.value;
    setFilter(search);

  }
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false")
      .then(response => response.json())
      .then(data => { setcoins(data) })
  }, [])


  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar__logo"><i className="fas fa-coins"></i>RypTrac</div>
        <input onChange={store} type="text" className="navbar__search" placeholder="Search"></input>

      </div>
      <div className="coins">
        {filteredCoins.map((coin) => {
          return (
            <Card
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />)
        })}
      </div>
    </div >
  );
}

export default App;
