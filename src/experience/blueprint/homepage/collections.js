/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Homepage Blueprint
 *
 * Scene:
 * Homepage Featured Collections
 *
 * Mission:
 * Transform categories into
 * emotional discovery.
 *
 * Every collection tells
 * a different story.
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

const collections = Object.freeze({

    id: "homepage.collections",

    mission:
        "Transform categories into emotional discovery.",

    profile:
        profile.WARM_DISCOVERY,

    language: {

        emotion:
            emotion.CURIOSITY,

        mood:
            mood.GOLDEN_HOUR,

        tone:
            tone.INSPIRING,

        purpose:
            purpose.EXPLORE,

        energy:
            energy.MEDIUM,

        pace:
            pace.COMFORTABLE,

        trust:
            trust.GROWING,

        attention:
            attention.EXPLORATION,

        sensory:
            sensory.AIRY,

    },

    narrative: {

        role:
            "exploration",

        message:
            "Every collection represents a different moment in life.",

    },

    editorial: {

        weight:
            "high",

        photography:
            "story-driven",

        typography:
            "editorial",

        whitespace:
            "balanced",

    },

    interaction: {

        primaryAction:
            "explore-collection",

        browsingBehavior:
            "curiosity-led",

    },

    curation: {

        style:
            "intentional",

        quantity:
            "limited",

        organization:
            "story-first",

    },

    commerce: {

        priority:
            "secondary",

        objective:
            "Encourage exploration before product evaluation.",

    },

});

export default collections;