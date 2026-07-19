/**
 * --------------------------------------------------------
 * VYRA Fashion
 * NavMenu
 *
 * Gentle navigation.
 * Calm exploration.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { NavLink } from "react-router-dom";
import { theme } from "../../../theme";

const menus = [
  {
    label: "Collections",
    to: "/collections",
  },
  {
    label: "Journal",
    to: "/journal",
  },
  {
    label: "About",
    to: "/about",
  },
];

export default function NavMenu() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing.xl,
      }}
      className="hidden md:flex"
    >
      {menus.map((menu) => (
      <NavLink
        key={menu.to}
        to={menu.to}
        className={({ isActive }) => `
          relative
          py-2
          no-underline
          transition-colors
          duration-300
          ease-out

          after:absolute
          after:bottom-0
          after:left-1/2
          after:h-px
          after:-translate-x-1/2
          after:bg-[var(--nav-underline)]
          after:transition-all
          after:duration-300
          after:ease-out

          ${
            isActive
              ? "text-[var(--nav-hover)] after:w-full"
               : "after:w-0 hover:text-[var(--nav-hover)] hover:after:w-full"
          }
        `}
          style={{
            "--nav-underline": theme.colors.primary,
            "--nav-hover": theme.colors.primary,

            color: theme.colors.text,

            fontSize: theme.typography.fontSize.sm,

            fontWeight: theme.typography.fontWeight.medium,

            fontFamily: theme.typography.fontFamily,

            letterSpacing: "0.04em",
          }}
        >
          {menu.label}
        </NavLink>
      ))}
    </nav>
  );
}

/**
 * Visitor Journey
 * Welcome → Explore → Discover
 */