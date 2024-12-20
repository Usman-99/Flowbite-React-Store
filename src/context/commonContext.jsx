import React, { createContext, useContext, useState } from "react";

// Create a single context for both Cart and Form
const AppContext = createContext();

// Custom hook to access the context
export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  // State for Cart
  const [cart, setCart] = useState([]);

  // Cart logic
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // State for Form Data
  const [formDataList, setFormDataList] = useState([]);

  // Form logic
  const addFormData = (newData) => {
    setFormDataList((prevData) => [...prevData, newData]);
  };

  const deleteFormData = (indexToDelete) => {
    setFormDataList((prevData) =>
      prevData.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <AppContext.Provider
      value={{
        // Cart-related values
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        // Form-related values
        formDataList,
        addFormData,
        deleteFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
