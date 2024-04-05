import * as React from "react";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";

interface TextFieldProps {
  id?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  required?: boolean;
  className?: string;
  style?: object;
  error?: boolean;
  errorMessage?: string | boolean;
  autoComplete?: string | boolean;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  placeholder,
  label,
  onChange,
  type,
  value,
  required,
  className,
  style,
  error,
  errorMessage,
  autoComplete,
  disabled,
}) => {
  return (
    <>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        required={required}
        className={className}
        style={style}
        autoComplete="disabled"
        
      />
      {value==="" ? 
      <>
      {(error && errorMessage)   &&  (
        <FormHelperText>
          <p style={{ color: "#DC2626" }}> {errorMessage}</p>
        </FormHelperText>
      )}
      </> : ""}
    </>
  );
};

export default TextField;
