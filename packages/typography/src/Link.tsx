import React from 'react';
import './Link.scss';

type LinkProps = {
  href?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  [key: string]: any;
};

export const Link: React.FC<LinkProps> = ({ href, children, as, ...rest }) => {
  const Element: React.ElementType = as || 'a';
  return (
    <Element className="link" href={href} {...rest}>
      {children}
    </Element>
  );
};
