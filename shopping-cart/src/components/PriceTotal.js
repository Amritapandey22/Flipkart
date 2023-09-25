import React from "react";

const PriceTotal = ({ totalLength, totalProductPrice }) => {
  return (
    <div className="price-total">
      <h3>PRICE DETAILS</h3>
      <hr />
      <p>
        Price ({totalLength} items) :{" "}
        <span>{totalProductPrice.toFixed(2)}</span>
      </p>
      <p>
        {" "}
        Delivery Charges : <span>Free</span>{" "}
      </p>
      <hr />
      <strong>
        <p>
          Total Amount : <span>{totalProductPrice.toFixed(2)}</span>
        </p>
      </strong>
    </div>
  );
};

export default PriceTotal;
