import React from "react";
import "./styles.scss";

interface IButtonSecondaryProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonSecondary: React.FC<IButtonSecondaryProps> = ({
  children,
  onClick,
}) => {
  return (
    <button className="button-secondary-fj" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
