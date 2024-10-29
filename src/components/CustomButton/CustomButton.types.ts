import React, { ReactNode } from 'react';
export interface CustomButtonProps {
    onClick: () => void;
    typeBtn?: "button" | "submit" | "reset"; 
    children: ReactNode;
  }