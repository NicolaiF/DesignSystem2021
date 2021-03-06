import React from 'react';
import './Button.scss';

export type ButtonProps = {
  children: React.ReactNode;
  // variant?: "primary" | "secondary"
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="button">{children}</button>;
};
