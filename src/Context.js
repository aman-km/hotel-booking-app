import React, { createContext, useState } from 'react';

export const context = createContext();


export const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  const [selectedHotel, setSelectedHotel] = useState(null);

  
 
  return (
    <context.Provider value={{ hotels, setHotels, selectedHotel, setSelectedHotel}}>
      {children}
    </context.Provider>
  );
};
