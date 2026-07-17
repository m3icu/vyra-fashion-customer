/**
 * --------------------------------------------------------
 * VYRA Fashion
 * NavLogo
 *
 * The signature of VYRA.
 *
 * Quiet.
 * Elegant.
 * Timeless.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { Link } from "react-router-dom";
import { theme } from "../../../theme";

export default function NavLogo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center transition-colors duration-300"
      style={{
        color: theme.colors.primary,
      }}
      aria-label="VYRA Fashion Home"
    >
      <span
        className="select-none text-2xl font-semibold tracking-[0.18em]"
      >
        VYRA
      </span>
    </Link>
  );
}