import { createContext, useState } from "react";
export const CarContext = createContext(null);

export const ComprasCarrito = ({ children }) => {
  const [car, setCar] = useState([]);
  return (
    <CarContext.Provider value={[car, setCar]}>{children} </CarContext.Provider>
  );
};
