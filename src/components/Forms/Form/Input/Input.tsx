import React from "react";
import styles from "./input.module.scss";

interface InputProps {
  className?: string;
  value?: string | number;
  placeholder?: string;
  name?: string;
  type?: string;
  required?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  className,
  onChange,
  value,
  required = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${className || ""}`}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
};

export default Input;
