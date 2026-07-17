/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Component : CollectionCard
 * --------------------------------------------------------
 *
 * Mission
 * Introduce meaningful collections through
 * calm imagery and thoughtful storytelling.
 *
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { Link } from "react-router-dom";
import theme from "../../theme";

export default function CollectionCard({ collection }) {
  return (
    <Link
      to={`/collections/${collection.slug}`}
      style={{
        textDecoration: "none",
        color: theme.colors.text,
      }}
      className="group block"
    >
      <div
        style={{
          background: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: theme.radius.xl,
          overflow: "hidden",
          transition: `all ${theme.transition.normal} ${theme.transition.easing}`,
        }}
      >
        {/* Image Placeholder */}
        <div
          style={{
            background: theme.colors.surfaceAlt,
            height: "340px",
          }}
        />

        <div
          style={{
            padding: theme.spacing.xl,
          }}
        >
          <h3
            style={{
              fontSize: theme.typography.fontSize.xl,
              fontWeight: theme.typography.fontWeight.medium,
              marginBottom: theme.spacing.sm,
            }}
          >
            {collection.title}
          </h3>

          <p
            style={{
              color: theme.colors.textLight,
              lineHeight: theme.typography.lineHeight.relaxed,
              fontSize: theme.typography.fontSize.base,
            }}
          >
            {collection.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
/**
 * Visitor Journey
 * Discover → Imagine
 */