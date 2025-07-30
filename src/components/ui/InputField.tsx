import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Button from "./Button";

interface InputFieldProps {
  description: string;
  placeholder?: string;
  onValueChange?: (value: string) => void;
}

const InputField = ({
  description,
  placeholder,
  onValueChange,
}: InputFieldProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div> 
      <div className="flex items-center gap-2 mt-4">
        <label className="font-medium w-35">{description}</label>
        <input
          type="text"
          placeholder={placeholder || "Escribe aquí..."}
          value={inputValue}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full text-xs placeholder-gray-300"
        />
      </div>
    </div>
  );
};

export default InputField;
