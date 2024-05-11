import React, { ReactNode } from "react";

type ButtonColor = "primary" | "secondary" | "warning" | "danger";

interface BtnProps {
  color?: ButtonColor;
  onClickBtn: () => void;
  children: ReactNode;
}

const Button = ({ children, onClickBtn, color = "primary" }: BtnProps) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClickBtn}>
      {children}
    </button>
  );
};

export default Button;
