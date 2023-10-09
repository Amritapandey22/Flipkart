import React from "react";

const PriceTotal = ({ totalLength, totalProductPrice }) => {
  return (
    <section className="price-total-box">
      <div className="price-detail-heading">
        <h3>PRICE DETAILS</h3>
      </div>
      <div className="price-details">
        <div className="price-detail-description">
          <p>Price ({totalLength} items) </p>
          <p>Discount</p>
          <p>Delivery charges </p>
        </div>
        <div className="price-detail-description-price">
          <p>₹{totalProductPrice.toFixed(2)}</p>
          <p> 0</p>
          <p style={{ color: "#388E3c" }}> Free </p>
        </div>
      </div>

      <div className="price-total-amount-box">
        <div className="total-amount-text">
          <p>Total Amount</p>
        </div>
        <div className="total-amount-price">
          <p>{totalProductPrice.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
};

export default PriceTotal;
