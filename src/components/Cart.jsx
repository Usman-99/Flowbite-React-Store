import React from "react";
import { useCart } from "../context/cartContext";
import { FaTrashAlt } from "react-icons/fa"; // Import an icon for removing items

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-10 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg mb-[50%] md:mb-[80%] lg:mb-[75%] xl:mb-[15%]" >Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-5 flex justify-between items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-sm lg:text-xl xl:text-xl font-bold mx-5 mt-3">{item.title}</h3>
                <p className="text-gray-700">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="bg-gray-300 px-2 rounded-l"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="bg-gray-300 px-2 rounded-r"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 ml-4"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
          <div className="text-right">
            <h3 className="text-2xl font-bold">Total: ${calculateTotalPrice()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
