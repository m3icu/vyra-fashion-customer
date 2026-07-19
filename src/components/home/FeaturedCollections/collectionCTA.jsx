/**
 * --------------------------------------------------------
 * VYRA Fashion
 * CollectionCTA
 * --------------------------------------------------------
 *
 * A gentle invitation
 * to continue the story.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import theme from "../../../theme";

export default function CollectionCTA({ cta }) {
  return (
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
      {cta}

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
  );
}