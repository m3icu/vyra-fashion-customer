import theme from "../../../theme";

export default function BrandStorySignature() {
  return (
    <div
      style={{
        marginTop: theme.spacing["4xl"],
        display: "flex",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: theme.typography.fontSize.sm,
          color: theme.colors.primary,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          opacity: .7,
        }}
      >
        Build with Heart.
      </span>
    </div>
  );
}