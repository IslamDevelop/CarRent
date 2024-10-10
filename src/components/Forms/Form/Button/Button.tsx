import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  to?: string;
  children: React.ReactNode;
  variant?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?:string 
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  to,
  children,
  variant = "solid ",
  onClick,
}) => { 
  const style = {
    width: fullWidth ? "100%" : undefined,
  };
  return (
    <>
      {to ? (
        <Link to={to} className={`btn ${variant || ""}`}>
          {children}
        </Link>
      ) : (
        <button
          style={style}
          type={type && type}
          className={`btn ${variant || ""}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
