import { theme } from "../../theme/theme";

export default function Container({
  children,
  className = "",
  style = {},
  ...props
}) {
  return (
    <div
      className={`
        w-full
        mx-auto
        ${theme.layout.containerPadding}
        ${className}
      `}
      style={{
        maxWidth: theme.layout.maxWidth,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

Container.displayName = "Container";