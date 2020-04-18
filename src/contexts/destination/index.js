import React, { useEffect, useState, createContext } from 'react';

export const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
  return (
    <DestinationContext.Provider value={'/'}>
      {children}
    </DestinationContext.Provider>
  )
}