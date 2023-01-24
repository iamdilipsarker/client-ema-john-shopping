import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, storedCart } = useLoaderData();
  const [cart, setCart] = useState(storedCart);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h3>
            No items for review, Please
            <Link to="/"> Shop more</Link>
          </h3>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
