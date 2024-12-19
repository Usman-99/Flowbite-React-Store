import React, { createContext, useState } from "react";
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formDataList, setFormDataList] = useState([]);

  
  const addFormData = (newData) => {
    setFormDataList((prevData) => [...prevData, newData]);
  };

  // Delete data by index
  const deleteFormData = (indexToDelete) => {
    setFormDataList((prevData) => prevData.filter((_, index) => index !== indexToDelete));
  };

  return (
    <FormContext.Provider value={{ formDataList, addFormData, deleteFormData }}>
      {children}
    </FormContext.Provider>
  );
};
