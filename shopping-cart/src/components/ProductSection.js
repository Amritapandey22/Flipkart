import React from "react";
import ProductItem from "./ProductItem";

const ProductSection = ({ products, saveForLater }) => {
  return (
    <section className="product-section">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          isSaved={false}
          onActionButtonClick={(actionType) =>
            saveForLater(product.id, actionType)
          } 
        />
      ))}
    </section>
  );
};
export default ProductSection;
