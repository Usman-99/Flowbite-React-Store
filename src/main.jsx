import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { FormProvider } from "./context/formContext.jsx";
import App from "./App.jsx";
import { CartProvider } from "./context/cartContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <FormProvider>
      <App />
      </FormProvider>
    </CartProvider>
  </StrictMode>
);
