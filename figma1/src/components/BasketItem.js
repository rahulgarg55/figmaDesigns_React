import React from 'react';

const BasketItem = ({item})=>{
    return (
        <div className = "basket-item">
            <img src = {item.image} alt ={item.name} />
            <div className= "item-details">
                <h3>{item.name}</h3>
                <p>{item.price} /lb</p>
                <div className = "item-weight">
                    <input type= "number" value = {item.weight} readOnly />
                    <span>lb</span>

                </div>
            </div>
            <div className ="item-price">
                <p>${(item.price*item.weight).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default BasketItem;