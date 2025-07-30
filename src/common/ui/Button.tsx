import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string; 
  icon?: IconType;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  color = "blue",
  icon: Icon,
  disabled = false,
}) => {
  const colorClasses: Record<string, string> = {
    blue: "text-blue-700 hover:text-blue-800 cursor-pointer",
    green: "bg-green-600 py-1 text-white hover:bg-green-700 cursor-pointer",
  };
  return (
    <button
      className={`flex items-center text-base gap-1 px-5 mt-4 rounded transition-colors duration-200 
      ${colorClasses[color]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={15} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;

