import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        const { id, image, title, price } = product;
        return (
          <div className="product-preview" key={id}>
            <img src={image} alt="" className="product-image" />
            <div className="prduct">
              <h2>{title}</h2>
              <p>Price: {price}</p>
              <span
                className="add-to-basket"
                onClick={() => addToCart(product)}
              >
              <BsFillCartPlusFill/>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
