/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Language
 * Tone Glossary
 * --------------------------------------------------------
 */

import tone from "./tone";

const glossary = Object.freeze({

    [tone.GENTLE]: {

        id: tone.GENTLE,

        title: "Gentle",

        description:
            "Communicate with warmth and calm.",

        intent:
            "Create emotional safety.",

        usage: [
            "Homepage",
            "Customer Support"
        ],

        avoid: [
            "Aggressive wording"
        ],

        notes:
            "Kindness is always clear."

    },

    [tone.CONFIDENT]: {

        id: tone.CONFIDENT,

        title: "Confident",

        description:
            "Communicate with clarity and certainty.",

        intent:
            "Build trust without sounding arrogant.",

        usage: [
            "Checkout",
            "Policies"
        ],

        avoid: [
            "Overpromising"
        ],

        notes:
            "Confidence comes from honesty."

    },

    [tone.REFINED]: {

        id: tone.REFINED,

        title: "Refined",

        description:
            "Express elegance through simplicity.",

        intent:
            "Reflect premium craftsmanship.",

        usage: [
            "Luxury Collections",
            "Editorial"
        ],

        avoid: [
            "Buzzwords",
            "Exaggeration"
        ],

        notes:
            "Refined language is precise."

    },

    [tone.INSPIRING]: {

        id: tone.INSPIRING,

        title: "Inspiring",

        description:
            "Encourage imagination through meaningful storytelling.",

        intent:
            "Motivate without persuasion.",

        usage: [
            "Campaign",
            "Lookbook"
        ],

        avoid: [
            "Clickbait"
        ],

        notes:
            "Stories inspire more than slogans."

    }

});

export default glossary;