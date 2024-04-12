import React, { FunctionComponent } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface Option {
  key?: string | number;
  value?: string;
  title?: string;
}

interface ReusableDropdownProps {
  name?: string;
  label?: string;
  value?: string;
  size?: string | undefined;
  error?: boolean;
  onChange: (event: SelectChangeEvent<string>) => void;
  Allvalue?: boolean;
  style?: React.CSSProperties;
  placeholder: string;
  options: Option[];
  menustyle?: React.CSSProperties;
  displayEmpty?: boolean;
  disabled?: boolean;
  helperText?: string | undefined | boolean;
  className?: string;
  labelClasses?: string;
  id?: string | number;
}

const ReusableDropdown: FunctionComponent<ReusableDropdownProps> = ({
  name,
  label,
  value,
  size,
  error,
  onChange,
  Allvalue,
  style,
  placeholder,
  options,
  menustyle,
  displayEmpty,
  disabled,
  helperText,
  className,
  labelClasses,
  id,
}: ReusableDropdownProps) => {
  return (
    <>
      <Select
        name={name}
        displayEmpty={displayEmpty}
        value={value}
        // onBlur={onBlur}
        // size={size}
        onChange={onChange}
        style={style}
        className={className}
        error={error}
        disabled={disabled}
        renderValue={
          value !== "" || value === undefined
            ? undefined
            : () => <div style={{ color: "grey" }}>{placeholder}</div>
        }
      >
        {options?.length > 0 ? (
          options.map((item) => (
            <MenuItem key={item.key} value={item.value}>
              {item.value}
            </MenuItem>
          ))
        ) : (
          <MenuItem value="" style={menustyle}>
            None
          </MenuItem>
        )}
      </Select>
      {error && helperText && (
        <FormHelperText style={{ color: "#DC2626" }}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default ReusableDropdown;
