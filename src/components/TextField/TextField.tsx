import * as React from "react";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

interface InputTextFieldProps {
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
  TextFieldVariants?: "outlined" | "filled" ;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
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
  TextFieldVariants
}) => {
  return (
    <>
    <div style={{margin:"5px",maxHeight:"70px",minHeight:"70px"}} >
      <TextField
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
      </div>
    </>
  );
};

export default InputTextField;
