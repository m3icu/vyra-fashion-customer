/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Component : NavSearch
 * --------------------------------------------------------
 *
 * Mission
 * A gentle invitation to discover meaningful pieces.
 *
 * "Looking for something meaningful?"
 *
 * This search should never dominate the navigation.
 * It quietly waits until the visitor needs it.
 *
 * Design Principles
 * • Calm
 * • Warm
 * • Timeless
 * • Unobtrusive
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { Search } from "lucide-react";
import theme from "../../../theme";

export default function NavSearch() {
  return (
    <div
      className="hidden lg:flex"
      style={{
        alignItems: "center",
        gap: theme.spacing.sm,
        padding: "8px 14px",
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radius.full,
        background: theme.colors.background,
        transition: `all $(theme.transition.normal} ${theme.transition.easing}`,
      }}
    >
      <Search
        size={theme.icon.md}
        color={theme.colors.textMuted}
      />

      <input
        type="text"
        placeholder="Search pieces..."
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
          color: theme.colors.text,
          fontSize: theme.typography.fontSize.sm,
          width: "150px",
        }}
      />
    </div>
  );
}
/**
 * Visitor Journey
 * Explore → Discover
 */