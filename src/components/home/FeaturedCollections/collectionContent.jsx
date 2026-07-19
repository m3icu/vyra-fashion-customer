/**
 * --------------------------------------------------------
 * VYRA Fashion
 * CollectionContent
 * --------------------------------------------------------
 *
 * Every collection begins
 * with a story.
 *
 * This component is responsible
 * for presenting that story.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import theme from "../../../theme";
import CollectionCTA from "./CollectionCTA";

export default function CollectionContent({ collection }) {
  return (
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

      <CollectionCTA cta={collection.cta} />
    </div>
  );
}