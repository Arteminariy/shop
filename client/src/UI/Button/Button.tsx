import React, { FC } from 'react';
import './Button.css';

interface ButtonProps {
  title?: string,
}

const Button: FC<ButtonProps> = ({title}) => (
  <div className="Button" data-testid="Button">
    {title}
  </div>
);

export default Button;
