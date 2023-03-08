import React from "react";
import { toast, ToastContainer } from "react-toastify";
import ProductList from "./ProductList";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="featured-list">
      <div className="featured-heading">
        <h2>Cart Items</h2>
      </div>
      <div className="product-list">
        {cart.length !== 0 ? (
          cart.map((product) => {
            const { id, image, title, price } = product;
            return (
              <div className="product-preview" key={id}>
                <img src={image} alt="" className="product-image" />
                <h2>{title}</h2>
                <p>Price: {price}</p>
                <button
                  className="remove-button"
                  onClick={() => {
                    toast.error("item removed!");
                    removeFromCart(id)}}
                >
                  Remove from Basket
                </button>
              </div>
            );
          })
        ) : (
          <h2>Cart is Empty:(</h2>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
