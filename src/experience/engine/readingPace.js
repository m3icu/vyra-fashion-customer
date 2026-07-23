/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Engine
 *
 * Reading Pace Decision Table
 *
 * Maps reading pace into
 * runtime reading behavior.
 *
 * Reading pace shapes rhythm,
 * not typography.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import { pace } from "../language";

const readingPace = Object.freeze({

    [pace.SLOW]: {

        rhythm:
            "reflective",

        spacing:
            "airy",

        density:
            "light",

        pause:
            true,

        scan:
            "immersive",

    },

    [pace.MEDIUM]: {

        rhythm:
            "balanced",

        spacing:
            "comfortable",

        density:
            "medium",

        pause:
            false,

        scan:
            "editorial",

    },

    [pace.FAST]: {

        rhythm:
            "dynamic",

        spacing:
            "compact",

        density:
            "high",

        pause:
            false,

        scan:
            "efficient",

    },

});

export default readingPace;