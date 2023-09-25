// App.js
import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import PriceTotal from "./components/PriceTotal";
import ProductSection from "./components/ProductSection";
import SaveForLater from "./components/SaveForLater";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      status: "SAVE FOR LATER",
      price: 10.99,
      deliveryDate: "Delivery: Sep 30",
      image: "https://images.meesho.com/images/products/53242933/lxcn8_512.webp"
    },
    {
      id: 2,

      name: "Product 1",
      status: "SAVE FOR LATER",

      price: 10.99,
      deliveryDate: "Delivery: Sep 30",
      image:
        "https://images.meesho.com/images/products/129549736/1vphn_512.webp"
    },
    {
      id: 3,

      name: "Product 1",
      status: "SAVE FOR LATER",

      price: 10.99,
      deliveryDate: "Delivery: Sep 30",
      image:
        "https://images.ctfassets.net/5de70he6op10/wpXwHJpgoPX9E5YuOUwUc/e4eda3ff58b02d98c2165ece9b14ba82/527950270-beachwedding_topper4.jpg?w=600&q=80&fm=jpg&fl=progressive"
    },
    {
      id: 4,

      name: "Product 1",
      status: "SAVE FOR LATER",

      price: 10.99,
      deliveryDate: "Delivery: Sep 30",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
    },
    {
      id: 5,

      name: "Product 1",
      status: "SAVE FOR LATER",

      price: 10.99,
      deliveryDate: "Delivery: Sep 30",
      image:
        "https://www.sherrihill.com/dw/image/v2/BDBR_PRD/on/demandware.static/-/Sites-master-catalog-sherrihill/default/dw427e809c/images/Sherri-Hill-55345-fuchsia-51753.jpg?sw=630&sh=966"
    },
    {
      id: 6,

      name: "Product 1",
      status: "SAVE FOR LATER",

      price: 10.99,
      deliveryDate: "Delivery: Sep 30",
      image:
        "https://www.sherrihill.com/dw/image/v2/BDBR_PRD/on/demandware.static/-/Sites-master-catalog-sherrihill/default/dw427e809c/images/Sherri-Hill-55345-fuchsia-51753.jpg?sw=630&sh=966"
    },
    {
      id: 7,

      name: "Product 1",
      status: "SAVE FOR LATER",

      price: 10.99,
      deliveryDate: "Delivery: Sep 30",
      image:
        "https://www.sherrihill.com/dw/image/v2/BDBR_PRD/on/demandware.static/-/Sites-master-catalog-sherrihill/default/dw427e809c/images/Sherri-Hill-55345-fuchsia-51753.jpg?sw=630&sh=966"
    },
    {
      id: 8,

      name: "Product 1",
      status: "SAVE FOR LATER",

      price: 10.99,
      deliveryDate: "Delivery: Sep 30",
      image:
        "https://www.sherrihill.com/dw/image/v2/BDBR_PRD/on/demandware.static/-/Sites-master-catalog-sherrihill/default/dw427e809c/images/Sherri-Hill-55345-fuchsia-51753.jpg?sw=630&sh=966"
    },
    {
      id: 9,

      name: "Product 1",
      status: "SAVE FOR LATER",

      price: 10.99,
      deliveryDate: "Delivery: Sep 30",
      image:
        "https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg?q=10&h=200" // Replace with the actual image URL
    }
  ]);

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

  const totalProductPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <div className="left-section">
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
        </div>
        <div className="right-section">
          <PriceTotal
            totalLength={products.length}
            totalProductPrice={totalProductPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
