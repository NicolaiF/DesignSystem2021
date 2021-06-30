import React from 'react';
import './Input.scss';

export type InputProps = {
  value?: string;
  label: string;
  area?: boolean;
  [key: string]: any;
};

export const Input: React.FC<InputProps> = ({
  value,
  label,
  area = false,
  ...rest
}) => {
  return (
    <label className="input-wrapper">
      <div className="input-label">{label}</div>
      {area ? (
        <textarea className="input textarea" value={value} {...rest} />
      ) : (
        <input className="input textfield" value={value} {...rest} />
      )}
    </label>
  );
};
