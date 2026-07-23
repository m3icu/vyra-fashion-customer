/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Homepage Blueprint
 *
 * Scene:
 * Homepage Hero
 *
 * Mission:
 * Create the first emotional connection.
 *
 * The Hero welcomes visitors into
 * the VYRA world through aspiration,
 * warmth, and quiet confidence.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import {
    emotion,
    purpose,
    pace,
    profile,
    mood,
    tone,
    energy,
    trust,
    attention,
    sensory
} from "../../language";

const hero = Object.freeze({

    id: "homepage.hero",

    mission:
        "Create the first emotional connection.",

    profile:
        profile.GENTLE_LUXURY,

    language: {

        emotion:
            emotion.WONDER,

        mood:
            mood.SOFT_MORNING,

        tone:
            tone.WARM,

        purpose:
            purpose.DISCOVER,

        energy:
            energy.LOW,

        pace:
            pace.SLOW,

        trust:
            trust.GROWING,

        attention:
            attention.FIRST_IMPRESSION,

        sensory:
            sensory.SOFT,

    },

    narrative: {

        role:
            "opening",

        message:
            "Fashion accompanies meaningful moments.",

    },

    editorial: {

        weight:
            "high",

        photography:
            "immersive",

        typography:
            "display",

        whitespace:
            "airy",

    },

    interaction: {

        primaryAction:
            "discover",

        scrollBehavior:
            "continue-story",

    },

    commerce: {

        priority:
            "secondary",

        objective:
            "build-curiosity",

    },

});

export default hero;