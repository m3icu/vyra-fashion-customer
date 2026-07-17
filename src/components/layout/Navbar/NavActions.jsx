/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Component : NavActions
 * --------------------------------------------------------
 *
 * Mission
 * Give visitors a gentle place to keep what matters.
 *
 * Everything they love begins here,
 * one meaningful piece at a time.
 *
 * Design Principles
 * • Calm
 * • Warm
 * • Intentional
 * • Timeless
 *
 *
 * Build with Heart.
 * --------------------------------------------------------
 */
import { Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import theme from "../../../theme";

const actions = [
  {
    icon: Heart,
    to: "/wishlist",
    label: "Wishlist",
  },
  {
    icon: ShoppingBag,
    to: "/cart",
    label: "Shopping Bag",
  },
  {
    icon: User,
    to: "/account",
    label: "Account",
  },
];

export default function NavActions() {
  return (
    <div
      className="hidden lg:flex"
      style={{
        display: "flex",
        alignItems: "center",
        gap: theme.spacing.md,
      }}
    >
      {actions.map(({ icon: Icon, to, label }) => (
        <Link
          key={to}
          to={to}
          aria-label={label}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.colors.text,
            transition: "color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = theme.colors.primary;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = theme.colors.text;
          }}
        >
          <Icon size={20} strokeWidth={1.8} />
        </Link>
      ))}
    </div>
  );
}
/** 
 * Visitor Journey
 * Discover → Save → Return
 */