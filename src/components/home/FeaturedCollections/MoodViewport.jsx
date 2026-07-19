/**
 * --------------------------------------------------------
 * VYRA Fashion
 * MoodViewport
 * --------------------------------------------------------
 *
 * The emotional canvas
 * before photography.
 *
 * Mood lives here.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import theme from "../../../theme";

export default function MoodViewport({ preset }) {
  return (
    <div
      className="
        relative
        aspect-[4/5]
        overflow-hidden
      "
    >
      <div
        className="
          relative
          h-full
          w-full
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[1.02]
        "
        style={{
          background: `linear-gradient(
            135deg,
            ${preset.gradient[0]},
            ${preset.gradient[1]},
            ${preset.gradient[2]}
          )`,
        }}
      >
        {/* Soft Accent */}
        <div
          className="
            absolute
            -right-10
            -top-10
            h-40
            w-40
            rounded-full
          "
          style={{
            background: preset.accent,
            opacity: 0.08,
          }}
        />

        {/* Future Photography */}

        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: 1,
            background: theme.colors.border,
          }}
        />
      </div>
    </div>
  );
}