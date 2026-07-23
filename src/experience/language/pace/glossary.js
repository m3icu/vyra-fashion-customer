/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Language
 * Pace Glossary
 * --------------------------------------------------------
 */

import pace from "./pace";

const glossary = Object.freeze({

    [pace.SLOW]: {

        id: pace.SLOW,

        title: "Slow",

        description:
            "Allow visitors to absorb content without pressure.",

        intent:
            "Encourage reflection and emotional comfort.",

        usage: [
            "Homepage",
            "Brand Story",
            "Editorial"
        ],

        avoid: [
            "Flash Sale",
            "Urgent countdown"
        ],

        notes:
            "Luxury never feels rushed."

    },

    [pace.STEADY]: {

        id: pace.STEADY,

        title: "Steady",

        description:
            "Maintain a comfortable rhythm from section to section.",

        intent:
            "Keep visitors engaged without fatigue.",

        usage: [
            "Collection Page",
            "Search Results"
        ],

        avoid: [
            "Abrupt transitions"
        ],

        notes:
            "Consistency builds confidence."

    },

    [pace.DYNAMIC]: {

        id: pace.DYNAMIC,

        title: "Dynamic",

        description:
            "Increase movement while preserving clarity.",

        intent:
            "Support exploration and discovery.",

        usage: [
            "Seasonal Campaign",
            "Interactive Lookbook"
        ],

        avoid: [
            "Constant motion"
        ],

        notes:
            "Dynamic should feel energetic, not chaotic."

    }

});

export default glossary;