/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Component : ProductStoryCard
 * --------------------------------------------------------
 *
 * Mission
 * Present products as stories,
 * not inventory.
 *
 * Every card should inspire
 * confidence before commerce.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { Link } from "react-router-dom";
import { theme } from "../../../theme";

export default function ProductStoryCard({ product }) {
  return (
    <article
      className={`
        group
        flex
        flex-col
        overflow-hidden
        ${theme.radius.xxl}
        style={{
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.xxl,
        }}
        style={{
          transitionDuration: theme.transition.normal,
          transitionTimingFunction:
          theme.transition.easing.standard
        }}
      `}
    >

      {/* Product Image */}
      <Link to={`/products/${product.slug}`}>
        <div
          className={`
          aspect-[4/5]
          overflow-hidden
          ${theme.colors.surfaceAlt}
        `}
      />
      </Link>

      {/* Editorial Content */}
      <div className="flex flex-1 flex-col pt-8">

        {/* Mood */}
        <p 
          className="
            text-xs 
            uppercase 
            tracking-[0.2em] 
          "
          style={{
            color: theme.colors.textMuted,
          }}
        >
          {product.mood}
        </p>

        {/* Story */}
        <p className="mt-4 text-base leading-7 theme.colors.textLight">
          {product.story}
        </p>

        {/* Optional Quote */}
        {product.quote && (
          <blockquote
            style={{
              borderColor: theme.colors.border,
              color: theme.colors.textMuted,
            }}
          > 
            "{product.quote}"
          </blockquote>
        )}

        {/* Product Name */}
        <h3 className="mt-8 text-xl font-medium theme.colors.text">
          {product.title}
        </h3>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">

          <span className="text-lg font-medium text-stone-900">
            {product.price}
          </span>

          <Link
            to={`/products/${product.slug}`}
            style={{
              color: theme.colors.textLight,
              transitionDuration: theme.transition.normal,
            }}
          >
            View Details →
          </Link>

        </div>

      </div>

    </article>
  );
}