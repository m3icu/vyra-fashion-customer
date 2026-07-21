/**
 * --------------------------------------------------------
 * VYRA Fashion
 *
 * Homepage Experience Registry
 *
 * Maps experience identity
 * to blueprint source.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import {
  heroBlueprint,
  collectionsBlueprint,
  brandStoryBlueprint,
  featuredProductsBlueprint,
}
from "../blueprint";


const homepageExperiences = Object.freeze({

  "homepage.hero":
    heroBlueprint,


  "homepage.collections":
    collectionsBlueprint,


  "homepage.brandStory":
    brandStoryBlueprint,


  "homepage.featuredProducts":
    featuredProductsBlueprint,


});


export default homepageExperiences;