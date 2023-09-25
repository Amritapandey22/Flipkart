// ProductItem.js
import React from "react";

function ProductItem({
  product,
  onSaveButtonClick,
  isSaved,
  onActionButtonClick
}) {
  const buttonLabel = isSaved ? "Move to Cart" : "Save for Later";

  const handleButtonClick = () => {
    console.log("enter");
    if (isSaved) {
      // If the product is in the "Save for Later" section, move it to the "Product Section"
      onActionButtonClick("moveToProduct", product.id);
    } else {
      // If the product is in the "Product Section", move it to the "Save for Later" section
      onActionButtonClick("moveToSaved", product.id);
    }
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.price}</div>
        <button className="save" onClick={handleButtonClick}>
          {buttonLabel}
        </button>
      </div>
      <div className="delivery-date">{product.deliveryDate}</div>
    </div>
  );
}

export default ProductItem;
