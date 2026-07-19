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
import theme from "../../../theme";
import MoodViewport from "./MoodViewport";

export default function CollectionCard({ collection }) {
  const preset = theme.mood[collection.preset];
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
        className="
          overflow-hidden
          transition-all
          duration-300
          ease-out
          group-hover:-translate-y-1
          group-hover:shadow-lg
        "
        style={{
          background: theme.colors.surface,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: theme.radius.xl,
        }}
      >

        <MoodViewport preset={preset} />

        {/* Content */}

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

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                transition-all
                duration-300
                ease-out
                group-hover:gap-3
              "
              style={{
                color: theme.colors.primary,
              }}
            >
              {collection.cta}

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </div>
          
        </div>
      </div>
    </Link>
  );
}
/**
 * Visitor Journey
 * Discover → Imagine
 */