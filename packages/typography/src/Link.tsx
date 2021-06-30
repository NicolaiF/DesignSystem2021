import React from 'react';
import './Link.scss';

type LinkProps = {
  href?: string;
  children: React.ReactNode;
};

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};
