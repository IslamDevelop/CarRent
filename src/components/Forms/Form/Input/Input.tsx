import React from "react";
import styles from "./input.module.scss";

interface InputProps {
  className?: string;
  value?: string | number;
  placeholder?: string;
  name?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  className,
  onChange,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${className || ""}`} // Добавляем стили и дополнительные классы
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
