import React from 'react';
import './Heading1.scss';

export type Heading1Props = {
  children: React.ReactNode;
};

export const Heading1: React.FC<Heading1Props> = ({ children }) => {
  return <h1 className="heading">{children}</h1>;
};
