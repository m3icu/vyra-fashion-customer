/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Experience Blueprint
 *
 * Scene:
 * Homepage Featured Products
 *
 * Mission:
 * Transform products into
 * confident choices.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

const featuredProducts = Object.freeze({

  id:
    "homepage.featuredProducts",


  emotion:
    "confidence",


  purpose:
    "Help visitors imagine themselves living with the product.",


  readingPace:
    "medium",


  narrative: {

    role:
      "curated-selection",


    structure: [

      "mood",

      "story",

      "product",

      "choice",

    ],


    message:
      "These pieces were thoughtfully chosen for meaningful moments.",

  },


  editorial: {

    weight:
      "high",


    photography:
      "product-with-context",


    typography:
      "editorial",


    whitespace:
      "airy",

  },


  interaction: {

    motion:
      "calm-hover",


    discovery:
      "explore-details",

  },


  curation: {

    enabled:
      true,


    style:
      "editor-choice",


    quantity:
      "limited",

  },


  commerce: {

    priority:
      "supporting",


    action:
      "discover-piece",

  },


});


export default featuredProducts;