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
<<<<<<< HEAD
  required = false,
=======
>>>>>>> f05b1e6cd33b74c489ee3886f1079e7f41a3c8e3
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
<<<<<<< HEAD
      className={`${styles.input} ${className || ""}`}
      onChange={onChange}
      value={value}
      required={required}
=======
      className={`${styles.input} ${className || ""}`} // Добавляем стили и дополнительные классы
      onChange={onChange}
      value={value}
>>>>>>> f05b1e6cd33b74c489ee3886f1079e7f41a3c8e3
    />
  );
};

export default Input;
