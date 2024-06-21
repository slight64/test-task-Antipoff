import { ReactNode } from 'react';
import './Button.css';

export enum ButtonStyle {
  white = 'button__white',
  black = 'button__black',
}

interface ButtonInterface {
  handleClick?: () => void;
  children?: ReactNode;
  outline: ButtonStyle;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  handleClick,
  children,
  outline,
  disabled,
  className,
}: ButtonInterface) => {
  return (
    <button
      className={`button ${outline} ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
