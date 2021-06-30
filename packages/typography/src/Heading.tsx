import React from 'react';
import './Heading.scss';

export type HeadingProps = {
  children: React.ReactNode;
};

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <h1 className="heading">{children}</h1>;
};
