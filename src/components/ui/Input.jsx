/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Input
 *
 * A quiet space for the visitor's thoughts.
 *
 * Clear.
 * Calm.
 * Effortless.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { theme } from "../../theme";

export default function Input({
  type = "text",
  size = theme.formControl.defaultSize,
  value,
  defaultValue,
  placeholder,
  name,
  id,
  disabled = false,
  required = false,
  error = false,
  success = false,
  onChange,
  className = "",
  style = {},
  ...props
}) {
  const formControl = theme.formControl;
  const sizeStyles = formControl.sizes[size];

  const state = disabled
    ? formControl.disabled
    : error
      ? formControl.error
      : success
        ? formControl.success
        : null;

  const inputStyle = {
    width: "100%",

    height: sizeStyles.height,

    padding: `0 ${sizeStyles.paddingX}`,

    fontFamily: formControl.fontFamily,

    fontSize: sizeStyles.fontSize,

    fontWeight: formControl.fontWeight,

    color: state?.text || formControl.colors.text,

    backgroundColor:
      state?.background || formControl.colors.background,

    border: `1px solid ${
      state?.border || formControl.colors.border
    }`,

    borderRadius: formControl.radius,

    transition: formControl.transition,

    outline: "none",

    opacity: disabled
      ? formControl.disabled.opacity
      : 1,

    ...style,
  };

  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      onChange={onChange}
      className={className}
      style={inputStyle}
      {...props}
    />
  );
}