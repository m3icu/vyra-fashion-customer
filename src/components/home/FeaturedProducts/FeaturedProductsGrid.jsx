/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Component : FeaturedProductsGrid
 * --------------------------------------------------------
 *
 * Mission
 * Arrange curated products into
 * a calm, responsive editorial layout.
 *
 * Responsibility
 * • Render product cards
 * • Manage responsive grid
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import ProductStoryCard from "./ProductStoryCard";

export default function FeaturedProductsGrid({ products }) {
  return (
    <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductStoryCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}