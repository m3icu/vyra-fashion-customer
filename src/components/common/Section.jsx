import theme from "../../theme";
export default function Section({
  as: Component = "section",
  children,
  className = "",
}) {
  return (
    <Component
      className={`
        ${theme.layout.sectionPadding}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}