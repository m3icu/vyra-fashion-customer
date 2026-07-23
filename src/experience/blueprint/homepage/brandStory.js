/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Homepage Blueprint
 *
 * Scene:
 * Homepage Brand Story
 *
 * Mission:
 * Create emotional connection
 * between people and the brand.
 *
 * Every great brand begins with
 * a meaningful story.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import {
    emotion,
    mood,
    tone,
    purpose,
    energy,
    pace,
    trust,
    attention,
    sensory,
    profile,
} from "../../language";

const brandStory = Object.freeze({

    id: "homepage.brandStory",

    mission:
        "Create emotional connection between people and the brand.",

    profile:
        profile.MODERN_CRAFT,

    language: {

        emotion:
            emotion.CONNECTION,

        mood:
            mood.WARM_ATELIER,

        tone:
            tone.AUTHENTIC,

        purpose:
            purpose.CONNECT,

        energy:
            energy.LOW,

        pace:
            pace.SLOW,

        trust:
            trust.GROWING,

        attention:
            attention.STORY,

        sensory:
            sensory.WARM,

    },

    narrative: {

        role:
            "emotional-bridge",

        structure: [

            "human",

            "belief",

            "meaning",

        ],

        message:
            "Fashion accompanies meaningful moments.",

    },

    editorial: {

        weight:
            "very-high",

        photography:
            "human-centered",

        typography:
            "reflective",

        whitespace:
            "generous",

    },

    interaction: {

        primaryAction:
            "continue-reading",

        readingBehavior:
            "pause-and-reflect",

    },

    memory: {

        enabled:
            true,

        trigger:
            "personal moments",

        objective:
            "Create emotional recall through meaningful storytelling.",

    },

    commerce: {

        priority:
            "none",

        objective:
            "Strengthen brand relationship before selling.",

    },

});

export default brandStory;