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
import CollectionContent from "./CollectionContent";

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

        <CollectionContent collection={collection} />
         
        
      </div>
    </Link>
  );
}
/**
 * Visitor Journey
 * Discover → Imagine
 */