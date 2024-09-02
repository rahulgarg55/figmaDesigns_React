import React from 'react';
import Navbar from './Navbar';
import BasketItem from './BasketItem';
import OrderSummary from './OrderSummary';

const BasketPage = () => {
  const items = [
    {
      id: 1,
      name: 'Heirloom tomato',
      price: 5.99,
      weight: 1,
      image: 'url-to-image', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Organic ginger',
      price: 12.99,
      weight: 0.5,
      image: 'url-to-image', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Sweet onion',
      price: 2.99,
      weight: 5,
      image: 'url-to-image', // Replace with actual image URL
    },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.weight, 0);
  const shipping = 3.99;
  const tax = 2.00;

  return (
    <div className="basket-page">
      <Navbar />
      <div className="basket-container">
        <div className="basket-items">
          <h1>Basket</h1>
          <p>{items.length} items</p>
          {items.map(item => (
            <BasketItem key={item.id} item={item} />
          ))}
        </div>
        <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} />
      </div>
    </div>
  );
};

export default BasketPage;
