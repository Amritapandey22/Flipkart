import React from "react";
import ProductItem from "./ProductItem"; // Import the ProductItem component

const SaveForLater = ({ savedProducts, moveToProduct }) => {
  const saveForLaterSize = savedProducts.length;

  return (
    <div className="save-for-later">
      {saveForLaterSize > 0 && <h2>Saved for later ({saveForLaterSize})</h2>}
      {savedProducts.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          isSaved={true}
          onActionButtonClick={(actionType) =>
            moveToProduct(product.id, actionType)
          } // Pass the actionType here
        />
      ))}
    </div>
  );
};

export default SaveForLater;
