import { Button } from "@mui/material";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductById,
  total,
  navigate,
}) => {
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.price}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(item.id)}
                >
                  Delete
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Cart Description:</h2>
          <h3>Quantity of Products: </h3>
          <h3>Total Price: {total}</h3>
          <h3>Discount: </h3>
          <h3>Final Price: </h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button variant="contained" onClick={() => navigate("/checkout")}>
                Finish the buy.
              </Button>
              <Button onClick={clearCartWithAlert} variant="contained">
                Clean Cart
              </Button>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Add Products</Button>
            </Link>
          )}

          <h1>The carts total is: ${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
