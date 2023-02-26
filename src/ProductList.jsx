import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        const { id, image, title, price } = product;
        return (
          <div className="product-preview" key={id}>
            <img src={image} alt="" className="product-image" />
            <h2>{title}</h2>
            <p>Price: {price}</p>
            <button
              className="add-to-basket"
              onClick={() => addToCart(product)}
            >
              Add to Basket
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
