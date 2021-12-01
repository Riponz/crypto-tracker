import React from 'react'
import "./Card.css";

function Card({ name, price, symbol, marketcap, volume, image, priceChange }) {

    return (
        <div className="card">
            <img className="logo" src={image} />
            <div className="namewrap">
                <h1 className="name" >{name}</h1>
                <p className="symbol">{symbol}</p>
            </div>
            <p className="price">${price}</p>
            <p className="marketcap">Market Cap : ${marketcap}</p>
            <p className="volume">Volume (24H) : {volume}</p>
            {
                priceChange < 0 ?
                    <div className="downtrend">
                        <i className="fas fa-angle-down fa-2x"></i>
                        <p className="priceChange">{priceChange.toFixed(2)}%</p>
                    </div> :
                    <div className="uptrend">
                        <i className="fas fa-angle-up fa-2x"></i>
                        <p className="priceChange">{priceChange.toFixed(2)}%</p>
                    </div>
            }
        </div >
    )
}

export default Card
