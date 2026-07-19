/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Component : MobileMenu
 * --------------------------------------------------------
 *
 * Mission
 * Bring the warmth of VYRA into every hand,
 * making every journey feel simple and familiar.
 *
 * Design Principles
 * • Calm
 * • Warm
 * • Spacious
 * • Intuitive
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import theme from "../../../theme";

const links = [
  { label: "Collections", to: "/collections" },
  { label: "Journal", to: "/journal" },
  { label: "About", to: "/about" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      {/* Menu Button */}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: theme.radius.md,
          backgroundColor: "transparent",
          color: theme.colors.text,
          cursor: "pointer",
        }}
      >
        {open ? (
          <X size={22} strokeWidth={1.5} />
        ) : (
          <Menu size={22} strokeWidth={1.5} />
        )}
      </button>

     {/* Mobile Navigation */}

      <div
        className={`
          absolute
          right-0
          top-14
          w-64
          rounded-2xl
          border
          p-6
          shadow-lg
          transition-all
          duration-300
          ease-out
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
          style={{
            backgroundColor: theme.colors.surfaceAlt,
            borderColor: theme.colors.divider,
          }}
        >

          {/* Navigation */}

          <nav className="flex flex-col gap-5">

            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                style={{
                  color: theme.colors.text,
                  textDecoration: "none",
                  fontSize: theme.typography.fontSize.lg,
                }}
              >
                {link.label}
              </Link>
            ))}

          </nav>

          {/* Actions */}

          <div
            style={{
              marginTop: theme.spacing.xl,
              paddingTop: theme.spacing.lg,
              borderTop: `1px solid ${theme.colors.divider}`,
            }}
          >
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              style={{
                color: theme.colors.textLight,
                textDecoration: "none",
                fontSize: theme.typography.fontSize.base,
              }}
            >
              Sign In
            </Link>
          </div>

          {/* Search */}

          <div
            style={{
              marginTop: theme.spacing.lg,
            }}
          >
            <Link
              to="/search"
              onClick={() => setOpen(false)}
              style={{
                color: theme.colors.textMuted,
                textDecoration: "none",
                fontSize: theme.typography.fontSize.sm,
              }}
            >
              Search
            </Link>
          </div>
        </div>

    </div>
  );
}

/**
 *
 * Visitor Journey
 * Arrive → Open → Explore → Feel at Home
 */