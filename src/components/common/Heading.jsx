/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Heading
 *
 * Mission
 * Introduce every section with clarity,
 * warmth, and thoughtful rhythm.
 *
 * Visitor Journey
 * Pause → Read → Continue
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { theme } from "../../theme";

export default function Heading({
  as: Tag = "h2",
  eyebrow,
  title,
  description,
  size = "section",
  align = "left",
  className = "",
  style = {},
}) {
  const alignment = {
    left: "left",
    center: "center",
    right: "right",
  };

  const textAlign = alignment[align] || alignment.left;

  const sizes = {
    hero: {
      fontSize: theme.typography.fontSize["5xl"],
      lineHeight: theme.typography.lineHeight.tight,
    },

    display: {
      fontSize: theme.typography.fontSize["5xl"],
      lineHeight: theme.typography.lineHeight.tight,
    },

    section: {
      fontSize: theme.typography.fontSize["4xl"],
      lineHeight: theme.typography.lineHeight.tight,
    },

    h3: {
      fontSize: theme.typography.fontSize["3xl"],
      lineHeight: theme.typography.lineHeight.tight,
    },

    h4: {
      fontSize: theme.typography.fontSize["2xl"],
      lineHeight: theme.typography.lineHeight.normal,
    },
  };

  const sizeStyles =
    sizes[size] || sizes.section;

  return (
    <div
      className={className}
      style={{
        textAlign,

        ...style,
      }}
    >
      {eyebrow && (
        <p
          style={{
            marginBottom: theme.spacing.md,

            fontFamily: theme.typography.fontFamily,

            fontSize: theme.typography.fontSize.sm,

            fontWeight: theme.typography.fontWeight.medium,

            letterSpacing: "0.3em",

            textTransform: "uppercase",

            color: theme.colors.textMuted,
          }}
        >
          {eyebrow}
        </p>
      )}

      {title && (
        <Tag
          style={{
            margin: 0,

            fontFamily: theme.typography.fontFamily,

            fontSize:
              size === "hero"
                ? "var(--font-size-hero)"
                : sizeStyles.fontSize,

            fontWeight: theme.typography.fontWeight.light,

            lineHeight: sizeStyles.lineHeight,

            color: theme.colors.text,
          }}
        >
          {title}
        </Tag>
      )}

      {description && (
        <p
          style={{
            marginTop: theme.spacing.lg,

            maxWidth: "640px",

            fontFamily: theme.typography.fontFamily,

            fontSize: theme.typography.fontSize.lg,

            lineHeight: theme.typography.lineHeight.relaxed,

            color: theme.colors.textLight,

            marginLeft: align === "center"
              ? "auto"
              : undefined,

            marginRight: align === "center"
              ? "auto"
              : undefined,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}