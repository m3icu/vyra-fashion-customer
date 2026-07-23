/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Engine
 *
 * Narrative Decision Table
 *
 * Maps emotions into
 * runtime narrative behavior.
 *
 * Narrative shapes meaning,
 * not content.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { emotion } from "../language";

const narrative = Object.freeze({

    [emotion.WONDER]: {

        hierarchy:
            "story-first",

        emphasis:
            "emotion",

        voice:
            "aspirational",

        density:
            "light",

        rhythm:
            "slow",

        feeling:
            "possibility",

    },

    [emotion.CURIOSITY]: {

        hierarchy:
            "discovery-first",

        emphasis:
            "exploration",

        voice:
            "editorial",

        density:
            "balanced",

        rhythm:
            "flowing",

        feeling:
            "discovery",

    },

    [emotion.CONNECTION]: {

        hierarchy:
            "meaning-first",

        emphasis:
            "human",

        voice:
            "warm",

        density:
            "reflective",

        rhythm:
            "gentle",

        feeling:
            "belonging",

    },

    [emotion.CONFIDENCE]: {

        hierarchy:
            "clarity-first",

        emphasis:
            "decision",

        voice:
            "assured",

        density:
            "balanced",

        rhythm:
            "steady",

        feeling:
            "certainty",

    },

    [emotion.INSPIRATION]: {

        hierarchy:
            "vision-first",

        emphasis:
            "possibility",

        voice:
            "uplifting",

        density:
            "airy",

        rhythm:
            "expansive",

        feeling:
            "imagination",

    },

    [emotion.TRUST]: {

        hierarchy:
            "proof-first",

        emphasis:
            "credibility",

        voice:
            "honest",

        density:
            "comfortable",

        rhythm:
            "consistent",

        feeling:
            "security",

    },

});

export default narrative;