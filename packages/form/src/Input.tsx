import React from 'react';
import './Input.scss';

export type InputProps = {
  value?: string;
  label: string;
  area?: boolean;
};

export const Input: React.FC<InputProps> = ({ value, label, area = false }) => {
  return (
    <label className="input-wrapper">
      <div className="input-label">{label}</div>
      {area ? (
        <textarea className="input textarea" value={value} />
      ) : (
        <input className="input textfield" value={value} />
      )}
    </label>
  );
};
