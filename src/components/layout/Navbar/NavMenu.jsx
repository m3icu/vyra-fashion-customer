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

import { Link } from "react-router-dom";
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
        <Link
          key={menu.to}
          to={menu.to}
          style={{
            color: theme.colors.text,
            textDecoration: "none",
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.sm,
            fontFamily: theme.typography.fontFamily,
            letterSpacing: "0.04em",
            transition: "all .25s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = theme.colors.primary;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = theme.colors.text;
          }}
        >
          {menu.label}
        </Link>
      ))}
    </nav>
  );
}

/**
 * Visitor Journey
 * Welcome → Explore → Discover
 */