/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Component : FeaturedProductsHeader
 * --------------------------------------------------------
 *
 * Mission
 * Introduce the featured collection
 * through an editorial perspective.
 *
 * Inspire confidence before commerce.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import Heading from "../../common/Heading";

export default function FeaturedProductsHeader() {
  return (
    <div className="max-w-3xl mx-auto text-center">

      <Heading
        eyebrow="Curated Selection"
        size="display"
        title={
          <>
            Pieces chosen
            <br />
            for meaningful moments
          </>
        }
      />

      <p className="mt-6 text-lg leading-8 text-stone-600">
        Every piece is thoughtfully selected to accompany everyday
        stories with comfort, confidence, and timeless simplicity.
      </p>

    </div>
  );
}