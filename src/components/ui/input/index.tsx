import React, { FC } from "react";
import "./styles.scss";

interface IInputProps {
  className?: string;
  placeholder: string;
}

const Input: FC<IInputProps> = ({ placeholder, className }) => {
  return (
    <div className="input">
      <input placeholder={placeholder} />
    </div>
  );
};

export default Input;
