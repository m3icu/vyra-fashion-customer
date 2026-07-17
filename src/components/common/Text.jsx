/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Text
 *
 * Mission
 * Deliver every message with warmth,
 * clarity, and calm readability.
 *
 * Visitor Journey
 * Read → Feel → Continue
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import theme from "../../theme";

export default function Text({
  children,
  size = "base",
  color = "textLight",
  align = "left",
  weight = "regular",
  as: Component = "p",
  className = "",
  style = {},
}) {
  return (
    <Component
      className={className}
      style={{
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize[size],
        fontWeight: theme.typography.fontWeight[weight],
        lineHeight: theme.typography.lineHeight.relaxed,
        color: theme.colors[color],
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}