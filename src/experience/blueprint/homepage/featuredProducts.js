/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Homepage Blueprint
 *
 * Scene:
 * Homepage Featured Products
 *
 * Mission:
 * Transform products into
 * confident choices.
 *
 * Carefully curated products should
 * help visitors imagine meaningful
 * moments before making decisions.
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

const featuredProducts = Object.freeze({

    id: "homepage.featuredProducts",

    mission:
        "Transform products into confident choices.",

    profile:
        profile.QUIET_CONFIDENCE,

    language: {

        emotion:
            emotion.CONFIDENCE,

        mood:
            mood.QUIET_LUXURY,

        tone:
            tone.CLEAR,

        purpose:
            purpose.DECIDE,

        energy:
            energy.MEDIUM,

        pace:
            pace.STEADY,

        trust:
            trust.ESTABLISHED,

        attention:
            attention.DECISION,

        sensory:
            sensory.REFINED,

    },

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

        primaryAction:
            "discover-piece",

        browsingBehavior:
            "compare-and-reflect",

    },

    curation: {

        enabled:
            true,

        style:
            "editor-choice",

        quantity:
            "limited",

        organization:
            "meaning-before-popularity",

    },

    commerce: {

        priority:
            "supporting",

        objective:
            "Increase purchase confidence through thoughtful curation.",

    },

});

export default featuredProducts;