import React from "react";
import "./styles.scss";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  type = "primary",
  className = "",
}) => {
  return (
    <button
      className={`button-fj button-fj--${type} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
