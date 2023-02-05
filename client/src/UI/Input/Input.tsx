import React, { FC } from 'react';
import './Input.css';

interface InputProps { }

const Input: FC<InputProps> = () => (
  <div className="input" data-testid="Input">
    Input Component
  </div>
);

export default Input;
