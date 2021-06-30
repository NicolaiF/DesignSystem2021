import React from 'react';
import './Paragraph.scss';

export type ParagraphProps = {
  children?: React.ReactNode;
};

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className="paragraph">{children}</p>;
};
