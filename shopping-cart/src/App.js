import React, { useState, useEffect} from "react";
import axios from "axios";
import "./styles.css";
import Header from "./components/Header";
import PriceTotal from "./components/PriceTotal";
import ProductSection from "./components/ProductSection";
import SaveForLater from "./components/SaveForLater";

function App() {
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  console.log(products);
  const [savedProducts, setSavedProducts] = useState([]);

  const handleActionButtonClick = (actionType, productId) => {
    if (actionType === "moveToProduct") {
      const productToMove = savedProducts.find(
        (product) => product.id === productId
      );
      if (productToMove) {
        setSavedProducts((prevSavedProducts) =>
          prevSavedProducts.filter((product) => product.id !== productId)
        );
        setProducts((prevProducts) => [...prevProducts, productToMove]);
      }
    } else if (actionType === "moveToSaved") {
      const productToMove = products.find(
        (product) => product.id === productId
      );
      if (productToMove) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
        setSavedProducts((prevSavedProducts) => [
          ...prevSavedProducts,
          productToMove
        ]);
      }
    }
  };

  const totalProductPrice = 0;
  products.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <main>
          <ProductSection
            products={products}
            saveForLater={(productId) =>
              handleActionButtonClick("moveToSaved", productId)
            }
          />
          <SaveForLater
            savedProducts={savedProducts}
            moveToProduct={(productId) =>
              handleActionButtonClick("moveToProduct", productId)
            }
          />
        </main>
        <aside>
          <PriceTotal
            totalLength={0}
            totalProductPrice={totalProductPrice}
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
