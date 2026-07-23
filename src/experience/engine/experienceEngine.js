/**
 * --------------------------------------------------------
 * VYRA Experience OS
 * Experience Engine
 *
 * The brain of Experience OS.
 *
 * Interprets resolved experience
 * into runtime decisions.
 *
 * Engine decides.
 * Translator visualizes.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */

import motion from "./motion";
import narrative from "./narrative";
import readingPace from "./readingPace";

function createExperience(experience) {

    if (!experience) {

        throw new Error(
            "Resolved experience is required."
        );

    }

    const { language } = experience;

    const decisions = Object.freeze({

        motion:
            motion[
                language.emotion
            ],

        narrative:
            narrative[
                language.emotion
            ],

        reading:
            readingPace[
                language.pace
            ],

    });

    return Object.freeze({

        ...experience,

        decisions,

    });

}

export {
    createExperience,
};