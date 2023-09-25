import React from "react";
import ProductItem from "./ProductItem";

const ProductSection = ({ products, saveForLater }) => {
  return (
    <div className="product-section">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          // onSaveForLaterClick={() => saveForLater(product.id)}
          isSaved={false}
          onActionButtonClick={(actionType) =>
            saveForLater(product.id, actionType)
          } // Pass the actionType here
        />
      ))}
    </div>
  );
};
export default ProductSection;
