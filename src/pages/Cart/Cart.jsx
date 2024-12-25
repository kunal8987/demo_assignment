import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Function to retrieve cart data from local storage
    const getCartData = () => {
      let cart = localStorage.getItem("cart");
      cart = cart ? JSON.parse(cart) : [];

      // Calculate total price
      const total = cart.reduce((acc, item) => acc + item.price, 0);

      setCartItems(cart);
      setTotalPrice(total);
    };

    // Fetch cart data on component mount
    getCartData();
  }, []);

  // Function to remove item from cart
  const removeFromCart = (id) => {
    let cart = localStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];

    // Filter out the item to be removed
    cart = cart.filter((item) => item.id !== id);

    // Update local storage and state
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);

    // Recalculate total price
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid gap-4">
        {cartItems.map((item, index) => (
          <div key={index} className="card bg-base-100 my-3 shadow-xl p-4">
            <img
              src={item.image}
              className="w-40 h-40 object-cover"
              alt="Product Image"
            />
            <h2 className="card-title">Title: {item.title}</h2>
            <p>Price: ${item.price}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="btn btn-danger mt-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-gray-200 rounded">
        <h2 className="text-xl font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default CartPage;
