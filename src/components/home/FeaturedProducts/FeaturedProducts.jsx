/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Component : FeaturedProducts
 * --------------------------------------------------------
 *
 * Mission
 * Curate products through storytelling,
 * not overwhelming choices.
 *
 * This section introduces products
 * as carefully selected companions
 * for meaningful moments.
 *
 * Responsibility
 * • Compose the section
 * • Provide product data
 * • Delegate rendering to child components
 *
 * Build with Heart.
 * --------------------------------------------------------
 */
import Section from "../../common/Section";

import FeaturedProductsHeader from "./FeaturedProductsHeader";
import FeaturedProductsGrid from "./FeaturedProductsGrid";

import products from "./featuredProducts.data";

<Section>
    <FeaturedProductsHeader />

    <FeaturedProductsGrid
        products={products}
    />
</Section>