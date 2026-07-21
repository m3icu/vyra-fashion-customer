/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Scene Blueprint
 *
 * Defines emotional direction
 * before component implementation.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */
const sceneBlueprints = Object.freeze({

  hero: {
    emotion: "wonder",

    visible: {

      eyebrow:
      "A Quiet Beginning",

      headline:
      "Fashion for Every Meaningful Moment.",

      description:
      "Designed to accompany the quiet moments, the joyful moments, and every story in between."

    },

    visitorThought:
      "This feels different.",

    memoryTrigger:
      "morning",

    scene:
      "A quiet morning filled with gentle light and calm anticipation.",
  },

  collections: {
    emotion: "curiosity",

    visitorThought:
      "Which one feels like me?",

    memoryTrigger:
      "weekend",

    scene:
      "Walking through a quiet boutique where every collection tells a different story.",
  },

  brandStory: {
    emotion: "connection",

    visitorThought:
      "Now I understand.",

    memoryTrigger:
      "home",

    scene:
      "Someone quietly sharing why these pieces are made with intention.",

  },

  products: {

    emotion: "confidence",

    visitorThought:
      "This feels right.",

    scene:
      "Finding a piece that belongs to your own story.",

    memoryTrigger:
      "celebration",
  },

});

export default sceneBlueprints;