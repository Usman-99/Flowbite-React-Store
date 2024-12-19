import React from "react";
import { useCart } from "../context/cartContext";
import { FaTrashAlt } from "react-icons/fa";
import CustomButton from "../components/Buttons";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, change) => {
    const item = cart.find((item) => item.id === id);
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto pt-4 py-10 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg mb-10">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 mb-10">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-5 flex flex-col md:flex-row justify-between items-center"
            >
              {/* Product Image on the left */}
              <div className="flex justify-center md:justify-start md:mr-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Product Details on the right */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-sm lg:text-xl xl:text-xl font-bold mx-5 mt-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">${item.price}</p>
              </div>

              {/* Quantity Controls and Remove Button */}
              <div className="flex items-center mt-4 md:mt-0">
                <CustomButton
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-gray-300 text-black hover:text-white"
                  Text={"-"}
                />
                <span className="px-4">{item.quantity}</span>
                <CustomButton
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-gray-300 text-black hover:text-white"
                  Text={"+"}
                />
                <CustomButton
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 ml-4 bg-white bg-gradient-to-br from-white to-white"
               
                  Text={<FaTrashAlt />}>
                </CustomButton>
              </div>
            </div>
          ))}
          <div className="text-right mr-2">
            <h3 className="text-2xl font-bold">Total: ${calculateTotalPrice()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
