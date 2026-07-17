/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Button
 *
 * A gentle invitation to continue.
 *
 * Never demanding.
 * Never rushing.
 *
 * Every interaction should reduce hesitation
 * and make the next step feel effortless.
 *
 * Mission
 * Invite the visitor to continue.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { useState } from "react";
import { theme } from "../../theme";

export default function Button({
  children,
  variant = theme.button.defaultVariant,
  size = theme.button.defaultSize,
  type = "button",
  disabled = false,
  fullWidth = false,
  onClick,
  className = "",
  style = {},
  ...props
}) {
  const [interaction, setInteraction] = useState("idle");

  const buttonTheme = theme.button;

  const variantStyles =
    buttonTheme.variants[variant] ||
    buttonTheme.variants[buttonTheme.defaultVariant];

  const sizeStyles =
    buttonTheme.sizes[size] ||
    buttonTheme.sizes[buttonTheme.defaultSize];
	
  const interactionStyles = disabled
    ? variantStyles.disabled
    : interaction === "active"
      ? variantStyles.active
      : interaction === "hover"
        ? variantStyles.hover
        : variantStyles;

  const isFocused = interaction === "focus";

  const baseShadow =
    interactionStyles.shadow || "none";

  const buttonStyle = {
    display: "inline-flex",

    alignItems: "center",

    justifyContent: "center",

    gap: buttonTheme.iconGap,

    width: fullWidth ? "100%" : "auto",

    height: sizeStyles.height,

    padding: `0 ${sizeStyles.paddingX}`,

    fontFamily: theme.typography.fontFamily,

    fontSize: sizeStyles.fontSize,

    fontWeight: buttonTheme.fontWeight,

    borderRadius: buttonTheme.radius,

    borderWidth: buttonTheme.borderWidth,

    borderStyle: buttonTheme.borderStyle,

    borderColor: interactionStyles.colors.border,

    boxShadow:  isFocused
      ? `${baseShadow}, ${buttonTheme.focusRing}`
      : baseShadow,

    backgroundColor: interactionStyles.colors.background,

    color: interactionStyles.colors.text,

    transition: buttonTheme.transition,

    cursor: disabled ? "not-allowed" : "pointer",

    opacity: disabled
      ? buttonTheme.disabledOpacity
      : 1,

    outline: "none",

    ...style,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={buttonStyle}
      onMouseEnter={() => setInteraction("hover")}
      onMouseLeave={() => setInteraction("idle")}
      onMouseDown={() => setInteraction("active")}
      onMouseUp={() => setInteraction("hover")}
      {...props}
    >
      {children}
    </button>
  );
}