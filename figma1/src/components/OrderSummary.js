import React from 'react';

const OrderSummary = ({ subtotal, shipping, tax }) => {
  const total = subtotal + shipping + tax;
  return (
    <div className="order-summary">
      <h2>Order summary</h2>
      <div className="summary-item">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="continue-payment">Continue to payment</button>
    </div>
  );
};

export default OrderSummary;
