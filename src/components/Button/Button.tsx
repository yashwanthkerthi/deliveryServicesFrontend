import React from "react";
import Button from "@mui/material/Button";

interface ReusableButtonProps {
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  style?: React.CSSProperties;
  variant?: "text" | "outlined" | "contained";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  buttonName?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  component?: React.ElementType;
  id?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  size,
  disabled,
  style,
  variant,
  onClick,
  type,
  className,
  buttonName,
  startIcon,
  component,
  endIcon,
  id,
}) => {
  return (
    <Button
      type={type}
      size={size}
      id={id}
      disabled={disabled}
      style={style}
      variant={variant}
      onClick={onClick}
      className={className}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {buttonName}
    </Button>
  );
};

export default ReusableButton;
