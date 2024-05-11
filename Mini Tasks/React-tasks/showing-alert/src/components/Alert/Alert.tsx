import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onExitBtn: () => void;
}

const Alert = ({ children, onExitBtn }: AlertProps) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onExitBtn}
      ></button>
    </div>
  );
};

export default Alert;
