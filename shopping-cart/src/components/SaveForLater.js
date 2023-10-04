import React from "react";
import ProductItem from "./ProductItem"; 

const SaveForLater = ({ savedProducts, moveToProduct }) => {
  const saveForLaterSize = savedProducts.length;

  return (
    <section className="save-for-later-section">
      {saveForLaterSize > 0 && <h2>Saved for later ({saveForLaterSize})</h2>}
      {savedProducts.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          isSaved={true}
          onActionButtonClick={(actionType) =>
            moveToProduct(product.id, actionType)
          } 
        />
      ))}
    </section>
  );
};

export default SaveForLater;
