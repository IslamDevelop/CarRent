import React from "react";
import "./input.module.scss";

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
  className,
  value,
  placeholder,
  name,
  required = true,
  type = "text",
  textarea,
  onChange,
}) => {
  return (
    <div className={`field ${value ? "active" : ""}`}>
      <div className="field_label fs-14">
        {/* {placeholder} {required && <span>*</span>} */}
      </div>

      {textarea ? (
        <textarea
          className={className}
          name={name}
          defaultValue={value || ""}
          onChange={onChange}
          required
        />
      ) : (
        <input
          className={className}
          name={name}
          defaultValue={value || ""}
          type={type}
          onChange={onChange}
          required
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;
